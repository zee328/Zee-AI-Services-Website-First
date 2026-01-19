# Yorkshire Automation Services Website

A modern, responsive frontend for Yorkshire Automation Services - professional AI and automation solutions.

## 📋 Project Structure

```
yorkshire-automation-services/
├── index.html          # Main HTML entry point
├── css/
│   └── styles.css      # Custom supplemental styles
├── js/
│   └── main.js         # JavaScript interactions and functionality
├── assets/
│   ├── images/         # Project images and graphics
│   └── icons/          # Icon assets
└── README.md           # This file
```

## 🚀 Features

- **Mobile-First Responsive Design** - Optimized for all device sizes
- **Modern Semantic HTML** - Accessible and search engine friendly
- **Tailwind CSS** - Utility-first CSS via CDN for rapid styling
- **Vanilla JavaScript** - No frameworks, pure JavaScript interactions
- **Smooth Animations** - Elegant scroll animations and transitions
- **Contact Form** - Functional contact form with validation
- **Mobile Menu** - Responsive navigation for mobile devices

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - Pure JavaScript for interactivity
- **No Dependencies** - Frontend only, no build process required

## 📁 File Descriptions

### index.html

Main entry point containing:

- Navigation bar with mobile menu toggle
- Hero section with call-to-action
- Features showcase
- Services overview
- About section
- Contact form
- Footer with company info

### css/styles.css

Supplemental custom styles including:

- CSS variables for consistent theming
- Animation keyframes (fadeInUp, fadeIn)
- Form styling enhancements
- Responsive typography
- Hover effects and transitions
- Accessibility considerations

### js/main.js

JavaScript functionality for:

- Mobile menu toggle
- Smooth scrolling navigation
- Contact form validation and submission
- Scroll animations for elements
- Navbar scroll effects
- Error and success notifications

### assets/

Directory structure for project resources:

- `images/` - Company images, screenshots, graphics
- `icons/` - Icon assets for UI elements

## 🎯 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build tools needed

### Usage

1. **Clone or download** the project
2. **Open index.html** in your browser
3. **Customize** content, colors, and images as needed
4. **Deploy** to any web hosting service

### Local Development

If you want to run locally:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization

### Changing Colors

Edit the primary color in `js/main.js` and Tailwind classes in `index.html`:

- Primary color: `#2563eb` (blue)
- Secondary color: `#f3f4f6` (light gray)

### Adding Images

Place images in the `assets/images/` folder and reference them:

```html
<img src="assets/images/your-image.jpg" alt="Description" />
```

### Modifying Content

Edit text directly in `index.html` sections:

- Hero section
- Features
- Services
- About
- Contact information

### Custom CSS

Add custom styles to `css/styles.css` or add inline Tailwind classes to `index.html`.

## 📧 Contact Form Integration

The contact form currently validates and displays success/error messages locally. To integrate with a backend:

1. Create a server endpoint to receive form data
2. Update the form submission handler in `js/main.js`
3. Send form data to your backend API

Example:

```javascript
// In js/main.js, replace the console.log with:
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```

## 🔒 Security Considerations

- Sanitize user inputs on the server before storing
- Use HTTPS when deploying
- Implement rate limiting on contact form endpoint
- Store contact information securely

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML for better screen reader support
- ARIA labels on interactive elements
- Keyboard navigation support
- Contrast ratios meet WCAG AA standards
- Reduced motion preferences respected

## 🚀 Deployment

### Deploy to Netlify

```bash
# Drag and drop the project folder
```

### Deploy to GitHub Pages

1. Push to a GitHub repository
2. Enable GitHub Pages in settings
3. Select the main branch as source

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Any Web Host

- Upload all files via FTP/SFTP
- Ensure index.html is in the root directory
- No special server configuration needed

## 📈 Performance Tips

- Optimize images before uploading (use TinyPNG)
- Minify CSS and JavaScript for production
- Use CDN for static assets
- Enable GZIP compression on server
- Lazy load images if adding many

## 🐛 Troubleshooting

### Mobile menu not working

- Check browser console for JavaScript errors
- Ensure `js/main.js` is properly linked in `index.html`

### Styles not loading

- Verify Tailwind CSS CDN is accessible
- Check that `css/styles.css` path is correct

### Form not validating

- Open browser console to check for errors
- Verify form field names match validation logic

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project.

## 📞 Support

For questions or issues, contact: support@yorkshireautomation.com

---

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Built with ❤️ for Yorkshire Automation Services**
