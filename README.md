# ShortyBatou's Professional Portfolio

A modern, responsive portfolio website showcasing research, software development, and creative projects in computer science.

## 📁 Structure

```
.
├── index.html           # Main CV/About page
├── software.html        # OctopusEngine project page
├── research.html        # Research & publications page
├── projects.html        # Projects portfolio with filtering
├── styles.css          # Complete styling
├── script.js           # Interactive functionality
├── images/             # Project images and assets
└── README.md           # This file
```

## 🚀 Features

### Pages

1. **About (Main Page)**
   - Professional CV overview
   - Personal information with profile picture
   - Education & experience timeline
   - Skills organized by category
   - Quick preview of featured projects

2. **Software**
   - Dedicated showcase for OctopusEngine
   - Features and architecture overview
   - Gallery of demonstrations
   - Direct link to GitHub repository

3. **Research**
   - Thesis information and links
   - Publications list (2 publications)
   - Links to PDFs, DOI, and arXiv papers
   - Professional research presentation

4. **Projects**
   - Categorized project gallery (GPU, Simulation, Rendering, Other)
   - Filter functionality for easy browsing
   - Project cards with images and descriptions
   - Technology tags for quick identification
   - Links to detailed project pages

### Design

- 🎨 Modern gradient color scheme
- 📱 Fully responsive design
- ✨ Smooth hover animations and transitions
- 🎯 Professional typography and spacing
- 🔗 Intuitive navigation system
- 🖼️ Image-based project showcases

## 🛠️ Customization

### Update Personal Information

Edit `index.html`:
- Replace profile picture path in `<img src="images/profile.jpg">`
- Update name, title, and bio
- Add education/experience to the timeline
- Update skills and technologies

### Add Your Projects

Edit `projects.html`:
- Add project cards with your own images
- Update project titles, descriptions, and categories
- Add relevant technology tags
- Update GitHub/demo links

### Customize Research

Edit `research.html`:
- Add thesis information
- Update publication details (title, authors, links)
- Add PDF, DOI, and arXiv links

### Update Software Showcase

Edit `software.html`:
- Add feature cards
- Update gallery images
- Modify architecture description
- Update GitHub repository link

### Image Setup

Create an `images/` directory with:
```
images/
├── profile.jpg          # Your profile picture
├── engine-1.jpg         # OctopusEngine demos
├── engine-2.jpg
├── engine-3.jpg
├── project-gpu-1.jpg    # GPU projects
├── project-gpu-2.jpg
├── project-sim-1.jpg    # Simulation projects
├── project-render-1.jpg # Rendering projects
├── project-render-2.jpg
└── project-other-1.jpg  # Other projects
```

## 📋 Quick Start

1. **Clone or download** the repository
2. **Update content** in each HTML file with your information
3. **Add images** to the `images/` directory
4. **Customize colors** in `styles.css` (see `:root` variables)
5. **Test locally** by opening `index.html` in your browser
6. **Deploy** to GitHub Pages

## 🎨 Color Customization

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main accent color */
    --secondary-color: #4f46e5;    /* Secondary accent */
    --text-color: #1f2937;         /* Text color */
    --light-bg: #f9fafb;           /* Light background */
}
```

## 🌐 GitHub Pages Deployment

This repository is optimized for GitHub Pages. Your site will be available at:
```
https://shortybatou.github.io
```

Push changes to the main branch and they'll be automatically deployed!

## 📝 Content Customization Checklist

- [ ] Update profile picture
- [ ] Edit personal information
- [ ] Add education and experience
- [ ] Update skills and technologies
- [ ] Add 2 research publications
- [ ] Add thesis information
- [ ] Update OctopusEngine details
- [ ] Add project images and descriptions
- [ ] Update social links (GitHub, Twitter, Email)
- [ ] Test on mobile and desktop

## 📄 License

Feel free to use this portfolio template as a basis for your own.

---

**Built with HTML, CSS, and JavaScript** | Optimized for GitHub Pages
