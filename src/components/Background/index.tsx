import { useRef, useEffect, useState } from 'react';

const originalWidth = 2309;
const originalHeight = 1299;
const totalStars = 7500;
const StarInterval = 50;
const desiredStars = 100;

type StarType = {
  x: number;
  y: number;
  color: [number, number, number];
  size: number;
  opacity: number;
};

function GeneratePromises(desiredStars: number, fileIndex: number) {
  const colorPromises = [];
  const posPromises = [];
  const sizePromises = [];
  for (let i = 0; i < desiredStars / 100; i++) {
    colorPromises.push(
      fetch(`/colors/starColors${fileIndex + i}.json`).then((response) =>
        response.json()
      )
    );
    posPromises.push(
      fetch(`/pos/starPos${fileIndex + i}.json`).then((response) =>
        response.json()
      )
    );
    sizePromises.push(
      fetch(`/sizes/starSizes${fileIndex + i}.json`).then((response) =>
        response.json()
      )
    );
  }
  return [colorPromises, posPromises, sizePromises];
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [multiplier, setMultiplier] = useState({ x: 1.0, y: 1.0 });
  const [stars, setStars] = useState<StarType[]>([]);
  const [fileIndex, setFileIndex] = useState(0);

  useEffect(() => {
    const resize = () => {
      setMultiplier({
        x: window.innerWidth / originalWidth,
        y: window.innerHeight / originalHeight,
      });
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const fetchData = async (index: number) => {
    try {
      const [colorPromises, posPromises, sizePromises] = GeneratePromises(
        desiredStars,
        index
      );

      const resolvedColorData = [] as { c: [number, number, number] }[][];
      const resolvedPosData = [] as { p: [number, number] }[][];
      const resolvedSizeData = [] as { s: number }[][];

      for (let i = 0; i < colorPromises.length; i++) {
        resolvedColorData.push(await colorPromises[i]);
        resolvedPosData.push(await posPromises[i]);
        resolvedSizeData.push(await sizePromises[i]);
      }

      if (
        resolvedColorData.length != desiredStars / 100 ||
        resolvedPosData.length != desiredStars / 100 ||
        resolvedSizeData.length != desiredStars / 100
      ) {
        return;
      }

      const newStars = resolvedColorData.flatMap((colorData, i) => {
        return colorData.map(
          (color: { c: [number, number, number] }, idx: number) => ({
            x: resolvedPosData[i][idx].p[0],
            y: resolvedPosData[i][idx].p[1],
            color: color.c,
            size: resolvedSizeData[i][idx].s,
            opacity: 0,  // Initial opacity
          })
        );
      });

      setStars((prevStars) => [...prevStars, ...newStars]);
    } catch (error) {
      console.error('Error loading star data:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (fileIndex >= totalStars / desiredStars) {
        clearInterval(interval);
        return;
      }
      fetchData(fileIndex);
      setFileIndex((prevIndex) => prevIndex + 1);
    }, StarInterval);

    return () => clearInterval(interval);
  }, [fileIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    let animationFrameId: number;

    const render = () => {
      if (canvas && context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
          star.opacity = Math.min(star.opacity + 0.01, 1);  // Increase opacity
          context.beginPath();
          context.arc(
            star.x * multiplier.x,
            star.y * multiplier.y,
            star.size / 2,
            0,
            Math.PI * 2
          );
          context.fillStyle = `rgba(${star.color[0]}, ${star.color[1]}, ${star.color[2]}, ${star.opacity})`;
          context.fill();
          context.closePath();
        });
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [stars, multiplier]);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className='blur-sm'/>;
}
