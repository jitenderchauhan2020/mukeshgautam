// Dr. Mukesh Gautam's Poetry Collection

export interface HindiPoem {
  id: string;
  title: string;
  titleEnglish?: string;
  category: "व्यंग्य" | "राजनीतिक" | "सामाजिक" | "हास्य" | "पर्यावरण";
  categoryEnglish: "Satire" | "Political" | "Social" | "Humor" | "Environment";
  excerpt: string[];
  fullPoem: string[];
  date: string;
  featured?: boolean;
  image?: string;
  emotion: "satirical" | "humorous" | "critical" | "thoughtful" | "witty";
}

export const hindiPoems: HindiPoem[] = [
  {
    id: "1",
    title: "फिश तिरंगी",
    titleEnglish: "Fish Tricolor",
    category: "व्यंग्य",
    categoryEnglish: "Satire",
    excerpt: [
      "समुद्र किनारे टहलते हुए",
      "नेताजी ने निहारा",
      "एक खूबसूरत मछली को",
      "फिर मछली को खुश करने के लिए..."
    ],
    fullPoem: [
      "समुद्र किनारे टहलते हुए",
      "नेताजी ने निहारा",
      "एक खूबसूरत मछली को",
      "फिर मछली को खुश करने के लिए",
      "अपनी पर्सनल सेक्रेटरी को दिया आदेश",
      "मछ‌लियों की संख्या बढाने का",
      "किया जाए उचित प्रयास !",
      "",
      "मछली खुश होकर तैरने लगी",
      "उपर-नीचे मस्ती करने लगी !",
      "फिर नेताजी मछुआरों की सभा में गए",
      "मछुआरों को दिया आश्वासन",
      "नाव पर मिलेगी सब्सिडी",
      "और साथ में मिलेंगे",
      "प्रतिवर्ष मुफ्त में दो जाल,",
      "मछलियों का मिलेगा दोगुना दाम !",
      "",
      "मछुआरों के बच्चे",
      "नाचने लगे खुश होकर",
      "मछलियों की आंखो में भर आए आंसू",
      "समुद्र की लहरें",
      "मछलियों को कर रही थी इशारा",
      "अंदर चले जाने का",
      "",
      "ठट्ठा मारकर हंस रहा था नेता",
      "अपनी खूबसूरत सेक्रेटरी के",
      "नितंबों को सहलाते हुए",
      "नेताजी ने अठराह वर्ष पुरानी",
      "स्कॉच में मिलाया सोडा",
      "सेक्रेटरी कर रही थी कोशिश",
      "पुरानी सी गज़ल गुनगुनाने का",
      "और नेताजी ने",
      "ऑर्डर दिया स्टार्टर में",
      "\"फिश तिरंगी\" लाने का !"
    ],
    date: "2024-01-15",
    featured: true,
    image: "/images/poems/fish-tirangi.jpg",
    emotion: "satirical"
  },
  {
    id: "2",
    title: "सेक्यूलर नेता",
    titleEnglish: "Secular Leader",
    category: "राजनीतिक",
    categoryEnglish: "Political",
    excerpt: [
      "वह बडा नेता था",
      "एक सेक्यूलर पार्टी का",
      "बाबरी मस्जिद गिराए जाने वाले दिन",
      "आया था वह मेरे अखबार के दफ्तर..."
    ],
    fullPoem: [
      "वह बडा नेता था",
      "एक सेक्यूलर पार्टी का",
      "बाबरी मस्जिद गिराए जाने वाले दिन",
      "आया था वह",
      "मेरे अखबार के दफ्तर",
      "घटना की निंदा करने",
      "और दुख जताने की विज्ञप्ति लेकर !",
      "",
      "फिर मेरे बांए कंधे पर",
      "रखकर अपनी कुहनी",
      "धीरे से बोला वह-",
      "\"सच कहूं-",
      "जो हुआ अच्छा ही हुआ",
      "एक झंझट था साला",
      "खत्म हो गया हमेशा के लिए\"",
      "",
      "और जब मैं",
      "लौटकर आया अपनी कुर्सी पर",
      "मेरे सामने दीवार पर लटके",
      "कैलेंडर पर छपे",
      "गिरगिट के चित्र में",
      "मुझे साफ दिखाई दे रहा था",
      "उसका ही चेहरा !"
    ],
    date: "2024-02-10",
    featured: true,
    image: "/images/poems/secular-neta.jpg",
    emotion: "critical"
  },
  {
    id: "3",
    title: "हास्य की दुनिया",
    titleEnglish: "World of Humor",
    category: "हास्य",
    categoryEnglish: "Humor",
    excerpt: [
      "हंसी में छुपा है जीवन का सार,",
      "व्यंग्य से मिलती है समझ की धार,",
      "मंच पर खड़ा होकर जब मैं कहता,",
      "हर दुख भूल जाता है संसार।"
    ],
    fullPoem: [
      "हंसी में छुपा है जीवन का सार,",
      "व्यंग्य से मिलती है समझ की धार,",
      "मंच पर खड़ा होकर जब मैं कहता,",
      "हर दुख भूल जाता है संसार।",
      "",
      "तीस साल से मंच पर आता हूं,",
      "लोगों के चेहरों पर मुस्कान लाता हूं,",
      "कॉमेडी के जरिए सच्चाई दिखाता हूं,",
      "समाज के आईने में छवि दिखाता हूं।",
      "",
      "टीवी के पर्दे पर भी छाया हूं,",
      "हर घर में खुशी का संदेश लाया हूं,",
      "हास्य कवि का यही है धर्म,",
      "हंसाना ही मेरा परम कर्म।"
    ],
    date: "2024-03-05",
    featured: false,
    image: "/images/poems/hasya-duniya.jpg",
    emotion: "humorous"
  },
  {
    id: "4",
    title: "पर्यावरण प्रेमी",
    titleEnglish: "Environment Lover",
    category: "पर्यावरण",
    categoryEnglish: "Environment",
    excerpt: [
      "बयालीस हजार पेड़ लगाए हैं,",
      "धरती मां को हरा-भरा बनाए हैं,",
      "कविता के साथ-साथ ये काम भी करता,",
      "प्रकृति की सेवा में जीवन गुजारा है।"
    ],
    fullPoem: [
      "बयालीस हजार पेड़ लगाए हैं,",
      "धरती मां को हरा-भरा बनाए हैं,",
      "कविता के साथ-साथ ये काम भी करता,",
      "प्रकृति की सेवा में जीवन गुजारा है।",
      "",
      "हर वृक्ष एक उम्मीद की तरह,",
      "हर पत्ता एक खुशी की तरह,",
      "ऑक्सीजन देता है ये संसार को,",
      "जीवन देता है हर जीव को।",
      "",
      "आओ मिलकर पेड़ लगाएं,",
      "धरती को स्वर्ग बनाएं,",
      "हास्य कवि का ये भी संदेश,",
      "बचाना है अपना ये देश।"
    ],
    date: "2024-04-20",
    featured: false,
    image: "/images/poems/environment.jpg",
    emotion: "thoughtful"
  },
  {
    id: "5",
    title: "मंच का राजा",
    titleEnglish: "King of Stage",
    category: "सामाजिक",
    categoryEnglish: "Social",
    excerpt: [
      "मंच पर आते ही छा जाता हूं,",
      "हर दिल में उमंग लाता हूं,",
      "माइक थामकर जब बोलता हूं,",
      "तालियों की गर्जना सुनाई देती है।"
    ],
    fullPoem: [
      "मंच पर आते ही छा जाता हूं,",
      "हर दिल में उमंग लाता हूं,",
      "माइक थामकर जब बोलता हूं,",
      "तालियों की गर्जना सुनाई देती है।",
      "",
      "कवि सम्मेलन हो या हास्य कार्यक्रम,",
      "हर जगह मेरा स्वागत है,",
      "लोग पूछते हैं कब आओगे फिर,",
      "मेरी हंसी का इंतज़ार है।",
      "",
      "देश-विदेश में नाम कमाया,",
      "हिंदी कविता का मान बढ़ाया,",
      "हास्य और व्यंग्य की ये दुनिया,",
      "मेरी मेहनत का फल है।"
    ],
    date: "2024-05-15",
    featured: false,
    image: "/images/poems/manch-raja.jpg",
    emotion: "witty"
  }
];

