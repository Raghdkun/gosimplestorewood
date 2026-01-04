import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShopHero from '@/components/shop/ShopHero';
import ShopContent from '@/components/shop/ShopContent';

export const metadata = {
  title: 'Shop - GoSimple Store',
  description: 'Browse our curated collection of handcrafted furniture, lighting, and decor.',
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <ShopHero />
        <ShopContent />
      </main>
      <Footer />
    </>
  );
}
