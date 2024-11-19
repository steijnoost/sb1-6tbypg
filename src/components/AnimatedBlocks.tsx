import { motion } from 'framer-motion';
import { useState } from 'react';

interface Block {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

const blocks: Block[] = [
  {
    id: '01',
    number: '01',
    title: 'Persoonlijke Groei',
    description: 'Ontdek je authentieke leiderschapsstijl en ontwikkel je talenten tot hun volle potentieel.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '02',
    number: '02',
    title: 'Team Ontwikkeling',
    description: 'Versterk de onderlinge samenwerking en creëer een team dat elkaar aanvult en versterkt.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '03',
    number: '03',
    title: 'Organisatie Transformatie',
    description: 'Breng de ziel terug in je organisatie en creëer een cultuur van inspiratie en groei.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  }
];

export function AnimatedBlocks() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
          onHoverStart={() => setHoveredId(block.id)}
          onHoverEnd={() => setHoveredId(null)}
          initial="closed"
          animate={hoveredId === block.id ? "open" : "closed"}
        >
          {/* Background Layer */}
          <motion.div
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-secondary"
          />

          {/* Image Layer */}
          <motion.div
            variants={{
              closed: { opacity: 0, scale: 1.1 },
              open: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={block.image}
              alt={block.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>

          {/* Content Layer */}
          <div className="relative z-10 h-full p-8 flex flex-col">
            <motion.span
              variants={{
                closed: { opacity: 0.5, y: 0 },
                open: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold text-primary"
            >
              {block.number}
            </motion.span>

            <motion.div
              variants={{
                closed: { y: 0 },
                open: { y: -20 }
              }}
              transition={{ duration: 0.5 }}
              className="mt-auto"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {block.title}
              </h3>
              
              <motion.p
                variants={{
                  closed: { opacity: 0, y: 20 },
                  open: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                {block.description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}