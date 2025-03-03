import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
      <div className="w-full max-w-md px-4 text-center">
        {/* Loading Text with Waving Hand */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          Hey there! Just a moment...{" "}
          <motion.span
            animate={{
              rotate: [0, 20, 0],
              display: "inline-block",
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
