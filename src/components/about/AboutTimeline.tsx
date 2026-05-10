'use client';

const timeline = [
  {
    year: '2014',
    title: 'The Beginning',
    description: 'Started with a small team and a big vision to transform plumbing services in Mumbai.',
  },
  {
    year: '2016',
    title: 'First 100 Customers',
    description: 'Reached our first milestone of serving 100 satisfied customers in Kurla and nearby areas.',
  },
  {
    year: '2018',
    title: 'Expanded Services',
    description: 'Added emergency plumbing services and expanded our team to handle commercial projects.',
  },
  {
    year: '2020',
    title: 'Digital Presence',
    description: 'Launched online booking and WhatsApp support for convenient customer access.',
  },
  {
    year: '2022',
    title: '500+ Happy Customers',
    description: 'Celebrated serving over 500 residential and commercial customers across Mumbai.',
  },
  {
    year: '2024',
    title: 'Market Leader',
    description: 'Recognized as one of Mumbai\'s most trusted plumbing service providers.',
  },
];

export default function AboutTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeIn">
          <span className="inline-block px-4 py-2 bg-[#3B82F6]/10 text-[#3B82F6] font-semibold rounded-full text-sm mb-4">
            Our Journey
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
            A Decade of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#C8A97E]">Excellence</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#C8A97E] to-[#111827]" />

          <div className="space-y-8 lg:space-y-0 stagger-children">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] font-bold rounded-full text-sm mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-outfit font-semibold text-xl text-[#111827] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#94A3B8]">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex lg:w-0 lg:justify-center">
                  <div className="w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Empty space for alignment */}
                <div className="lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}