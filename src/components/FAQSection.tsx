'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What areas in Mumbai do you provide interior design services?',
    answer: 'We serve all of Mumbai including Kurla, Ghatkopar, Andheri, Powai, Bandra, Juhu, and surrounding areas. Contact us to confirm if we cover your specific location.',
  },
  {
    question: 'How long does a typical interior design project take?',
    answer: 'Project duration varies based on scope. A single room renovation takes 2-3 weeks, while complete home interiors can take 2-3 months. We provide a detailed timeline during consultation.',
  },
  {
    question: 'Do you offer free design consultations and estimates?',
    answer: 'Absolutely! We offer complimentary on-site consultations and detailed cost estimates for all interior design projects. Simply contact us to schedule a convenient time.',
  },
  {
    question: 'What materials do you use for furniture and cabinetry?',
    answer: 'We use premium materials including solid wood, HDF, MDF with premium laminates, acrylic, and PU finishes. We source from trusted suppliers and offer warranties on all materials.',
  },
  {
    question: 'Do you provide modular kitchen designs?',
    answer: 'Yes! We specialize in modular kitchen designs with premium hardware, soft-close mechanisms, and customized layouts tailored to your cooking habits and space requirements.',
  },
  {
    question: 'What is your payment structure?',
    answer: 'We offer flexible payment plans structured around project milestones. Typically: 30% advance to begin, 40% during rough work, and 30% on completion.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="gold-line-center mb-6" />
          <span className="inline-block px-4 py-2 bg-[#C8A97E]/10 text-[#C8A97E] font-semibold text-sm tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="section-heading">
            Frequently Asked <span className="text-gradient-luxury">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4 stagger-children">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-outfit font-semibold text-lg text-luxury-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#C8A97E] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}