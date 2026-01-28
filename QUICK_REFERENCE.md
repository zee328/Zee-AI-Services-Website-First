# 🚀 Quick Reference Guide - Vision AI Automation

## 📧 Contact Information

- **Email**: contact@visionaiautomation.com
- **Phone/WhatsApp**: +44 7733 830503
- **Address**: 95 Yewss Hill Road, Huddersfield, HD1 3SG, UK

## 🎨 Quick Edits

### Change Email Address

Search and replace in all files:

```
contact@visionaiautomation.com → your-new-email@domain.com
```

### Change WhatsApp Number

Edit `/js/main.js` line ~145:

```javascript
const btn.href = 'https://wa.me/447733830503...'
//                        Change this number ↑
```

### Change Colors

Edit `/css/styles.css` lines 10-30 (root variables):

```css
--color-neon-blue: #00d4ff; /* Change primary neon */
--color-neon-purple: #a855f7; /* Change secondary neon */
```

### Change Company Name

1. Search "Vision AI Automation" in `index.html`
2. Replace all instances

### Disable WhatsApp Button

Comment out in `/js/main.js` line ~300:

```javascript
// initWhatsAppButton();  // ← Add // to disable
```

## 📁 File Structure

```
/Zee-AI-Services-Website-First/
├── index.html              # Main HTML (dark theme applied)
├── index-backup.html       # Original backup
├── css/
│   ├── styles.css         # NEW futuristic dark theme
│   └── styles-backup.css  # Original CSS backup
├── js/
│   ├── main.js           # Enhanced with WhatsApp & email
│   └── main-backup.js    # Original JS backup
├── REDESIGN_COMPLETE.md  # Full documentation
├── REDESIGN_SUMMARY.md   # Detailed summary
└── QUICK_REFERENCE.md    # This file
```

## 🎯 Key Features

### 1. WhatsApp Integration

- **Location**: Bottom-right floating button
- **Click action**: Opens WhatsApp with pre-filled message
- **Message**: "Hello Vision AI Automation, I'm interested in your services."

### 2. Contact Form

- **Sends to**: contact@visionaiautomation.com
- **Method**: mailto: (opens email client)
- **Validation**: Real-time with error messages
- **States**: Loading, Success, Error

### 3. Dark Theme

- **Background**: #0a0a0f (space black)
- **Accents**: Neon blue, purple, pink
- **Cards**: Glassmorphism effect
- **Text**: White primary, gray secondary

### 4. Animations

- Fade-in on scroll
- Hover glow effects
- Rotating icons
- Pulse animations
- Smooth transitions

## 🛠️ Common Tasks

### Update Service Content

Edit `index.html` sections:

- Line ~318: Web Application Development
- Line ~367: Social Media Handling
- Line ~416: AI Audit Tools
- Line ~465: Person Creative Studio
- Line ~514: Voice AI Architect
- Line ~563: AI Educator & Training

### Add New Section

1. Use existing section as template
2. Apply classes: `glass-card`, `scroll-reveal`
3. Follow spacing: `py-16 md:py-24`
4. Use neon colors for accents

### Change Logo

Replace: `assets/images/logo.svg`
Update: `index.html` line ~22 (logo img tag)

## 🎨 CSS Class Reference

### Common Classes

```css
.glass-card          /* Glassmorphism card */
.scroll-reveal       /* Fade in on scroll */
.section-badge       /* Small neon badge */
.section-title       /* Gradient heading */
.text-gradient       /* Neon gradient text */
.glow-text           /* Text with shadow glow */
```

### Layout Classes

```css
.bg-dark             /* Primary dark background */
.bg-darker           /* Secondary dark background */
.hero-section        /* Hero with animations */
.service-card        /* Service item card */
.feature-card        /* Feature item card */
.contact-form        /* Form with neon inputs */
```

## 🚀 Testing

### Desktop

1. Open `index.html` in browser
2. Check navigation (click all links)
3. Test WhatsApp button (bottom-right)
4. Fill and submit contact form
5. Verify animations on scroll

### Mobile

1. Open on phone browser
2. Test hamburger menu
3. Test all touch interactions
4. Verify WhatsApp button works
5. Test form on mobile keyboard

## 🔧 Troubleshooting

