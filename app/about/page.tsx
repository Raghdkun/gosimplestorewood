import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Us | GoSimple Store',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Learn about our story and values.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
