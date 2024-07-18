import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function TextScroll({
  text,
  delay,
  staggerDuration,
}: {
  text: string;
  delay?: number;
  staggerDuration?: number;
}) {
  return (
    <motion.div
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: staggerDuration ? staggerDuration : 0.1,
        delay: delay ? delay : 0,
      }}
      className="whitespace-pre-wrap"
    >
      {text.split(" ").map((word, idx) => {
        return (
          <motion.span variants={variants} key={idx}>
            {word + " "}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