### WhatsApp button not appearing?

- Check console for errors (F12)
- Verify JS loaded: `/js/main.js`
- Check `initWhatsAppButton()` is called

### Form not working?

- Verify email client installed
- Check browser allows mailto: links
- Try different browser

### Animations not smooth?

- Check browser supports backdrop-filter
- Reduce motion in OS settings may disable
- Update browser to latest version

### Dark theme not showing?

- Clear browser cache (Ctrl+Shift+R)
- Verify `/css/styles.css` is loaded
- Check body has `bg-dark` class

## 📱 Responsive Breakpoints

- **Desktop**: ≥1024px
- **Tablet**: 768-1023px
- **Mobile**: 768px
- **Small**: <640px

## 💡 Pro Tips

1. **Performance**: Keep animations under 0.5s for snappy feel
2. **Accessibility**: Always test keyboard navigation
3. **Mobile**: Test on real devices, not just browser tools
4. **Content**: Keep text concise for better readability
5. **Images**: Optimize before adding (use WebP format)
6. **Testing**: Check in incognito mode to avoid cache issues

## 📧 Email Setup (Advanced)

For real backend email (not mailto:):

### Option 1: EmailJS (Free)

1. Sign up at emailjs.com
2. Get API key
3. Update JS with EmailJS code

### Option 2: FormSpree (Free tier)

1. Sign up at formspree.io
2. Get endpoint URL
3. Change form action to endpoint

### Option 3: Custom Backend

1. Create API endpoint (Node.js/PHP)
2. Update form to POST to API
3. Handle email server-side

## 🎨 Design Tokens

```css
/* Spacing */
--spacing-xs: 0.5rem --spacing-sm: 1rem --spacing-md: 1.5rem --spacing-lg: 2rem
  --spacing-xl: 3rem /* Border Radius */ --radius-sm: 8px --radius-md: 12px
  --radius-lg: 20px --radius-xl: 30px /* Shadows */ --glow-blue: 0 0 20px
  rgba(0, 212, 255, 0.5) --glow-purple: 0 0 20px rgba(168, 85, 247, 0.5)
  --glow-strong: 0 0 30px rgba(0, 212, 255, 0.7);
```

## 🔗 Useful Links

- [Google Fonts](https://fonts.google.com) - Change typography
- [Tailwind CSS](https://tailwindcss.com) - Utility classes reference
- [Can I Use](https://caniuse.com) - Check browser support
- [CSS Tricks](https://css-tricks.com) - CSS guides
- [MDN Web Docs](https://developer.mozilla.org) - Web standards

## 📝 Change Log

### v2.0.0 - Premium Futuristic Redesign

- ✅ Dark theme with neon accents
- ✅ Glassmorphism throughout
- ✅ WhatsApp integration
- ✅ Enhanced animations
- ✅ Email: contact@visionaiautomation.com
- ✅ Improved mobile experience
- ✅ Accessibility enhancements

### v1.0.0 - Original

- Light theme
- Basic animations
- No WhatsApp integration

---

## ⚡ Most Common Questions

**Q: How do I change the neon blue color?**
A: Edit `--color-neon-blue` in `/css/styles.css` line ~20

**Q: Can I add more sections?**
A: Yes! Copy existing section, update content, keep classes

**Q: How do I disable animations?**
A: Add `reduce-animations` class to body tag

**Q: WhatsApp opens web instead of app?**
A: Normal behavior - user can choose in WhatsApp

**Q: Form says "sent" but I didn't receive email?**
A: mailto: opens email client - user must actually send

**Q: Can I use different fonts?**
A: Yes! Change Google Fonts import in CSS line ~8

**Q: How do I add a blog?**
A: Create new section following existing structure

**Q: Is it SEO friendly?**
A: Yes - semantic HTML, proper headings, meta tags

**Q: Can I remove the glow effects?**
A: Yes - remove box-shadow properties from classes

**Q: How do I customize the logo?**
A: Replace `assets/images/logo.svg` with your logo

---

**Need Help?** Check the full documentation in:

- REDESIGN_COMPLETE.md - Complete guide
- REDESIGN_SUMMARY.md - Detailed summary

**Made with ❤️ using GitHub Copilot**
