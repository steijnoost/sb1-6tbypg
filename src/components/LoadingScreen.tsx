import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-secondary flex items-center justify-center z-50"
    >
      <div className="relative">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-0 w-32 h-2 bg-primary transform -translate-y-1/2"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl font-handwriting text-primary"
          style={{ WebkitTextStroke: '1px #476C77' }}
        >
          Kleurbekennen
        </motion.h1>
      </div>
    </motion.div>
  );
}