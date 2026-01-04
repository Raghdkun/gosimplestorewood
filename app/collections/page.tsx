import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CollectionsHero from '@/components/collections/CollectionsHero';
import CollectionsGrid from '@/components/collections/CollectionsGrid';
import FeaturedCollection from '@/components/collections/FeaturedCollection';

export const metadata = {
  title: 'Collections | GoSimple Store',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our curated collections.',
};

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CollectionsHero />
        <FeaturedCollection />
        <CollectionsGrid />
      </main>
      <Footer />
    </>
  );
}
