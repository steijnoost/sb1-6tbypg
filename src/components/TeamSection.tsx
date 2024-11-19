import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatedText
              text="Ons Team"
              className="text-4xl font-bold mb-6 text-primary-dark"
            />
            <p className="text-lg text-primary leading-relaxed mb-8">
              Ons team bestaat uit ervaren professionals die hun expertise bundelen
              om organisaties te helpen groeien en transformeren. Met diverse
              achtergronden in leiderschap, organisatieontwikkeling en coaching,
              bieden we een unieke mix van perspectieven en vaardigheden.
            </p>
            <p className="text-lg text-primary leading-relaxed">
              Samen werken we aan het creëren van duurzame verandering en het
              ontwikkelen van authentiek leiderschap binnen organisaties.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
              alt="Team Member 1"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
              alt="Team Member 2"
              className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Team Member 3"
              className="w-full h-48 object-cover rounded-lg shadow-lg col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}