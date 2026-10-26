# Mohit Kumar Mourya — Portfolio

A responsive, animated personal portfolio built with **React 19**, **Vite**, **Tailwind CSS v4** and **Framer Motion**.
It showcases my skills, academics, projects, certifications, achievements and experience, and includes a working contact form and a downloadable resume.

> **Live site:** _add your deployed link here_

---

## Features

- Smooth scroll-reveal animations and animated hero section
- Dark / light theme toggle
- Fully responsive layout (mobile, tablet, desktop) with a hamburger menu on small screens
- **Academics** section with semester-wise SPI, marks, credits, highlights and an SPI trend chart
- Projects and certifications driven by simple data files (no component edits needed)
- Certificate gallery with a zoom-in preview
- Contact form powered by [Formspree](https://formspree.io) (messages land in your inbox)
- Resume available to **view** in a new tab or **download**
- Back-to-top button and quick links to LinkedIn, GitHub and GeeksforGeeks

## Sections

Hero · About · Skills · Academics · Projects · Certifications · Achievements · Experience · Contact

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Contact form | Formspree |

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

### Available Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally for a final check |

---

## Contact Form Setup (Formspree)

The contact form sends messages to a Formspree endpoint. Without it, the form will look like it works but **no email will be delivered**.

1. Create a free account at [formspree.io](https://formspree.io) and click **+ New Form**.
2. Enter the email address where you want to receive messages.
3. Copy the form endpoint, which looks like `https://formspree.io/f/xxxxxxxx`.
4. In the project root (next to `package.json`), create a file named `.env`:

   ```env
   VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```

   You can copy `.env.example` and rename it to `.env`.
5. Restart the dev server (`Ctrl + C`, then `npm run dev`).
6. Send a test message. On the first submission Formspree emails you a confirmation link; activate it to start receiving messages.

> Vite reads `.env` at **build time**. After changing it, run `npm run build` again before deploying.

---

## Customizing the Content

All content lives in `src/data/`, so you rarely need to touch the components.

| File | What to edit |
| --- | --- |
| `src/data/siteData.js` | Social links, navbar items, highlights, skills, achievements, experience |
| `src/data/academicsData.js` | Semester SPI, marks, credits, highlights and the academic summary |
| `src/data/projectsData.js` | Projects shown in the Projects section |
| `src/data/certificationsData.js` | Certificates and their image file names |

**Static files (`public/` folder)**

- `public/resume.pdf` — your resume. The file name must be exactly `resume.pdf`.
- `public/certs/` — certificate images referenced in `certificationsData.js`.

**Highlighting text in Academics:** wrap words in `**double stars**` inside `academicsData.js` to show them in bold gold.

---

## Project Structure

```
portfolio/
├── public/
│   ├── certs/              # Certificate images
│   └── resume.pdf          # Resume (view + download)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Academics.jsx
│   │   ├── Sections.jsx    # About, Skills, Projects, Certifications, Achievements, Experience, Contact
│   │   └── ui.jsx          # Shared Section and Reveal helpers
│   ├── data/               # All editable content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind import and theme colors
├── .env.example
├── index.html
├── vite.config.js
└── package.json
```

---

## Deployment

1. Make sure `.env` has your Formspree endpoint and `public/resume.pdf` exists.
2. Run `npm run build`.
3. Upload the contents of the generated `dist/` folder to your host (Hostinger, Netlify, Vercel, GitHub Pages, etc.).

On Netlify or Vercel you can instead add `VITE_FORM_ENDPOINT` under **Environment variables** in the project settings and let them build the site for you.

---

## Troubleshooting

- **Resume opens the home page instead of the PDF:** the file is missing or misnamed. It must be exactly `public/resume.pdf` (lowercase, no `.pdf.pdf`). Rebuild after adding it.
- **Form says "sent" but no email arrives:** check that `VITE_FORM_ENDPOINT` is set in `.env`, restart the dev server, and confirm the Formspree activation email.
- **Env variable not working:** the name must start with `VITE_`, with no spaces around `=` and no quotes.

---

## Connect

- LinkedIn: [mohit-kumar-mourya](https://www.linkedin.com/in/mohit-kumar-mourya-708b7429a)
- GitHub: [Mohitmourya22](https://github.com/Mohitmourya22)
- GeeksforGeeks: [csemohitzf09](https://www.geeksforgeeks.org/profile/csemohitzf09)

---

Built by **Mohit Kumar Mourya** · B.Tech CSE, GEC Bilaspur
