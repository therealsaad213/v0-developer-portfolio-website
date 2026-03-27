# Shaikh Saad - Full Stack Developer Portfolio

A stunning, modern portfolio website built with cutting-edge technologies. This is a futuristic, fully-responsive portfolio featuring smooth animations, glassmorphism design, and Firebase backend integration.

## 🚀 Features

- ⚡ **Ultra-Modern Design** - Dark theme with neon gradients and glassmorphism effects
- 🎯 **Interactive Animations** - Smooth transitions and scroll-based animations with Framer Motion
- 📱 **Fully Responsive** - Mobile-first design that looks perfect on all devices
- 🔥 **Firebase Integration** - Real-time contact form submissions to Firestore
- 🎨 **Custom Cursor** - Glowing cursor effect for enhanced interactivity
- 📊 **Progress Indicator** - Scroll progress bar at the top of the page
- 🔐 **Type-Safe** - Built with TypeScript for better code quality
- ⚙️ **Production Ready** - Clean, modular component architecture

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with Server Components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **UI Components**: shadcn/ui - High-quality React components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

### Backend
- **Database**: [Firebase Firestore](https://firebase.google.com/) - Cloud Firestore database
- **Authentication**: Firebase Authentication (ready to integrate)
- **Hosting**: Ready for Vercel or any Node.js host

## 📋 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section with 3D avatar
│   ├── about.tsx           # About section with timeline
│   ├── skills.tsx          # Skills showcase
│   ├── experience.tsx      # Experience timeline
│   ├── projects.tsx        # Featured projects
│   ├── contact.tsx         # Contact form with Firebase
│   ├── footer.tsx          # Footer
│   ├── scroll-progress.tsx # Scroll indicator
│   └── cursor-glow.tsx     # Custom cursor effect
├── lib/
│   ├── firebase.ts         # Firebase configuration
│   └── use-intersection-observer.ts  # Custom hook
├── public/                 # Static assets
└── FIREBASE_SETUP.md       # Firebase setup guide
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Set up Firebase** (see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md))
   - Create a Firebase project
   - Get your configuration keys
   - Create `.env.local` file with your Firebase credentials

4. **Environment Variables**
```bash
cp .env.example .env.local
# Edit .env.local with your Firebase config
```

5. **Run development server**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

6. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information
Edit these files with your information:

- **`components/hero.tsx`** - Update name, role, and headline
- **`components/about.tsx`** - Update your story and milestones
- **`components/skills.tsx`** - Update your skills and proficiency levels
- **`components/experience.tsx`** - Update your work experience
- **`components/projects.tsx`** - Update your featured projects
- **`components/contact.tsx`** - Update contact links and email
- **`components/navbar.tsx`** - Update social media links
- **`components/footer.tsx`** - Update footer links and information

### Color Scheme
The portfolio uses a custom color scheme with neon accents. To change colors:

1. Edit the gradient colors in `tailwind.config.ts`
2. Update color classes throughout components (e.g., `from-cyan-500 to-purple-500`)
3. Main colors: Cyan (`cyan-*`), Purple (`purple-*`), Pink (`pink-*`)

### Fonts
Currently using Geist font from Google Fonts. To change:

1. Update `app/layout.tsx` to import a different Google Font
2. Update `tailwind.config.ts` font configuration

## 📧 Firebase Configuration

### Contact Form Setup
The contact form saves messages to Firestore. To enable:

1. Follow the steps in [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
2. Update security rules to allow form submissions
3. Messages are automatically saved with timestamp

### Data Structure
Contact form messages are stored in Firestore with this structure:
```
messages/
├── {docId}
│   ├── name: string
│   ├── email: string
│   ├── message: string
│   └── timestamp: Timestamp
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Other Platforms
The project is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Firebase Hosting
- DigitalOcean
- Heroku

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance

- ✅ Optimized images and assets
- ✅ Code splitting and lazy loading
- ✅ CSS minification
- ✅ Zero JavaScript where possible with Server Components
- ✅ Responsive images

Run the build and analyze:
```bash
npm run build
npm start
```

## 🔒 Security

- ✅ Environment variables for sensitive data
- ✅ Firebase security rules for data protection
- ✅ Input validation on forms
- ✅ No sensitive data in client code

## 🐛 Troubleshooting

### Firebase Not Working
- Check `.env.local` has all required variables
- Verify Firebase project has Firestore enabled
- Check Firestore security rules allow writes
- Open DevTools Console for error messages

### Animations Not Smooth
- Ensure hardware acceleration is enabled
- Check browser is up to date
- Disable browser extensions that might interfere

### Form Submissions Failing
- Verify Firebase is initialized correctly
- Check network tab in DevTools for API errors
- Ensure Firestore database is in test mode
- Check Firestore collection 'messages' exists

## 📈 SEO

The portfolio includes:
- Meta tags and descriptions
- Open Graph tags
- Structured data ready
- Mobile viewport configuration
- Sitemap ready for search engines

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For issues or questions:
1. Check the [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
2. Review the code comments
3. Open an issue on GitHub

## 🎉 Built With

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Firebase](https://firebase.google.com/)
- [Lucide React](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Made with ❤️ by Shaikh Saad**
