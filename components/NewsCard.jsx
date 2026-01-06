import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ news, type = "standard" }) {
  
  if (type === "sidebar") {
    return (
      <Link href={`/news/${news.id}`} className="group block mb-4 border-b border-gray-100 pb-2 last:border-0">
        <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition line-clamp-2">
          {news.title}
        </h3>
        <span className="text-xs text-gray-400 mt-1 block">{news.date}</span>
      </Link>
    );
  }

  return (
    <Link href={`/news/${news.id}`} className="group block h-full">
      <div className="overflow-hidden rounded-md bg-gray-100 mb-3 relative aspect-video">
        <Image
          src={news.image}
          alt={news.title}
          width={800}
          height={450}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
        <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          {news.category}
        </span>
      </div>
      <h2 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-red-600 transition">
        {news.title}
      </h2>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{news.excerpt}</p>
      <span className="text-xs text-gray-400 mt-3 block">{news.date}</span>
    </Link>
  );
}
