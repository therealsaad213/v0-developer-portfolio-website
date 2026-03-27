# Firebase Setup Guide

## Steps to Set Up Firebase

### 1. Create a Firebase Project
- Go to [Firebase Console](https://console.firebase.google.com)
- Click "Add project"
- Enter project name: "Shaikh Saad Portfolio"
- Enable Google Analytics (optional)
- Create the project

### 2. Register Your Web App
- In your Firebase project, click "Add app" and select Web (</> icon)
- Register app with a nickname like "Portfolio"
- Copy the Firebase config values

### 3. Get Your Configuration
You'll get something like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234",
};
```

### 4. Add Environment Variables
1. Create a `.env.local` file in your project root
2. Copy the contents from `.env.example`
3. Replace the placeholder values with your Firebase config values

Example `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyD...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcd1234
```

### 5. Enable Firestore Database
- In Firebase Console, go to "Firestore Database"
- Click "Create database"
- Start in **test mode** for development
- Choose a location (default is fine)
- Create the database

### 6. Set Up Firestore Security Rules (Important!)
In Firestore, go to "Rules" tab and update to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read
    match /messages/{document=**} {
      allow read: if true;
      allow write: if request.auth != null || request.data.email != null;
    }
  }
}
```

### 7. Test the Setup
1. Start your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your Firestore database to verify the message was saved

## Features Enabled
- ✅ Contact form submissions to Firestore
- ✅ Real-time updates with Firestore listeners
- ✅ Toast notifications for form feedback
- ✅ Email validation
- ✅ Automatic timestamp on submissions

## Troubleshooting

### "Firebase is not initialized"
- Make sure all env variables are set correctly
- Restart your development server

### "Permission denied" errors
- Check your Firestore security rules
- Make sure you're using the test mode rules above

### Messages not saving
- Open browser DevTools → Console
- Check for any Firebase error messages
- Verify Firebase config values match your project

## Next Steps
- Update social media links in components (navbar, footer, contact)
- Replace placeholder project links with real projects
- Add actual email in the contact section
- Deploy to Vercel and update Firebase allowed domains
