// Import the main upcoming shows data
import { upcomingShows, UpcomingShow } from './poemsData';

// Flash Show interface for preheader display
export interface FlashShow {
  id: string;
  date: string;
  location: string;
  type: "कवि सम्मेलन" | "हास्य कार्यक्रम" | "टीवी शो" | "निजी कार्यक्रम";
  isActive: boolean;
}

// Function to convert date format for flash display
const formatDateForFlash = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-IN', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

// Function to convert upcoming shows to flash shows format
const convertToFlashShows = (shows: UpcomingShow[]): FlashShow[] => {
  return shows.map(show => ({
    id: show.id,
    date: formatDateForFlash(show.date),
    location: `${show.city}, ${show.state}`,
    type: show.type,
    isActive: true
  }));
};

// Generate flash shows from the main upcoming shows data
export const flashShows: FlashShow[] = convertToFlashShows(upcomingShows);

// Function to get active shows for flash strip
export const getActiveFlashShows = (): FlashShow[] => {
  return flashShows.filter(show => show.isActive);
};

// Function to format show for display in flash strip
export const formatFlashShow = (show: FlashShow): string => {
  return `${show.date} • ${show.location} • ${show.type}`;
};