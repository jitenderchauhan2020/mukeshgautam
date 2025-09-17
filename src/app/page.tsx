import PreHeader from '@/components/ui/PreHeader';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Updates from '@/components/sections/Updates';
import Poems from '@/components/sections/Poems';
import Rachnaye from '@/components/sections/Rachnaye';
import TVShows from '@/components/sections/TVShows';
import Gallery from '@/components/sections/Gallery';
import UpcomingShows from '@/components/sections/UpcomingShows';
import ContactNew from '@/components/sections/ContactNew';
import { personSchema, organizationSchema } from '@/lib/schemas';

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
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
          
          {/* Updates Section */}
          <Updates />
          
          {/* Poetry Section */}
          <Poems />
          
          {/* Rachnaye (Literary Works) Section */}
          <Rachnaye />
          
          {/* TV Shows Section */}
          <TVShows />

          
          
          {/* Gallery Section */}
          <Gallery />
          
          {/* Upcoming Shows Section */}
          <UpcomingShows />
          
          {/* Contact Section */}
          <ContactNew />
        </div>
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
