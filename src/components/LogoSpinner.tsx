import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const companies = [
  'Rabobank',
  'ING',
  'ABN AMRO',
  'Achmea',
  'KPN',
  'Philips',
  'Shell',
  'Unilever',
];

export function LogoSpinner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 bg-primary/5 flex items-center justify-center overflow-hidden">
      <div className="flex items-center gap-4 text-primary">
        <span className="text-sm font-medium">Trusted by:</span>
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-sm font-bold min-w-[120px] text-center"
        >
          {companies[currentIndex]}
        </motion.span>
      </div>
    </div>
  );
}