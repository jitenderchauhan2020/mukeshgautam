// Website content for Dr. Mukesh Gautam - Hasya Kavi
export const siteConfig = {
  name: "डॉ. मुकेश गौतम",
  title: "हास्य कवि | Stand-up Comedian | मंच संचालक",
  description: "प्रसिद्ध हास्य कवि डॉ. मुकेश गौतम का आधिकारिक वेबसाइट। राष्ट्रीय पुरस्कार विजेता कवि, स्टैंड-अप कॉमेडियन और टीवी कलाकार।",
  tagline: "हंसाने की कला में माहिर",
  taglineEnglish: "Master in the Art of Making People Laugh",
  url: "https://drmukeshgautam.com",
  keywords: ["hasya kavi", "mukesh gautam", "stand up comedian", "hindi poetry", "humor", "comedy", "tv shows"],
  
  // Theme colors (keeping the same beautiful theme)
  colors: {
    primary: "#113F67",      // Deep navy blue
    secondary: "#34699A",    // Medium blue
    highlight: "#58A0C8",    // Sky blue
    accent: "#FDF5AA",       // Soft pastel yellow
    white: "#FFFFFF",
    text: "#113F67"
  },
  
  // Social media and contact
  social: {
    instagram: "https://instagram.com/drmukeshgautam",
    facebook: "https://facebook.com/drmukeshgautam",
    youtube: "https://youtube.com/@drmukeshgautam",
    twitter: "https://twitter.com/drmukeshgautam",
    email: "contact@drmukeshgautam.com",
    phone: "+91 98765 43210"
  },
  
  // Navigation items
  navigation: [
    { name: "मुख्य", nameEn: "Home", href: "#home" },
    { name: "परिचय", nameEn: "About", href: "#about" },
    { name: "कविताएं", nameEn: "Poetry", href: "#poetry" },
    { name: "टीवी शो", nameEn: "TV Shows", href: "#tv-shows" },
    { name: "गैलरी", nameEn: "Gallery", href: "#gallery" },
    { name: "आगामी शो", nameEn: "Upcoming Shows", href: "#upcoming-shows" },
    { name: "संपर्क", nameEn: "Contact", href: "#contact" }
  ]
};

// About section content
export const aboutData = {
  title: "डॉ. मुकेश गौतम के बारे में",
  titleEn: "About Dr. Mukesh Gautam",
  subtitle: "हास्य कवि | स्टैंड-अप कॉमेडियन | मंच संचालक",
  subtitleEn: "Hasya Kavi | Stand-up Comedian | Stage Host",
  
  bio: [
    "डॉ. मुकेश गौतम एक प्रसिद्ध हास्य कवि, स्टैंड-अप कॉमेडियन और मंच संचालक हैं। वे अपनी सहज हास्य प्रस्तुति के लिए देश भर में जाने जाते हैं।",
    "विगत 30 वर्षों से देश-विदेश में सहज हास्य की 2500 प्रस्तुतियां देकर वे लाखों लोगों का मनोरंजन कर चुके हैं। उनकी पारिवारिक हास्य शैली हर उम्र के लोगों को प्रिय है।",
    "पर्यावरण के क्षेत्र में भी उनका महत्वपूर्ण योगदान है। अभी तक देश भर में 42 हजार वृक्षारोपण का कार्य कर चुके हैं।"
  ],
  
  education: [
    "एम.ए. (Master of Arts)",
    "पीएच.डी. (Doctor of Philosophy)", 
    "एल.एल.बी. (Bachelor of Laws)",
    "एल.एल.एम. (Master of Laws)"
  ],
  
  achievements: [
    "राष्ट्रीय मेदिनी पुरस्कार वर्ष 2004 कविता के लिए दो बार",
    "महाराष्ट्र राज्य हिंदी साहित्य अकादेमी पुरस्कार (वर्ष 2013 और 2018)",
    "अनेक सरकारी एवं गैर सरकारी पुरस्कारों से सम्मानित",
    "पर्यावरण के क्षेत्र में महत्वपूर्ण कार्य - 42 हजार वृक्षारोपण",
    "मराठी, अंग्रेजी, तमिल भाषाओं में पुस्तकों का अनुवाद प्रकाशित",
    "विगत 30 वर्षों से देश-विदेश में 2500 हास्य प्रस्तुतियां"
  ],
  
  image: "/images/dr-mukesh-gautam-profile.jpg"
};

// Hero section data
export const heroData = {
  title: "डॉ. मुकेश गौतम",
  subtitle: "हंसाने की कला में माहिर",
  subtitleEnglish: "Master in the Art of Making People Laugh", 
  description: "राष्ट्रीय पुरस्कार विजेता हास्य कवि और प्रसिद्ध स्टैंड-अप कॉमेडियन",
  ctaText: "कविताएं पढ़ें",
  ctaTextEnglish: "Read Poetry",
  backgroundImage: "/images/hero-bg.jpg"
};

// TV Shows data
export const tvShows = [
  { name: "द ग्रेट इंडियन लाफ्टर चैलेंज", channel: "स्टार वन", type: "हास्य" },
  { name: "कॉमेडी चैंपियन", channel: "स्टार वन", type: "हास्य" },
  { name: "कॉमेडी स्टार", channel: "सहारा टीवी", type: "हास्य" },
  { name: "अंगूर", channel: "ईटीसी टीवी", type: "हास्य" },
  { name: "हंसगुल्ले", channel: "बिग मैजिक", type: "हास्य" },
  { name: "राजू हाजिर हो", channel: "एनडीटीवी इमेजिन", type: "हास्य" },
  { name: "जॉनी आला रे", channel: "जी टीवी", type: "हास्य" },
  { name: "सबसे पॉलिटिकली इनकरेक्ट कौन", channel: "NDTV", type: "हास्य" },
  { name: "बहुत खूब", channel: "सोनी टीवी", type: "हास्य" },
  { name: "वाह वाह", channel: "सब टीवी", type: "हास्य" },
  { name: "ऑल स्टार", channel: "पोगो टीवी", type: "हास्य" },
  { name: "वाह भाई वाह", channel: "शेमारू टीवी", type: "हास्य" },
  { name: "जस्ट लाफ बाकी माफ", channel: "इंडिया टीवी", type: "हास्य" },
  { name: "हास्य कवि मुकाबला", channel: "जी स्माइल टीवी", type: "हास्य" },
  { name: "हास्य हंगामा", channel: "दबंग टीवी", type: "हास्य" },
  { name: "कॉमेडी धमाल", channel: "धमाल टीवी", type: "हास्य" }
];
