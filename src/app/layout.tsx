import type { Metadata, Viewport } from 'next';
import './globals.css';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://kavimukeshgautam.com'),
  title: {
    default: "डॉ. मुकेश गौतम | प्रसिद्ध हास्य कवि | बेस्ट कॉमेडी पोएट इंडिया",
    template: "%s | डॉ. मुकेश गौतम"
  },
  description: "डॉ. मुकेश गौतम - भारत के प्रसिद्ध हास्य कवि और स्टैंड-अप कॉमेडियन। राष्ट्रीय पुरस्कार विजेता, 30+ वर्षों का अनुभव, 2500+ हास्य प्रस्तुतियां। हास्य कवि सम्मेलन बुकिंग के लिए संपर्क करें।",
  keywords: [
    // Hindi Keywords
    "मुकेश गौतम", "डॉ मुकेश गौतम", "हास्य कवि", "हास्य कविता", "बेस्ट हास्य कवि इंडिया", 
    "टॉप 10 हास्य कवि", "हिंदी हास्य कवि", "प्रसिद्ध हास्य कवि", "स्टैंड अप कॉमेडियन इंडिया",
    "हास्य कवि सम्मेलन", "मुकेश गौतम कविताएं", "मुकेश गौतम टीवी शो", "हास्य कवि बुकिंग",
    "कॉर्पोरेट हास्य कार्यक्रम", "हिंदी कॉमेडी पोएट्री", "कविता सम्मेलन", "हास्य व्यंग्य",
    "राष्ट्रीय पुरस्कार विजेता कवि", "महाराष्ट्र हास्य कवि", "हिंदी साहित्य अकादमी पुरस्कार",
    "टीवी हास्य कलाकार", "मंच संचालक", "हास्य लेखक", "व्यंग्य कार",
    
    // English Keywords  
    "Mukesh Gautam", "Dr Mukesh Gautam", "hasya kavi", "comedy poet India", "best comedian poet India",
    "top 10 humor poets India", "hindi comedy poet", "stand up comedian India", "comedy poetry",
    "humor poetry", "satirical poetry", "hindi literature", "comedy shows booking", "corporate entertainment",
    "poetry convention", "hasya kavita", "hindi poet", "award winning poet", "television comedy artist",
    
    // Location-based
    "हास्य कवि मुंबई", "comedy poet Mumbai", "हास्य कवि दिल्ली", "comedy poet Delhi",
    "हास्य कवि पुणे", "comedy poet Pune", "हास्य कवि इंदौर", "comedy poet Indore",
    
    // Event-based
    "हास्य कवि शादी", "comedy poet wedding", "हास्य कवि कॉर्पोरेट इवेंट", "corporate comedy events",
    "हास्य कवि सम्मेलन आयोजन", "poetry event organizer", "comedy show booking"
  ],
  authors: [{ name: "डॉ. मुकेश गौतम", url: "https://drmukeshgautam.com" }],
  creator: "डॉ. मुकेश गौतम",
  publisher: "डॉ. मुकेश गौतम",
  category: "Entertainment, Poetry, Comedy, Literature",
  classification: "Comedy Poet, Entertainer, Author",
  icons: {
    icon: '/images/favicon.jpeg',
    shortcut: '/images/favicon.jpeg',
    apple: '/images/favicon.jpeg',
  },
  openGraph: {
    title: "डॉ. मुकेश गौतम | भारत के प्रसिद्ध हास्य कवि | Best Comedy Poet India",
    description: "डॉ. मुकेश गौतम - राष्ट्रीय पुरस्कार विजेता हास्य कवि। 30+ वर्षों का अनुभव, 2500+ प्रस्तुतियां। हास्य कवि सम्मेलन बुकिंग के लिए संपर्क करें।",
    url: "https://kavimukeshgautam.com",
    siteName: "डॉ. मुकेश गौतम - हास्य कवि",
    locale: 'hi_IN',
    type: 'website',
    images: [
      {
        url: '/images/Profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'डॉ. मुकेश गौतम - प्रसिद्ध हास्य कवि और स्टैंड-अप कॉमेडियन',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "डॉ. मुकेश गौतम | भारत के प्रसिद्ध हास्य कवि",
    description: "राष्ट्रीय पुरस्कार विजेता हास्य कवि। 30+ वर्षों का अनुभव, 2500+ हास्य प्रस्तुतियां।",
    images: ['/images/Profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://kavimukeshgautam.com",
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual Google verification code
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#113F67',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
