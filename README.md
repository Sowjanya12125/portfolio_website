# Sowjanya SK Susarla — Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://premium-portfolio-we-hoq3.bolt.host/)
[![Built with Bolt](https://img.shields.io/badge/Built%20with-Bolt.new-1a1a1a?style=for-the-badge)](https://bolt.new)
[![Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

A modern, responsive personal portfolio website showcasing my work, skills, and experience as a Computer Science Engineer specializing in AI, cybersecurity, and full-stack development.

**🔗 Live Site:** [premium-portfolio-we-hoq3.bolt.host](https://premium-portfolio-we-hoq3.bolt.host/)

---

## 👋 About

Hi, I'm **Sowjanya SK Susarla** — a Computer Science Engineer with a focus on Cybersecurity, building intelligent systems at the intersection of AI, security, and scalable software engineering. This portfolio is a single-page application that highlights my background, projects, technical skills, and achievements, and provides a way for recruiters and collaborators to get in touch directly.

## ✨ Features

- **Responsive single-page design** — smooth scrolling navigation across Home, About, Experience, Projects, Skills, and Achievements sections
- **Dynamic hero section** with animated role/skill highlights (e.g., Cybersecurity, AI/ML)
- **Projects showcase** highlighting real-world work with tech stack tags
- **Skills section** covering languages, frameworks, and tools
- **Working contact form** — messages are stored in a live database (not just a UI mockup)
- **Resume request option** directly from the site
- **Dark, modern UI** with a teal accent theme

## 🛠️ Tech Stack

**Frontend**
- React
- JavaScript / TypeScript
- Tailwind CSS (or custom CSS — update if different)

**Backend / Data**
- Supabase (PostgreSQL database, used to store contact form submissions)
- Node.js

**Other**
- Python, AI/ML (highlighted as core skills/technologies used across projects featured on the site)

**Hosting & Tooling**
- Built with [Bolt.new](https://bolt.new)
- Deployed via Bolt Hosting
- Version controlled with Git & GitHub

## 📬 Contact Form

The contact form on the site is fully functional — form submissions are saved in real time to a Supabase database table (`contact_messages`), capturing the sender's name, email, subject, and message. This isn't just a static form; it's connected to a live backend.

## 📁 Project Structure

```
portfolio_website/
├── src/
│   ├── components/       # Reusable UI components (Nav, Hero, Projects, Skills, Contact, etc.)
│   ├── pages/            # Page-level sections
│   ├── lib/              # Supabase client & utility functions
│   └── App.tsx           # Main application entry
├── supabase/
│   └── migrations/       # Database schema & migration files
├── public/               # Static assets
└── README.md
```

*(Update this structure to match your actual repo layout if it differs.)*

## 🚀 Getting Started (Local Development)

Clone the repository and install dependencies:

```bash
git clone https://github.com/Sowjanya12125/portfolio_website.git
cd portfolio_website
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (or whichever port your dev server specifies).

### Environment Variables

This project uses Supabase for the contact form backend. Create a `.env` file in the root directory with:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🌐 Deployment

This project is deployed using **Bolt Hosting**. Any changes pushed through the Bolt editor with GitHub sync enabled are automatically reflected in the connected repository.

## 📸 Sections Overview

| Section | Description |
|---|---|
| **Home** | Introduction, name, role, and quick call-to-action buttons |
| **About** | Background, education, and personal summary |
| **Experience** | Work history and relevant roles |
| **Projects** | Featured projects with tech stacks and links |
| **Skills** | Technical skills across languages, frameworks, and tools |
| **Achievements** | Certifications, awards, and notable accomplishments |
| **Contact** | Working contact form connected to a live database |

## 📄 License

This project is open for viewing and personal reference. Please reach out if you'd like to reuse any part of the design or code.

## 🙋‍♀️ Contact

- **Live Portfolio:** [premium-portfolio-we-hoq3.bolt.host](https://premium-portfolio-we-hoq3.bolt.host/)
- **GitHub:** [@Sowjanya12125](https://github.com/Sowjanya12125)
- **Email:** *(kameshwarisowjanya@gmail.com)*
- **LinkedIn:** *(https://www.linkedin.com/in/sowjanya-s-k-susarla-498632308/)*

---

⭐ If you found this portfolio interesting, feel free to star the repo!