// Poem categories for filtering
export const poemCategories = [
  { name: "सभी", nameEn: "All", value: "all" },
  { name: "व्यंग्य", nameEn: "Satire", value: "व्यंग्य" },
  { name: "राजनीतिक", nameEn: "Political", value: "राजनीतिक" },
  { name: "सामाजिक", nameEn: "Social", value: "सामाजिक" },
  { name: "हास्य", nameEn: "Humor", value: "हास्य" },
  { name: "पर्यावरण", nameEn: "Environment", value: "पर्यावरण" }
];

// Gallery images with captions
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  category: "stage-shows" | "tv-shows" | "awards" | "personal" | "events";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/stage-performance-1.jpg",
    alt: "Dr. Mukesh Gautam performing on stage",
    title: "मंच प्रस्तुति",
    description: "हास्य कवि सम्मेलन में प्रस्तुति",
    category: "stage-shows"
  },
  {
    id: "2",
    src: "/images/gallery/tv-show-appearance.jpg",
    alt: "TV show appearance",
    title: "टीवी कार्यक्रम",
    description: "प्रसिद्ध हास्य शो में भागीदारी",
    category: "tv-shows"
  },
  {
    id: "3",
    src: "/images/gallery/award-ceremony.jpg",
    alt: "Award ceremony",
    title: "पुरस्कार समारोह",
    description: "राष्ट्रीय मेदिनी पुरस्कार प्राप्त करते हुए",
    category: "awards"
  },
  {
    id: "4",
    src: "/images/gallery/tree-plantation.jpg",
    alt: "Tree plantation drive",
    title: "वृक्षारोपण",
    description: "पर्यावरण सेवा - वृक्षारोपण कार्यक्रम",
    category: "events"
  },
  {
    id: "5",
    src: "/images/gallery/book-launch.jpg",
    alt: "Book launch event",
    title: "पुस्तक विमोचन",
    description: "कविता संग्रह का विमोचन समारोह",
    category: "events"
  },
  {
    id: "6",
    src: "/images/gallery/family-photo.jpg",
    alt: "Family photograph",
    title: "पारिवारिक चित्र",
    description: "परिवार के साथ",
    category: "personal"
  }
];

// Upcoming shows data structure
export interface UpcomingShow {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  ticketLink?: string;
  description: string;
  type: "कवि सम्मेलन" | "हास्य कार्यक्रम" | "टीवी शो" | "निजी कार्यक्रम";
}

export const upcomingShows: UpcomingShow[] = [
  {
    id: "1",
    title: "हास्य कवि सम्मेलन",
    date: "2024-12-15",
    time: "शाम 7:00 बजे",
    venue: "इंदिरा गांधी सभागार",
    city: "मुंबई",
    state: "महाराष्ट्र",
    description: "प्रसिद्ध हास्य कवियों के साथ एक शानदार कार्यक्रम",
    type: "कवि सम्मेलन"
  },
  {
    id: "2", 
    title: "स्टैंड-अप कॉमेडी शो",
    date: "2024-12-22",
    time: "रात 8:00 बजे",
    venue: "कमल थिएटर",
    city: "दिल्ली",
    state: "दिल्ली",
    description: "एक रात हंसी और मनोरंजन के साथ",
    type: "हास्य कार्यक्रम"
  }
];
