import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { getNews } from '@/lib/data';
import Image from 'next/image';

export default async function Home() {
  const news = await getNews();
  const featured = news.find(n => n.isFeatured) || news[0];
  const others = news.filter(n => n.id !== featured.id);
  const trending = news.slice(0, 5); // Just taking first 5 as mock trending

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Top Section: Hero + Trending Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Featured Story (Left - 8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
              <Image src={featured.image} alt={featured.title} width={800} height={450} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-red-600 transition">
                {featured.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{featured.excerpt}</p>
              <div className="flex gap-2 text-sm text-gray-400">
                <span className="text-red-600 font-semibold">{featured.category}</span>
                <span>•</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>

          {/* Sidebar / Trending (Right - 4 cols) */}
          <div className="lg:col-span-4 pl-0 lg:pl-6 border-l border-gray-100">
            <h2 className="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4 inline-block">
              Trending
            </h2>
            <div className="flex flex-col gap-2">
              {trending.map(item => (
                <NewsCard key={item.id} news={item} type="sidebar" />
              ))}
            </div>
            
            {/* Advertisement Placeholder */}
            <div className="mt-8 h-64 bg-gray-100 flex items-center justify-center text-gray-400 text-sm rounded">
              Advertisement Area
            </div>
          </div>
        </div>

        {/* Category Section / Grid */}
        <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
