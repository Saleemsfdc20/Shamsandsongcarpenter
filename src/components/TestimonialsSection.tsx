'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Kurla West, Mumbai',
    rating: 5,
    text: 'Shams & Sons transformed our kitchen into a masterpiece. The attention to detail and quality of work exceeded our expectations. Highly recommended for premium interior work!',
  },
  {
    name: 'Priya Malhotra',
    location: 'Andheri East, Mumbai',
    rating: 5,
    text: 'Excellent craftsmanship! They designed and executed our complete home renovation with precision. The team was professional, punctual, and the results are stunning.',
  },
  {
    name: 'Amit Desai',
    location: 'Ghatkopar, Mumbai',
    rating: 5,
    text: 'We hired them for our office interiors and couldn\'t be happier. The modular furniture and false ceiling work transformed our workspace completely. Great experience!',
  },
  {
    name: 'Sonia Kapoor',
    location: 'Powai, Mumbai',
    rating: 5,
    text: 'From planning to execution, everything was seamless. Our bedroom wardrobes and TV unit look absolutely premium. They truly understand luxury interior design.',
  },
  {
    name: 'Vikram Singh',
    location: 'Bandra, Mumbai',
    rating: 5,
    text: 'The custom furniture they made for our dining area is exceptional. The quality of wood and finish is top-notch. Will definitely recommend to friends and family.',
  },
  {
    name: 'Anjali Menon',
    location: 'Juhu, Mumbai',
    rating: 5,
    text: 'Our living room makeover by Shams & Sons is incredible. They captured exactly what we wanted - a perfect blend of elegance and comfort. Truly satisfied customer!',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-luxury-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="gold-line-center mb-6" />
          <span className="inline-block px-4 py-2 bg-luxury-gold/20 text-luxury-gold font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-white">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-[#E5D4B8]">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-luxury-gold/30 transition-all"
            >
              <Quote className="w-10 h-10 text-luxury-gold/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-luxury-gold flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}