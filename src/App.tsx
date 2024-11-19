import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { TeamSection } from './components/TeamSection';
import { ServiceSection } from './components/ServiceSection';
import { LogoSpinner } from './components/LogoSpinner';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import { Brain, Rocket, Users, ChevronDown, Mail } from 'lucide-react';
import { AnimatedText } from './components/AnimatedText';
import { ServiceCard } from './components/ServiceCard';
import { DynamicArt } from './components/DynamicArt';
import { AnimatedBlocks } from './components/AnimatedBlocks';

const services = [
  {
    title: 'Test met individueel gesprek en terugkoppeling',
    content: 'Deze test geeft inzicht in persoonlijke leiderschapsvoorkeuren en groeipotentieel. Het resultaat is individuen die groeien binnen hun talenten en teams die elkaar versterken vanuit passie.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Coaching en begeleiding naar hart-gedragen leiderschap',
    content: 'Focus op persoonlijke groei en vrijheid door keuzes te maken vanuit je kern en authentieke zelf. We gebruiken tools zoals het viventie model en het Human Design profiel om fundamenten te versterken en leiderschap te verdiepen.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Dynamische teamontwikkeling',
    content: 'Met ons unieke vliegwielmodel begeleiden we teams vanuit vertrouwen naar resultaat. De nadruk ligt op het zichtbaar maken van onderstromen, het versterken van collectieve belangen, en het bouwen aan blijvend succes.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Executive Search',
    content: 'Kleur Bekennen ondersteunt bij het vinden van leidinggevende rollen die naadloos aansluiten op de visie en missie van de organisatie.',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'RvT/RvC toetsing en begeleiding',
    content: 'Onze toetsing en begeleiding dragen bij aan een heldere koers en sterke governance binnen organisaties.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'
  }
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const openFitgesprek = () => {
    window.location.href = 'mailto:info@kleurbekennen.nl?subject=Fitgesprek%20Aanvraag';
  };

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <LogoSpinner />
      <Navigation />
      
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 pt-20">
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{
                background: [
                  'linear-gradient(to right, #476C77, #587d88)',
                  'linear-gradient(to right, #587d88, #EFB071)',
                  'linear-gradient(to right, #EFB071, #476C77)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 opacity-10"
            />
          </div>
          
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <AnimatedText
                text="Transform Your Business"
                className="text-5xl md:text-6xl font-bold text-primary mb-6"
              />
              <AnimatedText
                text="Through Color and Leadership"
                className="text-3xl md:text-4xl text-primary-dark mb-8"
                delay={0.5}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-lg text-primary-dark mb-8"
              >
                Discover your true potential and transform your organization through our unique approach to leadership and organizational development.
              </motion.p>
              <motion.button
                onClick={openFitgesprek}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Plan een Fitgesprek
              </motion.button>
            </div>
            <div className="relative">
              <DynamicArt />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            content={service.content}
            imageUrl={service.imageUrl}
            index={index}
          />
        ))}

        {/* Animated Blocks Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <AnimatedBlocks />
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <AnimatedText
              text="Begin Your Journey"
              className="text-4xl font-bold text-center mb-12 text-primary"
            />
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-primary-dark mb-8">
                Ready to transform your organization? Schedule a Fitgesprek with our experts and discover how we can help you achieve your goals.
              </p>
              <motion.button
                onClick={openFitgesprek}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Plan een Fitgesprek
                </span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;