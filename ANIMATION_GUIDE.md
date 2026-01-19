# Yorkshire Automation Services - Animation Guide

## Overview

This document outlines all the animations and smooth transitions implemented throughout the website for a professional, modern user experience.

## Animation Philosophy

- **Subtle**: All animations use minimal transforms (2-8px, 0.05-0.1 scale changes)
- **Professional**: Animations enhance UX without being distracting
- **Lightweight**: Pure CSS animations with no external dependencies
- **Accessible**: Respects `prefers-reduced-motion` user preferences
- **Performant**: GPU-accelerated transforms for smooth 60fps animations

---

## CSS Animations

### 1. **Entrance Animations**

#### fadeInUp

- **Purpose**: Elements fade in while moving up
- **Duration**: 0.6s
- **Easing**: ease-out
- **Used On**: Cards, service items, about sections
- **Transform**: opacity (0→1), translateY (30px→0)

#### slideInUp

- **Purpose**: Elements slide in from bottom
- **Duration**: 0.5s
- **Easing**: ease-out
- **Used On**: About cards on scroll
- **Transform**: opacity (0→1), translateY (20px→0)

#### slideInDown

- **Purpose**: Elements slide in from top
- **Duration**: 0.5s
- **Easing**: ease-out
- **Used On**: Mobile menu animations
- **Transform**: opacity (0→1), translateY (-20px→0)

#### slideInLeft

- **Purpose**: Elements slide in from left
- **Duration**: 0.5s
- **Easing**: ease-out
- **Used On**: Hero content section
- **Transform**: opacity (0→1), translateX (-30px→0)

#### slideInRight

- **Purpose**: Elements slide in from right
- **Duration**: 0.5s
- **Easing**: ease-out
- **Used On**: Hero visual element
- **Transform**: opacity (0→1), translateX (30px→0)

#### zoomIn

- **Purpose**: Elements scale in with fade
- **Duration**: 0.5s
- **Easing**: ease-out
- **Used On**: Why Choose Us cards on scroll
- **Transform**: opacity (0→1), scale (0.95→1)

### 2. **Continuous Animations**

#### gradientShift

- **Purpose**: Animated gradient text color shift
- **Duration**: 3s
- **Effect**: Infinite loop with ease-in-out timing
- **Used On**: Hero accent text ("AI & Automation")
- **Colors**: Blue (60a5fa) → Purple (a78bfa)

#### blob

- **Purpose**: Smooth, organic blob shape animation
- **Duration**: 7s per cycle
- **Effect**: Fluid motion in background
- **Used On**: Hero section decorative blobs
- **Transform**: Subtle translate and scale combinations

#### rotate-subtle

- **Purpose**: Continuous 360° rotation
- **Duration**: 20s
- **Effect**: Linear infinite rotation
- **Used On**: Optional icon animations
- **Performance**: Disabled on mobile (< 768px)

#### pulse

- **Purpose**: Subtle opacity pulsing
- **Duration**: 2s
- **Effect**: Emphasizes important elements
- **Used On**: CTAs, emphasis elements
- **Opacity**: 1 → 0.7 → 1

#### gentle-bounce

- **Purpose**: Subtle vertical bounce
- **Duration**: 2s
- **Effect**: Draws attention without distraction
- **Used On**: Call-to-action buttons
- **Transform**: translateY (0 → -5px → 0)

### 3. **Special Effects**

#### shimmer

- **Purpose**: Light reflection sweep effect
- **Duration**: 2s
- **Effect**: Infinite horizontal sweep
- **Used On**: Highlight elements
- **Performance**: Disabled on mobile

#### expandHeight

- **Purpose**: Smooth height expansion
- **Duration**: 0.4s
- **Easing**: ease-out
- **Used On**: Accordion-like sections
- **Properties**: max-height, opacity transition

#### scaleIn

- **Purpose**: Combined scale and fade entrance
- **Duration**: 0.4s
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Transform**: scale (0.9→1), opacity (0→1)

---

## CSS Utility Classes

### Animation Classes

- `.fade-in-up` - Apply fadeInUp animation
- `.slide-in-up` - Apply slideInUp animation
- `.slide-in-down` - Apply slideInDown animation
- `.slide-in-left` - Apply slideInLeft animation
- `.slide-in-right` - Apply slideInRight animation
- `.zoom-in` - Apply zoomIn animation
- `.scale-in` - Apply scaleIn animation
- `.animate-fade-in` - Apply fadeIn animation

### Delay Classes (Stagger Effect)

- `.delay-100` - 0.1s delay
- `.delay-200` - 0.2s delay
- `.delay-300` - 0.3s delay
- `.delay-400` - 0.4s delay
- `.delay-500` - 0.5s delay

### Special Effect Classes

- `.card-lift` - Smooth card hover with lift effect
- `.shimmer-effect` - Light reflection sweep
- `.rotate-slow` - Continuous slow rotation
- `.text-link-hover` - Underline animation on hover
- `.fade-smooth` - Smooth opacity transitions
- `.expand-smooth` - Smooth height expansion
- `.animate-stagger` - Staggered child animations

### Scroll Animation Classes

- `.scroll-animate` - Base class for scroll-triggered animations
- `.scroll-animate.visible` - Applied when element becomes visible

---

## Hover Transitions

### Interactive Elements

