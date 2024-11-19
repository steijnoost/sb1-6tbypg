import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceSectionProps {
  title: string;
  content: string;
  imageUrl: string;
  index: number;
}

export function ServiceSection({ title, content, imageUrl, index }: ServiceSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="py-20 border-b border-primary/10 last:border-b-0"
    >
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${
          index % 2 === 0 ? '' : 'md:grid-flow-dense'
        }`}>
          <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
            <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
            <p className="text-lg text-primary-dark leading-relaxed mb-8">
              {content}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Lees meer
            </motion.button>
          </div>
          <motion.div
            className={`relative aspect-[4/3] ${
              index % 2 === 0 ? 'md:order-2' : 'md:order-1'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}