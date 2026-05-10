'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Projects Completed' },
  { icon: Award, value: 100, suffix: '+', label: 'Happy Clients' },
  { icon: Clock, value: 10, suffix: '+', label: 'Years Experience' },
  { icon: Heart, value: 100, suffix: '%', label: 'Client Satisfaction' },
];

function Counter({ icon: Icon, value, suffix, label }: { icon: any; value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="text-center p-8 bg-white shadow-xl animate-fadeIn"
    >
      <div className="w-16 h-16 bg-luxury-dark flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-luxury-gold" />
      </div>
      <div className="font-outfit text-5xl font-bold text-luxury-dark mb-2">
        {count}
        <span className="text-luxury-gold">{suffix}</span>
      </div>
      <p className="text-text-muted font-medium tracking-wide uppercase text-sm">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-luxury-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-[#E5D4B8]">Mumbai</span>
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who transformed their spaces with us
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <Counter {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}