import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductReviews from '@/components/product/ProductReviews';
import RelatedProducts from '@/components/product/RelatedProducts';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { artisanWalnutChair } from '@/data/mockData';

// This would normally fetch data based on the slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // In production, fetch product by slug
  const product = artisanWalnutChair;
  
  return {
    title: `${product.name} - GoSimple Store`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // In production, fetch product by slug from API
  const product = artisanWalnutChair;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: product.category, href: `/shop?category=${product.category.toLowerCase()}` },
    { label: product.name, href: '#', current: true },
  ];

  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8 lg:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 mt-8">
          {/* Product Gallery (Left Column) */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images || [product.image]} />
          </div>

          {/* Product Details (Right Column - Sticky) */}
          <div className="lg:col-span-5 relative">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReviews 
          productId={product.id}
          rating={product.rating || 0} 
          reviewCount={product.reviewCount || 0} 
        />

        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} />
      </main>
      <Footer />
    </>
  );
}
