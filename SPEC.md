# Palumbing Palamber - Premium Plumbing Website Specification

## Project Overview
- **Project Name**: Palumbing Palamber
- **Type**: Professional Plumbing & Home Repair Services Website
- **Core Functionality**: Lead generation, WhatsApp/call inquiries, local trust building, conversion-focused
- **Target Users**: Homeowners, offices, shops, apartments, builders, housing societies, emergency customers in Mumbai

## Business Information
- **Location**: Shop No. 3, Imraan Apartment, Hall Village Road, Near Rupam Building, Kurla (West), Mumbai – 400070
- **Contacts**: Shamsuddin: 9819151908, Aftab: 8655740223

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Shadcn UI components
- React Server Components

## UI/UX Specification

### Layout Structure
- **Header**: Sticky navbar with logo, navigation links, call button
- **Hero**: Full-width premium hero with headline, CTA buttons, trust badges
- **Content**: Card-based sections for services, testimonials, gallery
- **Footer**: Multi-column footer with links, contact info, business hours

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Color Palette
```css
--primary-navy: #0A1628
--primary-navy-light: #1A2A44
--accent-blue: #3B82F6
--accent-blue-hover: #2563EB
--accent-gold: #F59E0B
--white: #FFFFFF
--off-white: #F8FAFC
--light-grey: #E2E8F0
--dark-grey: #64748B
--text-dark: #0F172A
--text-light: #94A3B8
--success: #10B981
--error: #EF4444
```

### Typography
- **Headings**: "Outfit" (Google Fonts) - Bold, modern, distinctive
- **Body**: "Plus Jakarta Sans" - Clean, readable, professional
- **Hero Headline**: 56px desktop / 36px mobile, font-weight 700
- **Section Headings**: 40px desktop / 28px mobile, font-weight 600
- **Body Text**: 16px, font-weight 400, line-height 1.6

### Visual Effects
- Subtle box shadows: `0 4px 20px rgba(0,0,0,0.08)`
- Card hover: scale(1.02), shadow increase
- Border radius: 12px for cards, 8px for buttons
- Gradient overlays on hero images
- Glass-morphism effect on navbar

### Animations (Framer Motion)
- Page load: fade-up with stagger (0.1s delay per element)
- Scroll reveal: opacity + translateY on viewport enter
- Hover: scale, shadow, color transitions (0.3s ease)
- Button click: subtle press effect
- Counter animation: count up from 0 on scroll

## Page Specifications

### 1. Home Page
- **Hero Section**: Full viewport height, bold headline, dual CTAs (Call/WhatsApp), trust badges, animated counters
- **Services Grid**: 3x4 grid of service cards with icons, hover effects
- **Slogan Banner**: Rotating premium slogans with background pattern
- **Why Choose Us**: 4-column feature highlights
- **Testimonials**: Carousel with customer reviews
- **CTA Section**: Final conversion section before footer

### 2. About Page
- **Hero**: Smaller hero with "About Us" title
- **Story Section**: Company mission, experience, trust factors
- **Timeline**: 10+ years journey
- **Service Areas**: Mumbai neighborhoods covered

### 3. Services Page
- **Service Cards**: Detailed expandable cards
- **Each Service**: Icon, title, description, benefits, process, timing

### 4. Gallery Page
- **Masonry Grid**: Pinterest-style image gallery
- **Lightbox**: Click to view full image
- **Categories**: Pipe repairs, bathroom, kitchen, before/after

### 5. Contact Page
- **Contact Cards**: Phone numbers with click-to-call
- **WhatsApp Button**: Direct WhatsApp link
- **Map**: Embedded Google Maps
- **Form**: Name, phone, problem, location fields

## Components Required
1. Navbar (sticky, glass effect)
2. Hero Section
3. Service Cards
4. Trust Badges
5. Animated Counters
6. Testimonial Carousel
7. FAQ Accordion
8. Contact Form
9. Floating CTA Buttons (Call, WhatsApp)
10. Footer
11. Scroll Progress Indicator

## SEO Requirements
- Meta tags: title, description, keywords
- OpenGraph tags for social sharing
- JSON-LD LocalBusiness schema
- Sitemap.xml
- Robots.txt
- Canonical URLs

## Performance Targets
- Lighthouse Score: 90+
- Core Web Vitals: All green
- Lazy loading for images
- Server-side rendering
- Minimal client-side JS

## Acceptance Criteria
1. Website loads in under 3 seconds
2. All pages are fully responsive
3. CTAs are prominent and functional
4. Contact methods (phone, WhatsApp) work
5. Forms submit successfully
6. SEO meta tags are present
7. Animations are smooth (60fps)
8. No layout shifts on load
9. Accessibility: proper headings, alt text, contrast
10. Premium, handcrafted feel achieved