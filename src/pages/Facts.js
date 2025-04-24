import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facts = [
  { q: "What is PetCure?", a: "PetCure is a luxury pet care brand offering passive nail-filing products for pets, including PediSteps for stairs and PediWalk for hallways." },
  { q: "How do PediSteps and PediWalk work?", a: "They use textured emery surfaces on studded vinyl pads to gently file nails as your pet naturally walks over them." },
  { q: "What makes PetCure different from traditional nail clipping or grinding?", a: "No noise, no stress—just daily movement doing the work. It’s a fear-free, passive alternative to stressful grooming sessions." },
  { q: "How do I install PediSteps on my stairs?", a: "Simply place one pad on each step. The studded backing keeps them in place on carpeted stairs without adhesives." },
  { q: "Can I use PediWalk on any type of flooring?", a: "Yes! Standard versions are for carpet. We also offer a hardwood-compatible version with non-slip backing." },
  { q: "How long do the PediSteps and PediWalk pads last?", a: "Lifespan depends on usage, but most customers replace pads every 2–3 months. Refill kits are available." },
  { q: "Do I need to use a pad on every step for it to work?", a: "Yes. Using a pad on each step ensures consistent nail contact and even filing." },
  { q: "Is there a recommended direction or frequency for pets to walk on them?", a: "No specific direction is needed. Regular daily use is ideal for best results." },
  { q: "Is the emery paper safe for dogs?", a: "Yes! We use pet-safe, non-toxic materials designed for gentle abrasion." },
  { q: "What if my pet chews or licks the pads?", a: "The materials are safe, but not intended for chewing. If your pet tends to chew, supervise use or remove when unsupervised." },
  { q: "Can these be used with cats or other pets too?", a: "Yes! Many cat owners use PediSteps. Any pet with sharp nails can benefit." },
  { q: "Are the materials used non-toxic and pet-safe?", a: "Absolutely. All components meet safety standards for pets and homes." },
  { q: "What sizes and designs are available?", a: "We offer standard sizes plus multiple emery color and pattern options—including seasonal and blush-toned styles." },
  { q: "Can I order custom sizes or patterns?", a: "Yes! We accept custom orders for size, length, and visual style." },
  { q: "Are there versions for hardwood floors?", a: "Yes. The hardwood versions use a different non-slip base specifically designed for smooth flooring." },
  { q: "How do I clean the PediSteps or PediWalk?", a: "Wipe clean with a damp cloth. Avoid soaking or machine washing." },
  { q: "Can I replace the emery paper once it wears out?", a: "Yes. Replacement kits are available for all product types." },
  { q: "Do you offer a satisfaction guarantee?", a: "Yes! We offer a 30-Day Paw-satisfaction Guarantee. Love it or we’ll make it right." },
  { q: "How long will it take to receive my order?", a: "Most orders ship within 2 business days and arrive within 5–7 days (U.S. shipping)." },
  { q: "What is your return or exchange policy?", a: "Returns and exchanges are accepted within 30 days. Visit our Returns page for full details." },
];

const Facts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-10 max-w-4xl mx-auto pt-24">
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-6">FAQ</h1>
      {facts.map(({ q, a }, i) => (
        <div key={i} className="mb-6 border-b border-pink-200 pb-4">
          <button
            onClick={() => toggleAnswer(i)}
            className="text-left w-full text-xl font-semibold text-pink-500 hover:text-pink-600 transition mb-2"
          >
            {q}
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 leading-relaxed">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Facts;
