import { useState, useEffect } from 'react';


// We will take in  the file index and the desired amount of stars that need to be added to grab the data from the server
function GeneratePromises(desiredStars: number, fileIndex: number) {
    const colorPromises = [];
    const posPromises = [];
    const sizePromises = [];
    for (let i = 0; i < (desiredStars / 100); i++) {
        colorPromises.push(fetch(`/colors/starColors${fileIndex + i}.json`).then(response => response.json()));
        posPromises.push(fetch(`/pos/starPos${fileIndex + i}.json`).then(response => response.json()));
        sizePromises.push(fetch(`/sizes/starSizes${fileIndex + i}.json`).then(response => response.json()));
    }
    return [colorPromises, posPromises, sizePromises];

}

type Star = {
    x: number;
    y: number;
    color: [number, number, number];
    size: number;
}

const originalWidth = 2309;
const originalHeight = 1299;
const totalStars = 10000;
const StarInterval = 2000;
const desiredStars = 500;

export default function Background() {
    const [multiplierX, setMultiplierX] = useState(1.0);
    const [multiplierY, setMultiplierY] = useState(1.0);
    const [stars, setStars] = useState([] as Star[]);
    const [fileIndex, setFileIndex] = useState(0);

    useEffect(() => {
        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setMultiplierX(width / originalWidth);
            setMultiplierY(height / originalHeight);
        };

        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    

    const fetchData = async (index: number) => {
        try {
            const [colorPromises, posPromises, sizePromises] = GeneratePromises(desiredStars, index);

            const resolvedColorData = [] as { c: [number, number, number] }[][];
            const resolvedPosData = [] as { p: [number, number] }[][];
            const resolvedSizeData = [] as { s: number }[][];

            for (let i = 0; i < colorPromises.length; i++) {
                resolvedColorData.push(await colorPromises[i]);
                resolvedPosData.push(await posPromises[i]);
                resolvedSizeData.push(await sizePromises[i]);
            }

            if(resolvedColorData.length != desiredStars / 100 || resolvedPosData.length != desiredStars / 100 || resolvedSizeData.length != desiredStars / 100) {
                return;
            }

            const newStars = resolvedColorData.flatMap((colorData, i) => {
                return colorData.map((color: { c: [number, number, number] }, idx: number) => ({
                    x: resolvedPosData[i][idx].p[0],
                    y: resolvedPosData[i][idx].p[1],
                    color: color.c,
                    size: resolvedSizeData[i][idx].s,
                }));
            });

            setStars(prevStars => [...prevStars, ...newStars]);
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
            setFileIndex(prevIndex => prevIndex + 1);

        }, StarInterval);

        return () => clearInterval(interval);

    }, [fileIndex]);


    return (
        <div className='w-full h-full flex relative blur-[1px]'>
            {stars.map((star, idx) => (
                <div
                    key={idx}
                    style={{
                        position: 'absolute',
                        top: star.y * multiplierY,
                        left: star.x * multiplierX,
                        width: star.size,
                        height: star.size,
                        backgroundColor: `rgb(${star.color[0]}, ${star.color[1]}, ${star.color[2]})`,
                        borderRadius: '50%',
                    }}
                />
            ))}
        </div>
    );
}
