import { motion } from "framer-motion";

export default function TextScroll({
  delay,
  duration,
  children,
}: {
  delay?: number;
  duration: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      className="text-white"
      animate={{
        clipPath: ["inset(0 100% 0 0)", "inset(0 0 0 0)", "inset(0 0 0 0)"],
      }}
      transition={{
        duration: duration ? duration : 1,
        delay: delay ? delay : 0,
      }}
      initial={true}
    >
      {children}
    </motion.div>
  );
}
