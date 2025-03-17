
import { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What makes Block City DAO different from other NFT projects?",
      answer: "Block City DAO offers a multi-dimensional value system combining location, identity, creative expression, economic, data, and governance value. Our grid-based city metaphor makes abstract blockchain assets intuitive and meaningful, while our AI integration provides unique creative tools and insights."
    },
    {
      question: "How do I purchase a grid in Block City?",
      answer: "Grid purchases are designed to be simple and barrier-free. You can browse the city map, select an available grid with your preferred number, and complete a one-time purchase to become a permanent resident, without any subscription fees or renewal requirements."
    },
    {
      question: "What can I do with my grid once purchased?",
      answer: "Your grid serves multiple purposes: a digital identity, a creative canvas, a social connection point, and an investment asset. You can customize it with AI-assisted tools, interact with neighbors, participate in governance, earn from data value, rent it out, or trade it on the secondary market."
    },
    {
      question: "How does the grid numbering system work?",
      answer: "Each grid has a unique four-digit number (e.g., 3407) that serves as both its coordinate in the city and your digital identity code. The numbering follows the principle that 'larger numbers have lower prices,' creating natural value differentiation. Many users select numbers with personal significance like birthdates."
    },
    {
      question: "What is the $BCITY token used for?",
      answer: "The $BCITY token serves multiple functions: governance voting rights, access to premium features, payment for grid enhancement services, staking rewards, and community incentives. It's an integral part of the Block City ecosystem economy."
    },
    {
      question: "How does the rental marketplace work?",
      answer: "Grid owners can rent out their space while retaining ownership. We support fixed-term rentals, revenue-sharing arrangements, and condition-triggered smart rentals. Owners keep appreciation benefits and voting rights, while tenants gain content creation rights and user identity."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-pink-900 via-purple-900 to-purple-900">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`} className="border-b border-purple-800/50">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-purple-300 hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-purple-100 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
