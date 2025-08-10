// Dr. Mukesh Gautam's Poetry Collection

export interface HindiPoem {
  id: string;
  title: string;
  titleEnglish?: string;
  category: "व्यंग्य" | "राजनीतिक" | "सामाजिक" | "हास्य" | "पर्यावरण" | "प्रेम";
  categoryEnglish: "Satire" | "Political" | "Social" | "Humor" | "Environment" | "Love";
  excerpt: string[];
  fullPoem: string[];
  date: string;
  featured?: boolean;
  image?: string;
  emotion: "satirical" | "humorous" | "critical" | "thoughtful" | "witty" | "romantic";
  author: string;
}

export const hindiPoems: HindiPoem[] = [
  {
    id: "1",
    title: "प्रेम में खोया व्यक्ति",
    titleEnglish: "A Person Lost in Love",
    category: "प्रेम",
    categoryEnglish: "Love",
    excerpt: [
      "किसी के प्रेम में खोए व्यक्ति को",
      "उन्होने डाल दिया जेल में!",
      "परन्तु-",
      "वह वहां भी बात-बेबात हंस रहा था..."
    ],
    fullPoem: [
      "किसी के प्रेम में खोए व्यक्ति को",
      "उन्होने डाल दिया जेल में!",
      "परन्तु-",
      "वह वहां भी",
      "बात-बेबात हंस रहा था,",
      "दिवार पर बना रहा था चित्र,",
      "पेड़ की जड़ों में",
      "डाल रहा था पानी,",
      "बातें कर रहा था चिड़ियों से",
      "दौड़ रहा था तितलियों के पीछे",
      "गुनगुना रहा था गज़ल",
      "वह जानता था",
      "जिंदगी एक उत्सव है",
      "परन्तु-",
      "क्या करें",
      "प्रेम से अनभिज्ञ लोग",
      "उसे समझते है",
      "'पागल' !"
    ],
    date: "2024-01-15",
    featured: true,
    image: "/images/poems/prem-mein-khoya.jpg",
    emotion: "romantic",
    author: "Dr. Mukesh Gautam"
  },
  {
    id: "2",
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
    date: "2024-02-15",
    featured: true,
    image: "/images/poems/fish-tirangi.jpg",
    emotion: "satirical",
    author: "Dr. Mukesh Gautam"

  },
  {
    id: "3",
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
    date: "2024-03-10",
    featured: true,
    image: "/images/poems/secular-neta.jpg",
    emotion: "critical",
    author: "Dr. Mukesh Gautam"
  }
];

