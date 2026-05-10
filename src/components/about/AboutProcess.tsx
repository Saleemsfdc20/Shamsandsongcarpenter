'use client';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We meet to understand your vision, requirements, and budget constraints.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed 3D designs and material selections for your approval.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our skilled craftsmen bring the design to life with precision and care.',
  },
  {
    number: '04',
    title: 'Quality Check',
    description: 'We conduct thorough inspections to ensure everything meets our high standards.',
  },
  {
    number: '05',
    title: 'Handover',
    description: 'Your transformed space is delivered with complete documentation and support.',
  },
];

export default function AboutProcess() {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F0E8]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="w-16 h-0.5 bg-[#C8A97E] mx-auto mb-6" />
          <span className="inline-block px-4 py-2 bg-[#C8A97E]/10 text-[#C8A97E] font-semibold text-sm tracking-wider uppercase mb-4">
            Our Process
          </span>
          <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            From Concept to <span className="text-gradient-luxury">Completion</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6 stagger-children">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white p-6 h-full">
                <span className="font-outfit text-5xl font-bold text-[#C8A97E]/20">{step.number}</span>
                <h3 className="font-outfit font-semibold text-lg text-[#111827] mt-4 mb-3">{step.title}</h3>
                <p className="text-[#6B7280] text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#C8A97E]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}