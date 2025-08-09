import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "डॉ. मुकेश गौतम | हास्य कवि | Stand-up Comedian",
  description: "प्रसिद्ध हास्य कवि डॉ. मुकेश गौतम का आधिकारिक वेबसाइट। राष्ट्रीय पुरस्कार विजेता कवि, स्टैंड-अप कॉमेडियन और टीवी कलाकार।",
  keywords: ["hasya kavi", "mukesh gautam", "stand up comedian", "hindi poetry", "humor", "comedy", "tv shows"],
  authors: [{ name: "डॉ. मुकेश गौतम" }],
  openGraph: {
    title: "डॉ. मुकेश गौतम | हास्य कवि | Stand-up Comedian",
    description: "प्रसिद्ध हास्य कवि डॉ. मुकेश गौतम का आधिकारिक वेबसाइट। राष्ट्रीय पुरस्कार विजेता कवि, स्टैंड-अप कॉमेडियन और टीवी कलाकार।",
    url: "https://drmukeshgautam.com",
    siteName: "डॉ. मुकेश गौतम",
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "डॉ. मुकेश गौतम | हास्य कवि | Stand-up Comedian",
    description: "प्रसिद्ध हास्य कवि डॉ. मुकेश गौतम का आधिकारिक वेबसाइट।",
  },
  robots: 'index, follow',
  alternates: {
    canonical: "https://drmukeshgautam.com",
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
        {children}
      </body>
    </html>
  );
}
