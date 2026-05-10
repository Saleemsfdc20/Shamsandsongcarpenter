'use client';

import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        { label: 'Shamsuddin', value: '9819151908' },
        { label: 'Aftab', value: '8655740223' },
      ],
      cta: 'Call Now',
      href: 'tel:9819151908',
      color: 'bg-[#111827]',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: [
        { label: 'Quick Chat', value: 'Fast responses' },
      ],
      cta: 'WhatsApp',
      href: 'https://wa.me/919819151908',
      color: 'bg-[#25D366]',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        { label: 'Mon - Sat', value: '9:00 AM - 8:00 PM' },
        { label: 'Sunday', value: 'By Appointment' },
      ],
      cta: null,
      href: null,
      color: 'bg-[#111827]',
    },
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="bg-white p-8 hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 ${method.color} flex items-center justify-center mb-6`}>
                <method.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-outfit font-semibold text-xl text-luxury-dark mb-4">{method.title}</h3>
              <div className="space-y-2 mb-6">
                {method.details.map((detail) => (
                  <div key={detail.label}>
                    <p className="text-text-muted text-sm">{detail.label}</p>
                    <p className="font-medium text-luxury-dark">{detail.value}</p>
                  </div>
                ))}
              </div>
              {method.cta && method.href && (
                <a
                  href={method.href}
                  className={`inline-block ${method.color} text-white px-6 py-2 font-medium hover:opacity-90 transition-opacity`}
                >
                  {method.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Address Card */}
        <div className="bg-white p-8 mt-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-[#C8A97E] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-outfit font-semibold text-xl text-luxury-dark mb-2">Our Studio</h3>
              <p className="text-text-muted">
                Shop No. 3, Imraan Apartment,<br />
                Hall Village Road,<br />
                Near Rupam Building,<br />
                Kurla (West), Mumbai – 400070
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}