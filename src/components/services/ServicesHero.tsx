'use client';

export default function ServicesHero() {
  return (
    <section className="relative py-32 lg:py-40 bg-luxury-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-slideUp">
          <span className="inline-block px-4 py-2 bg-luxury-gold/20 text-luxury-gold font-semibold text-sm tracking-wider uppercase mb-6">
            Our Services
          </span>
          <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-[#E5D4B8]">Interior Solutions</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer end-to-end interior design and carpentry services that transform your space into a masterpiece.
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 sm:h-24">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8F6F2" />
        </svg>
      </div>
    </section>
  );
}