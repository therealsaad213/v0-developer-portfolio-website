# Customization Guide

This guide walks you through customizing each section of your portfolio.

## 🎯 Hero Section

**File**: `components/hero.tsx`

### What to Change
```typescript
// 1. Update your name
<h1>Shaikh Saad</h1>  // Change to your name

// 2. Update your roles (these auto-rotate)
const roles = [
  'Full Stack Developer',  // Change these
  'Web Architect',
  'Creative Technologist',
  'UI/UX Engineer'
];

// 3. Update initials in avatar
<div>SS</div>  // Change to your initials

// 4. Update the CTA buttons
<Link href="#projects">View Projects</Link>
<Link href="#contact">Get In Touch</Link>

// 5. Update hero description
<p>Building exceptional digital experiences...</p>  // Update your intro
```

### Color Customization
Change the gradient colors:
```typescript
// Change from:
className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"

// To:
className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
```

---

## 📖 About Section

**File**: `components/about.tsx`

### What to Change
```typescript
// 1. Update about text
<p>Passionate about creating intuitive...</p>

// 2. Update profile details
<p>📍 Based in India</p>        // Change location
<p>💼 Full Stack Developer</p>  // Change role
<p>🚀 Open to opportunities</p> // Update status

// 3. Update milestones
const milestones = [
  { 
    year: '2020', 
    title: 'Started Journey', 
    desc: 'Began learning web development' 
  },
  // Add or modify milestones...
];
```

---

## 🎓 Skills Section

**File**: `components/skills.tsx`

### Update Your Skills
```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', proficiency: 95 },      // Change skill and percentage
      { name: 'Next.js', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 95 },
      // Add or remove skills...
    ],
  },
  // Add more categories...
];
```

### Proficiency Levels
- 85-100: Expert
- 70-84: Advanced
- 50-69: Intermediate
- Below 50: Beginner

---

## 💼 Experience Section

**File**: `components/experience.tsx`

### Update Work History
```typescript
const experiences = [
  {
    period: '2023 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of scalable web applications...',
    tech: ['React', 'Node.js', 'Firebase', 'GraphQL'],
  },
  // Add or modify experiences...
];
```

### Tips
- Order by most recent first
- Include 3-5 relevant technologies per role
- Keep descriptions to 1-2 sentences
- Use action verbs (Built, Led, Developed, etc.)

---

## 🚀 Projects Section

**File**: `components/projects.tsx`

### Update Featured Projects
```typescript
const projects = [
  {
    title: 'AI Resume Analyzer SaaS',
    description: 'Intelligent resume analysis platform...',
    tech: ['Next.js', 'Firebase', 'OpenAI API', 'Tailwind CSS'],
    color: 'from-cyan-500 to-blue-500',
    link: '#',        // Add your project URL
    github: '#',      // Add GitHub repo URL
  },
  // Add up to 6 projects...
];
```

### Color Combinations
- `from-cyan-500 to-blue-500` - Cool blue
- `from-purple-500 to-pink-500` - Purple/Pink
- `from-pink-500 to-rose-500` - Pink/Rose
- `from-green-500 to-emerald-500` - Green
- `from-orange-500 to-red-500` - Warm orange
- `from-indigo-500 to-purple-500` - Indigo

---

## 📧 Contact Section

**File**: `components/contact.tsx`

### Update Contact Information
```typescript
// 1. Update email link
<a href="mailto:your-email@example.com">Email</a>

// 2. Update social links
const socialLinks = [
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/yourusername',  // Add your GitHub
    color: 'hover:text-slate-300' 
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://linkedin.com/in/yourusername',  // Add your LinkedIn
    color: 'hover:text-blue-400' 
  },
  // Update other social links...
];

// 3. Update availability info
<p>Response time: <span>Within 24 hours</span></p>
<p>Available for: <span>Freelance & Full-time</span></p>
```

### Firebase Form Submission
The form automatically:
- Validates email format
- Saves to Firestore
- Shows success/error toast
- Clears form after submission

