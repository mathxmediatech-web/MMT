# MMT (MATHXMEDIA&TECH) — Official Company Website

> **"We grow businesses through technology, marketing and automation."**

A premium, modern, production-grade company website built for **MMT (MATHXMEDIA&TECH)**.

Designed with a sleek **Sky Blue & White** aesthetic, full-stack Next.js App Router, React (JavaScript), Tailwind CSS, Framer Motion, and a **100% YAML-Driven Configuration Engine**.

---

## 🌟 The YAML-Driven Architecture

The entire website is configuration-driven. Non-developers can manage all website content, active projects, services, statistics, testimonials, SEO, colors, and section visibility without touching source code.

```text
/config/
├── site.yaml          # Domain, announcement bar, section visibility & homepage order
├── company.yaml       # Company name, tagline, mission, vision, pillars, why us
├── theme.yaml         # Sky blue & white palette, CSS variables, radius
├── navigation.yaml    # Navbar links, dropdowns, badges, CTA button
├── hero.yaml          # Hero headline, badges, descriptions, quick console metrics
├── stats.yaml         # Statistics numbers, suffixes, labels, descriptions
├── services.yaml      # All service categories, items, features, benefits, processes
├── projects.yaml      # 8 active client projects (3 Running + 5 Ongoing)
├── technologies.yaml  # Categorized tech stack & skill badges
├── industries.yaml    # Industry specialization cards
├── process.yaml       # 5-step delivery methodology (Discover to Optimize)
├── testimonials.yaml  # Client quotes, authors, roles, star ratings
├── faq.yaml           # Categorized accordion FAQ items
├── contact.yaml       # Email, phone, WhatsApp, office address, contact form
├── seo.yaml           # Default meta tags, OpenGraph, Twitter card, per-page SEO
└── footer.yaml        # Footer brand summary, link columns, legal links
```

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ Non-Developer Guide: How to Update Content

### 1. How to Change Company Name or Tagline
Open `config/company.yaml`:
```yaml
company:
  name: "MMT"
  full_name: "MATHXMEDIA&TECH"
  tagline: "Technology. Marketing. Growth."
```
Changing these values updates the name and branding throughout the entire website automatically.

---

### 2. How to Add a New Project or Update Status
Open `config/projects.yaml`. Under `projects.items`, add a new entry:
```yaml
- id: "project-09"
  slug: "new-client-platform"
  title: "New Client Custom SaaS Platform"
  client_name: "Client Brand Name"
  client_industry: "Fintech"
  category: "Software Development"
  status: "Running" # Allowed: Running | Ongoing | Completed | Maintenance | Coming Soon
  status_badge_color: "emerald"
  featured: true
  short_description: "A brief summary of what was built."
  overview: "Detailed project background."
  problem: "The client problem."
  solution: "How MMT solved it."
  technologies:
    - "Next.js"
    - "Node.js"
    - "PostgreSQL"
  features:
    - "Feature 1"
    - "Feature 2"
  metrics:
    - label: "Conversion Lift"
      value: "+45%"
  image: "/images/projects/project-09.svg"
  live_url: "https://client-demo.com"
```
The website will automatically:
- Render it in the `/projects` showcase
- Create a dynamic detail page at `/projects/new-client-platform`
- Update status filter tabs (Running / Ongoing / Completed)

---

### 3. How to Add a New Service
Open `config/services.yaml`. Under `services.items`, add:
```yaml
- id: "ai-chatbot-automation"
  slug: "ai-chatbot-automation"
  category_id: "business-automation"
  title: "AI Customer Support Chatbots"
  short_description: "Deploy 24/7 intelligent LLM bots that answer client inquiries."
  icon: "Bot"
  featured: true
  badge: "AI Powered"
  features:
    - "Custom knowledge base training"
    - "WhatsApp & Website widget embedding"
  benefits:
    - "Zero response wait time for customers"
```
This automatically generates a dynamic page at `/services/ai-chatbot-automation`.

---

### 4. How to Change Theme Colors (Sky Blue & White)
Open `config/theme.yaml`:
```yaml
theme:
  colors:
    primary: "#0ea5e9"        # Main Sky Blue
    primary_dark: "#0284c7"   # Darker Sky Blue for buttons/hover
    primary_light: "#38bdf8"  # Lighter Sky Blue for badges/glow
    background: "#ffffff"     # Main background
    background_alt: "#f0f9ff" # Soft ice sky tint
    text: "#0f172a"           # Deep slate text for crisp contrast
```
Any changes are instantly injected into CSS variables across the entire application.

---

### 5. How to Enable or Disable Sections
Open `config/site.yaml`:
```yaml
sections:
  testimonials:
    enabled: true
  faq:
    enabled: false # Hides FAQ across the site without changing code
```

---

### 6. How to Reorder Homepage Sections
Open `config/site.yaml` and adjust `home_sections`:
```yaml
home_sections:
  - hero
  - stats
  - services_overview
  - software_capabilities
  - marketing_funnel
  - automation_system
  - featured_projects
  - tech_stack
  - process_timeline
  - industries
  - testimonials
  - faq
  - cta_banner
```

---

### 7. How to Add Images
1. Save your image (`.svg`, `.webp`, `.png`, `.jpg`) in `/public/images/projects/` or `/public/images/services/`.
2. Reference the path in the YAML file:
   ```yaml
   image: "/images/projects/my-image.svg"
   ```

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push your repository to GitHub / GitLab.
2. Import the project into Vercel.
3. Vercel automatically detects Next.js. Click **Deploy**.

### Hostinger / VPS / Node.js Hosting
```bash
npm run build
npm run start
```
Use PM2 to manage the process:
```bash
npm install -g pm2
pm2 start npm --name "mmt-website" -- start
```

---

## 🔒 Security & Best Practices
- No API keys or credentials are in YAML files.
- Sensitive environment variables belong in `.env.local`.
- Contact form submissions can be piped to email/Slack via `/app/api/contact/route.js`.

---

© 2026 MMT (MATHXMEDIA&TECH). All rights reserved.