// Poem categories for filtering
export const poemCategories = [
  { name: "सभी", nameEn: "All", value: "all" },
  { name: "प्रेम", nameEn: "Love", value: "प्रेम" },
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
    src: "/images/Gallery/IMG-20250809-WA0008.jpg",
    alt: "Dr. Mukesh Gautam performing on stage",
    title: "मंच प्रस्तुति",
    description: "हास्य कवि सम्मेलन में प्रस्तुति",
    category: "stage-shows",
    // orientation: "landscape"
  },
  {
    id: "2",
    src: "/images/Gallery/IMG-20250809-WA0010.jpg",
    alt: "TV show appearance",
    title: "टीवी कार्यक्रम",
    description: "प्रसिद्ध हास्य शो में भागीदारी",
    category: "tv-shows",
    // orientation: "landscape"
  },
  {
    id: "3",
    src: "/images/Gallery/IMG-20250809-WA0015.jpg",
    alt: "Award ceremony",
    title: "पुरस्कार समारोह",
    description: "राष्ट्रीय मेदिनी पुरस्कार प्राप्त करते हुए",
    category: "awards",
    // orientation: "landscape"
  },
  {
    id: "4",
    src: "/images/Gallery/IMG-20250809-WA0020.jpg",
    alt: "Tree plantation drive",
    title: "वृक्षारोपण",
    description: "पर्यावरण सेवा - वृक्षारोपण कार्यक्रम",
    category: "events",
    // orientation: "portrait"
  },
  {
    id: "5",
    src: "/images/Gallery/IMG-20250809-WA0025.jpg",
    alt: "Book launch event",
    title: "पुस्तक विमोचन",
    description: "कविता संग्रह का विमोचन समारोह",
    category: "events",
    // orientation: "landscape"
  },
  {
    id: "6",
    src: "/images/Gallery/IMG-20250809-WA0030.jpg",
    alt: "Family photograph",
    title: "पारिवारिक चित्र",
    description: "परिवार के साथ",
    category: "personal",
    // orientation: "portrait"
  },
  {
    id: "7",
    src: "/images/Gallery/IMG-20250809-WA0035.jpg",
    alt: "Stage performance",
    title: "मंचीय कलाकारी",
    description: "हास्य व्यंग्य प्रस्तुति",
    category: "stage-shows",
    // orientation: "landscape"
  },
  {
    id: "8",
    src: "/images/Gallery/IMG-20250809-WA0040.jpg",
    alt: "Literary event",
    title: "साहित्यिक गोष्ठी",
    description: "कविता पाठ कार्यक्रम",
    category: "events",
    // orientation: "square"
  },
  {
    id: "9",
    src: "/images/Gallery/IMG-20250809-WA0045.jpg",
    alt: "Media interview",
    title: "मीडिया साक्षात्कार",
    description: "प्रेस इंटरव्यू",
    category: "tv-shows",
    // orientation: "portrait"
  },
  {
    id: "10",
    src: "/images/Gallery/IMG-20250809-WA0050.jpg",
    alt: "Cultural program",
    title: "सांस्कृतिक कार्यक्रम",
    description: "त्योहारी समारोह में सहभागिता",
    category: "events",
    // orientation: "landscape"
  },
  {
    id: "11",
    src: "/images/Gallery/IMG-20250809-WA0055.jpg",
    alt: "Poetry recitation",
    title: "काव्य पाठ",
    description: "कविता सुनाते हुए",
    category: "stage-shows",
    // orientation: "portrait"
  },
  {
    id: "12",
    src: "/images/Gallery/IMG-20250809-WA0060.jpg",
    alt: "Award ceremony",
    title: "सम्मान समारोह",
    description: "साहित्य सम्मान प्राप्त करते हुए",
    category: "awards",
    // orientation: "square"
  },
  {
    id: "13",
    src: "/images/Gallery/IMG-20250809-WA0065.jpg",
    alt: "Stage show",
    title: "मंच कार्यक्रम",
    description: "हास्य कवि सम्मेलन",
    category: "stage-shows",
    // orientation: "landscape"
  },
  {
    id: "14",
    src: "/images/Gallery/IMG-20250809-WA0070.jpg",
    alt: "Event participation",
    title: "कार्यक्रम में भागीदारी",
    description: "सामुदायिक कार्यक्रम",
    category: "events",
    // orientation: "portrait"
  },
  {
    id: "15",
    src: "/images/Gallery/IMG-20250809-WA0075.jpg",
    alt: "Literary gathering",
    title: "साहित्यिक मेल-जोल",
    description: "कवि मित्रों के साथ",
    category: "events",
    // orientation: "landscape"
  },
  {
    id: "16",
    src: "/images/Gallery/IMG-20250809-WA0080.jpg",
    alt: "Performance",
    title: "कलात्मक प्रस्तुति",
    description: "मंच पर प्रदर्शन",
    category: "stage-shows",
    // orientation: "square"
  },
  {
    id: "17",
    src: "/images/Gallery/IMG-20250809-WA0085.jpg",
    alt: "Social event",
    title: "सामाजिक कार्यक्रम",
    description: "समुदायिक सभा में",
    category: "events",
    // orientation: "portrait"
  },
  {
    id: "18",
    src: "/images/Gallery/IMG-20250809-WA0090.jpg",
    alt: "Media appearance",
    title: "मीडिया में उपस्थिति",
    description: "टेलीविजन साक्षात्कार",
    category: "tv-shows",
    // orientation: "landscape"
  },
  {
    id: "19",
    src: "/images/Gallery/IMG-20250809-WA0095.jpg",
    alt: "Achievement ceremony",
    title: "उपलब्धि समारोह",
    description: "विशेष सम्मान प्राप्त करते हुए",
    category: "awards",
    // orientation: "portrait"
  },
  {
    id: "20",
    src: "/images/Gallery/IMG-20250809-WA0100.jpg",
    alt: "Personal moment",
    title: "व्यक्तिगत क्षण",
    description: "निजी पलों की तस्वीर",
    category: "personal",
    // orientation: "square"
  },
  {
    id: "21",
    src: "/images/Gallery/IMG-20250809-WA0105.jpg",
    alt: "Stage performance",
    title: "मंच प्रदर्शन",
    description: "कलाकारों के साथ मंच पर",
    category: "stage-shows"
  },
  {
    id: "22",
    src: "/images/Gallery/IMG-20250809-WA0110.jpg",
    alt: "Literary meet",
    title: "साहित्यिक मिलन",
    description: "लेखकों के साथ चर्चा",
    category: "events"
  },
  {
    id: "23",
    src: "/images/Gallery/IMG-20250809-WA0115.jpg",
    alt: "TV interview",
    title: "टीवी साक्षात्कार",
    description: "न्यूज़ चैनल पर बातचीत",
    category: "tv-shows"
  },
  {
    id: "24",
    src: "/images/Gallery/IMG-20250809-WA0120.jpg",
    alt: "Award function",
    title: "पुरस्कार कार्यक्रम",
    description: "सम्मान प्राप्त करते हुए",
    category: "awards"
  },
  {
    id: "25",
    src: "/images/Gallery/IMG-20250809-WA0125.jpg",
    alt: "Poetry session",
    title: "कविता सत्र",
    description: "काव्य गोष्ठी में भाग लेते हुए",
    category: "events"
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
  description: string;
  type: "कवि सम्मेलन" | "हास्य कार्यक्रम" | "टीवी शो" | "निजी कार्यक्रम";
}

