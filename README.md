# Anich Labs

This repository contains the source code for the **Anich Labs** website.  
It is a simple, modern, and responsive site intended to represent the Lab’s work in technology, healthcare, and data science; keeping the implementation lightweight, transparent, and open for collaboration.

---

## Purpose

The site was built with three priorities in mind:

1. **Visibility**: Present a clear identity for Anich Labs that can be shared with collaborators, students, and partners.  
2. **Accessibility**: Fully open source, mobile-friendly, and easy to extend or modify.  
3. **Professionalism**: Serve as a model of a minimal but production-ready project suitable for research and innovation environments.

---

## Tech Stack

- **HTML5 / CSS3 / JavaScript**: No heavy frameworks; everything is simple and fully debuggable.  
- **Responsive Design**: Sidebar layout on desktop, collapsible hamburger menu on mobile.  
- **Background Video**: Fixed looping `.webm` / `.mov` asset with a translucent overlay for readability.  
- **Animations**: Smooth fade-in effects on scroll using the Intersection Observer API.  
- **Branding**: Teal and dark slate palette reflecting Anich Labs’ identity in science and innovation.

---

## Structure

```
website/
├── index.html       # Main page of the website
├── favicon.png      # Tab icon for browsers
├── images/          # Logos, banners, and social icons
│   ├── github_logo.png
│   ├── linkedin_logo.png
│   └── slack_logo.png
└── assets/
    └── bg/          # Background videos (.webm, .mp4)
```

---

## Features

- **Fixed video background** with light overlay for contrast.  
- **Smooth scrolling navigation** with section highlighting.  
- **Animated sections** for professional visual flow.  
- **Responsive layout** adapting automatically to screen size.  
- **GitHub Repository CTA** – Hero section links directly to the organization repository:  
  [Visit Anich Labs on GitHub →](https://github.com/orgs/anichlabs/)

---

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/anichlabs/website.git
   cd website

2. Open index.html in a browser directly or use a simple development server (recommended):
`# Python 3`
`python3 -m http.server 5500`
`# then open` http://127.0.0.1:5500
