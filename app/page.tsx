import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import BestSellersSection from '@/components/home/BestSellersSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <BestSellersSection />
        <CategoriesSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