No additional code needed!

---

## 🧭 Navigation

**File**: `components/navbar.tsx`

### Update Navigation Links
```typescript
const navItems = [
  { label: 'About', href: '#about' },      // Link to sections
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
```

### Update Logo
```typescript
// Change initials
<div>SS</div>  // Change to your initials

// Change company/name
<span>Shaikh Saad</span>  // Change to your name
```

---

## 🎨 Color System

### Primary Colors
The portfolio uses these main colors:
- **Cyan**: `#06B6D4` - Primary accent
- **Purple**: `#A855F7` - Secondary accent
- **Pink**: `#EC4899` - Tertiary accent

### How to Change the Color Scheme

**Option 1: Global Color Update**
1. Find all `from-cyan-` and replace with your color
2. Find all `to-purple-` and replace with your color
3. Find all `text-cyan-` and replace as needed

**Option 2: By Section**
Each section has its own gradient. Find the gradient class and update:
```typescript
className="from-cyan-500 to-blue-500"  // Change these colors
```

### Color Palette Ideas
- **Cool Blue**: `from-blue-500 to-cyan-500`
- **Warm Orange**: `from-orange-500 to-red-500`
- **Green**: `from-green-500 to-emerald-500`
- **Purple**: `from-purple-500 to-pink-500`
- **Red**: `from-red-500 to-rose-500`

---

## 🔤 Typography

### Fonts
The portfolio uses **Geist** font by default (from Google Fonts).

To change fonts:
1. Edit `app/layout.tsx`
2. Replace Geist import with your font
3. Update `tailwind.config.ts` font configuration

### Font Sizes
- Hero heading: `text-7xl`
- Section headings: `text-5xl`
- Subheadings: `text-2xl`
- Body text: `text-base`

---

## 📱 Mobile Responsiveness

The portfolio is mobile-first. Key breakpoints:
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)

### Mobile Customization
Look for classes like:
```typescript
className="hidden md:block"  // Hide on mobile
className="md:grid-cols-2"   // 2 columns on tablet+
```

---

## ⚡ Performance Tips

1. **Optimize Images**
   - Use Next.js `Image` component
   - Compress before uploading
   - Use WebP format

2. **Code Splitting**
   - Components are already optimized
   - Use dynamic imports for heavy components

3. **Animations**
   - Framer Motion is already optimized
   - Reduce animation duration on slow devices if needed

---

## 🔗 Social Media Links

Update these in multiple files:

1. **Navbar**: `components/navbar.tsx` - Quick links in mobile menu
2. **Contact**: `components/contact.tsx` - Main social icons
3. **Footer**: `components/footer.tsx` - Footer social links

Pattern:
```typescript
{
  icon: Github,
  label: 'GitHub',
  href: 'https://github.com/yourusername',
  color: 'hover:text-slate-300'
}
```

---

## 📊 SEO Customization

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',  // Change title
  description: 'Your description here',  // Change meta description
  generator: 'v0.app',
  // Update other meta fields...
};
```

---

## 🌙 Dark Mode

The portfolio is dark mode by default. To add light mode support:

1. Install `next-themes`
2. Add theme toggle component
3. Update CSS variables for light mode

Currently optimized for dark theme viewing.

---

## ❓ Common Customizations

### Change Section Order
Edit `app/page.tsx` and reorder the component imports.

### Add New Section
1. Create new component: `components/new-section.tsx`
2. Import in `app/page.tsx`
3. Add to component rendering order
4. Update navbar links if needed

### Remove Sections
1. Remove from `app/page.tsx`
2. Remove from navbar
3. Remove from footer

### Change Animation Speed
Update `transition={{ duration: 0.8 }}` values in components.
- Lower = faster
- Higher = slower

---

## 🚀 Next Steps

1. Update all personal information
2. Add your project links
3. Configure Firebase
4. Test contact form
5. Deploy to Vercel
6. Share with the world! 🎉

Need help? Refer back to specific sections or check the main README.