All buttons, links, and clickable elements include smooth hover effects:

- **Transition Duration**: 0.3s
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Standard Hover**: translateY(-2px) for lift effect
- **Scale on Hover**: 1.05x for emphasis

### Card Hover Effects

All `.card-lift` elements:

- **Y-axis Movement**: -8px (desktop), -4px (mobile)
- **Box Shadow**: Increased shadow depth
- **Transition**: Smooth 0.3s animation

### Button Hover Effects

#### Primary Buttons (.hero-btn-primary)

- Transform: translateY(-4px) scale(1.05)
- Box Shadow: Enhanced shadow
- Background: Gradient shift animation

#### Secondary Buttons (.hero-btn-secondary)

- Transform: translateY(-4px)
- Background: Increased opacity
- Border: Color enhancement

### Link Hover Effects

- Text color transition: 0.3s ease
- Underline animation available with `.text-link-hover` class
- Icon shift with custom gap transitions

---

## Scroll-Triggered Animations

### JavaScript Implementation

The `initScrollAnimations()` function uses the Intersection Observer API to trigger animations as elements enter the viewport:

```javascript
// Automatically animates:
- Service cards: fadeInUp
- About cards: slideInUp
- Why Choose Us cards: zoomIn
- Contact info cards: fadeInUp
```

### Configuration

- **Threshold**: 10% of element must be visible
- **Root Margin**: -50px bottom (trigger slightly before full visibility)
- **Behavior**: One-time animation on first visibility

---

## Mobile Optimizations

### Disabled on Mobile (< 768px)

- `rotate-slow` - Stops rotation
- `shimmer-effect` - Removes shimmer
- `.animate-stagger` - Removes stagger delays
- `.card-lift:hover` - Reduced lift (4px instead of 8px)

### Performance

- Reduced animation complexity on smaller screens
- Simplified color transitions
- Disabled GPU-heavy effects
- Maintained smooth 60fps performance

---

## Accessibility Features

### prefers-reduced-motion Support

All animations respect user accessibility preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States

- `:focus-visible` - 2px outline with smooth transition
- Input focus: Box shadow with color change
- Button focus: No transform change (accessibility requirement)

### High Contrast

- Selection highlight: Subtle blue overlay
- Link underlines: High contrast color

---

## Animation Timing Standards

### Duration Guidelines

- **Entrance**: 0.5-0.8s (subtle, professional)
- **Hover**: 0.3s (immediate feedback)
- **Continuous**: 2-20s (smooth, non-intrusive)
- **Form Feedback**: 0.2-0.3s (quick response)

### Easing Functions

- **Entrance**: `ease-out` (faster start, slower end)
- **Hover**: `cubic-bezier(0.4, 0, 0.2, 1)` (material design)
- **Continuous**: `linear` (smooth rotation)
- **Important**: `ease-in-out` (smooth transitions)

### Stagger Patterns

- **Base Delay**: 0.1s between items
- **Maximum Stagger**: 0.5s for 6+ items
- **Mobile**: Removed (performance)

---

## JavaScript Animation Functions

### initScrollAnimations()

- Observes elements entering viewport
- Applies appropriate animation based on element class
- Triggers one-time animation on visibility

### initHoverAnimations()

- Adds `.card-lift` class to all cards
- Applies smooth transitions to buttons
- Ensures consistent hover behavior

### initGridStagger()

- Applies staggered animation delays to grid items
- Creates cascade effect on load
- Configurable delay increment (0.1s)

### initNavbarScrollEffect()

- Adds shadow on scroll
- Smooth transition on/off shadow
- Improves visual hierarchy

---

## Best Practices for Adding Animations

### Do ✓

- Use hardware-accelerated properties (transform, opacity)
- Keep animations under 0.5s for UI feedback
- Respect accessibility preferences
- Test on mobile devices
- Use consistent easing functions

### Don't ✗

- Animate layout properties (width, height) - use transform instead
- Create animations longer than 3s unless continuous
- Forget to test with `prefers-reduced-motion`
- Use transitions on every property
- Animate more than 2-3 properties simultaneously

---

## Performance Metrics

- **Page Load**: No blocking animations
- **FPS**: Consistent 60fps on all devices
- **File Size**: Pure CSS (no external libraries)
- **Mobile Impact**: Minimal (optimized for mobile)
- **Accessibility**: Full support for reduced motion

---

## Browser Support

All animations use standard CSS3 properties supported by:

- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- iOS Safari 12+
- Android Browser 9+

Graceful degradation for older browsers (static display, no animations).

---

## Testing Checklist

- [ ] All animations play smoothly at 60fps
- [ ] Animations disabled with prefers-reduced-motion
- [ ] Hover effects work on touch devices
- [ ] Mobile animations optimized
- [ ] Scroll animations trigger correctly
- [ ] Form focus states visible
- [ ] Keyboard navigation works
- [ ] No layout shifts during animations
- [ ] Print styles hide animations
- [ ] Dark mode compatibility (if needed)

---

## Future Enhancement Ideas

- [ ] Add animation preferences to settings
- [ ] Implement parallax scrolling effects
- [ ] Add scroll-linked animations
- [ ] Create custom animation page
- [ ] Add loading animations
- [ ] Implement gesture-based animations
- [ ] Add sound effects (optional)
- [ ] Create animation tutorial
