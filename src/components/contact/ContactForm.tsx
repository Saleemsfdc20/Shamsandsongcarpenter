'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Create WhatsApp message with form data
    const message = `Name: ${data.name}%0APhone: ${data.phone}%0AProject Type: ${data.projectType}%0ALocation: ${data.location}%0AMessage: ${data.message}`;
    window.open(`https://wa.me/919819151908?text=${message}`, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section className="py-20 bg-premium-white">
      <div className="container-custom px-8">
        <div className="animate-fadeIn">
          <h2 className="font-outfit text-3xl font-bold text-luxury-dark mb-2">
            Start Your Project
          </h2>
          <p className="text-text-muted mb-8">
            Fill in the form below and our team will contact you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-luxury-dark mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#C8A97E] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-luxury-dark mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#C8A97E] focus:outline-none transition-colors"
                  placeholder="9876543210"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-luxury-dark mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#C8A97E] focus:outline-none transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="Modular Kitchen">Modular Kitchen</option>
                  <option value="Bedroom Interior">Bedroom Interior</option>
                  <option value="Living Room">Living Room</option>
                  <option value="Office Interior">Office Interior</option>
                  <option value="Home Renovation">Home Renovation</option>
                  <option value="Custom Furniture">Custom Furniture</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-luxury-dark mb-2">
                  Your Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#C8A97E] focus:outline-none transition-colors"
                  placeholder="e.g., Kurla West, Mumbai"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-luxury-dark mb-2">
                Tell us about your project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#C8A97E] focus:outline-none transition-colors resize-none"
                placeholder="Describe your requirements, budget, and timeline..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full flex items-center justify-center gap-2 bg-[#C8A97E] text-white px-8 py-5 font-semibold text-lg hover:bg-[#B8956A] transition-all hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                'Message Sent!'
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </>
              )}
            </button>

            <p className="text-text-muted text-sm text-center">
              By submitting, you agree to receive a response via WhatsApp or phone call.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}