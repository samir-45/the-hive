import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { getNewsByCategory } from '@/lib/data';
import Link from 'next/link';

// Optional: Generate static params for known categories (SEO & Performance)
export async function generateStaticParams() {
  const categories = ["national", "international", "sports", "technology", "entertainment"];
  return categories.map((categoryName) => ({
    categoryName: categoryName,
  }));
}

export default async function CategoryPage({ params }) {

  const { categoryName } = await params;
  
  // Fetch data
  const newsItems = await getNewsByCategory(categoryName);
  
  // Format the category title
  const displayTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb / Section Header */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <span className="text-red-600 font-semibold">{displayTitle}</span>
        </div>

        <div className="border-b-4 border-red-600 mb-8">
          <h1 className="text-3xl font-bold py-2 inline-block">
            {displayTitle} News
          </h1>
        </div>

        {/* Check if news exists */}
        {newsItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-gray-50 rounded-lg">
            <h2 className="text-xl text-gray-600">No news found in this category.</h2>
            <p className="text-gray-400 mt-2">Try checking back later or browse other categories.</p>
          </div>
        )}
      </div>
    </main>
  );
}
