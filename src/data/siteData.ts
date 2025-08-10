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
    instagram: "https://www.instagram.com/kavimukeshgautam?igsh=c2k4dmt0ejZmd2t5&utm_source=qr",
    facebook: "https://www.facebook.com/share/16mqRtaG7c/?mibextid=wwXIfr",
    youtube: "https://youtube.com/@mukeshgautamofficial?si=gXlrIhpyf_ZlbLB0",
    // twitter: "https://twitter.com/drmukeshgautam",
    email: "contact@drmukeshgautam.com",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210"  // Added for preheader
  },
  
  // Navigation items - All in Hindi
  navigation: [
    { name: "Home", nameEn: "Home", href: "#home" },
    { name: "About", nameEn: "About", href: "#about" },
    { name: "Gallery", nameEn: "Gallery", href: "#gallery" },
    { name: "Blogs", nameEn: "Blog", href: "#blog" },
    { name: "Upcoming Shows", nameEn: "Upcoming Shows", href: "#upcoming-shows" },
    { name: "Contact", nameEn: "Contact", href: "#contact" }
  ]
};

// About section content
export const aboutData = {
  title: "डॉ. मुकेश गौतम के बारे में",
  titleEn: "About Dr. Mukesh Gautam",
  subtitle: "हास्य कवि | स्टैंड-अप कॉमेडियन | मंच संचालक",
  subtitleEn: "Hasya kavi | Stand-up Comedian | Manch sanchalak",
  
  bio: [
    "डॉ. मुकेश गौतम एक प्रसिद्ध हास्य कवि, स्टैंड-अप कॉमेडियन और मंच संचालक हैं। वे अपनी सहज हास्य प्रस्तुति के लिए देश भर में जाने जाते हैं।",
    "पर्यावरण के क्षेत्र में भी उनका महत्वपूर्ण योगदान है। अभी तक देश भर में 42 हजार वृक्षारोपण का कार्य कर चुके हैं।"
  ],
  
  education: [
    "एम.ए. (Master of Arts)",
    "पीएच.डी. (Doctor of Philosophy)", 
    "एल.एल.बी. (Bachelor of Laws)",
    "एल.एल.एम. (Master of Laws)"
  ],
  
  achievements: [
    "राष्ट्रीय मेदिनी पुरस्कार वर्ष 2004 ",
    "कविता के लिए दो बार महाराष्ट्र राज्य हिंदी साहित्य अकादेमी पुरस्कार (वर्ष 2013 और 2018)",
    "अनेक सरकारी एवं गैर सरकारी पुरस्कारों से सम्मानित",
    "पर्यावरण के क्षेत्र में महत्वपूर्ण कार्य - 42 हजार वृक्षारोपण",// Added for environmental contribution
    "मराठी, अंग्रेजी, तमिल भाषाओं में पुस्तकों का अनुवाद प्रकाशित", //
    "विगत 30 वर्षों से देश-विदेश में 2500 हास्य प्रस्तुतियां",
    "कवि सम्मेलन में पारिवारिक एवं सहज हास्य प्रस्तुति",
    "एक दर्जन पुस्तके प्रकाशित पुस्तकों का अनेक भाषाओं में अनुवाद भी प्रकाशित रचनाएं  पाठ्यक्रम में भी शामिल",
    "एक दर्जन पुस्तके प्रकाशित",
    "पुस्तकों का अनेक भाषाओं में अनुवाद भी प्रकाशित"
  ],
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

// TV Shows data with English channel names and video links
export const tvShows = [
  { 
    name: "द ग्रेट इंडियन लाफ्टर चैलेंज", 
    channel: "Star One", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "कॉमेडी चैंपियन", 
    channel: "Star One", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "कॉमेडी स्टार", 
    channel: "Sahara TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "अंगूर", 
    channel: "ETC TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "हंसगुल्ले", 
    channel: "Big Magic", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "राजू हाजिर हो", 
    channel: "NDTV Imagine", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "जॉनी आला रे", 
    channel: "Zee TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "सबसे पॉलिटिकली इनकरेक्ट कौन", 
    channel: "NDTV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "बहुत खूब", 
    channel: "Sony TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/Oz8w47ISFqc?si=n2hvWm5VjbPY-kKv" 
  },
  { 
    name: "वाह वाह", 
    channel: "SAB TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/buirOn1NfFU?si=uEHzewGL5K3k2XfE" 
  },
  { 
    name: "ऑल स्टार", 
    channel: "Pogo TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "वाह भाई वाह", 
    channel: "Shemaroo TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/EQlPXF-qffs?si=2znKQNIo3gZLAvYO" 
  },
  { 
    name: "जस्ट लाफ बाकी माफ", 
    channel: "India TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "हास्य कवि मुकाबला", 
    channel: "Zee Smile TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "हास्य हंगामा", 
    channel: "Dabang TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  },
  { 
    name: "कॉमेडी धमाल", 
    channel: "Dhamal TV", 
    type: "हास्य",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ" 
  }
];

// Special featured videos with actual YouTube links
export const featuredVideos = [
  {
    title: "वाह भाई वाह",
    channel: "Shemaroo TV",
    videoUrl: "https://youtu.be/EQlPXF-qffs?si=2znKQNIo3gZLAvYO",
    thumbnail: "https://img.youtube.com/vi/EQlPXF-qffs/maxresdefault.jpg"
  },
  {
    title: "वाह वाह क्या बात है",
    channel: "SAB TV", 
    videoUrl: "https://youtu.be/buirOn1NfFU?si=uEHzewGL5K3k2XfE",
    thumbnail: "https://img.youtube.com/vi/buirOn1NfFU/maxresdefault.jpg"
  },
  {
    title: "बहुत खूब",
    channel: "Sony TV",
    videoUrl: "https://youtu.be/Oz8w47ISFqc?si=n2hvWm5VjbPY-kKv",
    thumbnail: "https://img.youtube.com/vi/Oz8w47ISFqc/maxresdefault.jpg"
  },
  {
    title: "Once More",
    channel: "Doordarshan",
    videoUrl: "https://youtu.be/hE4NuoFIYCk?si=LM8ti1aZGPEIU3_g",
    thumbnail: "https://img.youtube.com/vi/hE4NuoFIYCk/maxresdefault.jpg"
  }
];
