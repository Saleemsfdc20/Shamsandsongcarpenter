'use client';

const areas = [
  'Kurla West',
  'Kurla East',
  'Ghatkopar',
  'Andheri East',
  'Andheri West',
  'Vidyavihar',
  'Sakinaka',
  'Vikhroli',
  'Powai',
  'Chembur',
  'Santacruz',
  'Khar',
  'Bandra',
  'Jogeshwari',
  ' Goregaon',
];

export default function AboutAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fadeIn">
          <span className="inline-block px-4 py-2 bg-[#C8A97E]/10 text-[#C8A97E] font-semibold rounded-full text-sm mb-4">
            Service Areas
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Serving All of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#C8A97E]">Mumbai</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Based in Kurla, we proudly serve residential and commercial clients across Mumbai. Not sure if we cover your area? Call us to confirm!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 stagger-children">
          {areas.map((area) => (
            <div
              key={area}
              className="px-6 py-3 bg-[#F8FAFC] rounded-full text-[#111827] font-medium hover:bg-[#3B82F6] hover:text-white transition-colors cursor-default"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}