export const upcomingShows: UpcomingShow[] = [
  {
    id: "1",
    title: "Grand Poetry Convention 2025",
    date: "2025-09-15",
    time: "7:00 PM",
    venue: "Jawaharlal Nehru Auditorium",
    city: "Lucknow",
    state: "Uttar Pradesh",
    description: "उत्तर प्रदेश के प्रसिद्ध हास्य कवियों के साथ एक भव्य साहित्यिक संध्या। डॉ. मुकेश गौतम के साथ अन्य प्रतिष्ठित कलाकारों की अनूठी प्रस्तुति।",
    type: "कवि सम्मेलन"
  },
  {
    id: "2", 
    title: "Comedy Evening - Delhi",
    date: "2025-09-25",
    time: "8:00 PM",
    venue: "Kamal Theatre",
    city: "New Delhi",
    state: "Delhi",
    description: "राजधानी दिल्ली में एक यादगार हास्य कार्यक्रम। व्यंग्य और हास्य से भरपूर शाम जो आपको हंसने पर मजबूर कर देगी।",
    type: "हास्य कार्यक्रम"
  },
  {
    id: "3",
    title: "Corporate Event - Mumbai",
    date: "2025-10-08",
    time: "6:30 PM",
    venue: "Hotel Taj Presidency",
    city: "Mumbai",
    state: "Maharashtra",
    description: "बिजनेस समुदाय के लिए विशेष हास्य कार्यक्रम। कॉर्पोरेट जगत की समसामयिक घटनाओं पर आधारित मनोरंजक प्रस्तुति।",
    type: "निजी कार्यक्रम"
  },
  {
    id: "4",
    title: "Diwali Special Poetry Convention",
    date: "2025-10-20",
    time: "7:30 PM",
    venue: "Shaheed Smarak Bhawan",
    city: "Bhopal",
    state: "Madhya Pradesh",
    description: "दीपावली के पावन अवसर पर आयोजित विशेष काव्य संध्या। पारंपरिक त्योहारी माहौल में हास्य और व्यंग्य की अनूठी प्रस्तुति।",
    type: "कवि सम्मेलन"
  }
];
