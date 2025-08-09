// Upcoming Shows Data for Preheader Flash Strip
export interface FlashShow {
  id: string;
  date: string;
  location: string;
  type: "कवि सम्मेलन" | "हास्य कार्यक्रम" | "स्टैंड-अप शो" | "निजी कार्यक्रम";
  isActive: boolean; // To control which shows appear in flash strip
}

export const flashShows: FlashShow[] = [
  {
    id: "1",
    date: "15 दिसंबर 2024",
    location: "मुंबई, महाराष्ट्र",
    type: "कवि सम्मेलन",
    isActive: true
  },
  {
    id: "2", 
    date: "22 दिसंबर 2024",
    location: "दिल्ली",
    type: "स्टैंड-अप शो",
    isActive: true
  },
  {
    id: "3",
    date: "5 जनवरी 2025",
    location: "पुणे, महाराष्ट्र", 
    type: "हास्य कार्यक्रम",
    isActive: true
  }
];

// Function to get active shows for flash strip
export const getActiveFlashShows = (): FlashShow[] => {
  return flashShows.filter(show => show.isActive);
};

// Function to format show for display in flash strip
export const formatFlashShow = (show: FlashShow): string => {
  return `${show.date} • ${show.location} • ${show.type}`;
};
