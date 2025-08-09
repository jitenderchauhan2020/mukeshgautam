import PreHeader from '@/components/ui/PreHeader';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Poems from '@/components/sections/Poems';
import TVShows from '@/components/sections/TVShows';
import Gallery from '@/components/sections/Gallery';
import UpcomingShows from '@/components/sections/UpcomingShows';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Flash Strip for Upcoming Shows */}
      <PreHeader />
      
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Poetry Section */}
        <Poems />
        
        {/* TV Shows Section */}
        <TVShows />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Upcoming Shows Section */}
        <UpcomingShows />
        
        {/* Contact Section */}
        <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
