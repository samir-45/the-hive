import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { getNewsById, getNews, getNewsByCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

// Use generateStaticParams for SSG optimization
export async function generateStaticParams() {
    const news = await getNews();
    return news.map((item) => ({
        id: item.id.toString(),
    }));
}

export default async function NewsDetail({ params }) {

    const { id } = await params;
    const article = await getNewsById(id);

    if (!article) return <div className="p-10">News not found</div>;

    // 1. Fetch related news
    const relatedNews = await getNewsByCategory(article.category);
    const filteredRelated = relatedNews.filter(n => n.id !== article.id).slice(0, 3);

    return (
        <>
            <Header />
            <article className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-6 flex gap-2">
                    <Link href="/" className="hover:text-red-600">Home</Link> /
                    <span className="text-red-600">{article.category}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                    {article.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
                    <span className="font-semibold text-gray-900">By {article.author || "Editorial Desk"}</span>
                    <span>•</span>
                    <span>Published: {article.date}</span>
                </div>

                <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
                    <Image src={article.image} alt={article.title} width={800} height={450} className="w-full h-full object-cover" />
                </div>

                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                    <p className="text-xl font-medium text-gray-600 mb-6">{article.excerpt}</p>
                    <p>{article.content}</p>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </article>

            {/* NEW SECTION: Related News */}
            <div className="container mx-auto px-4 py-12 border-t border-gray-100">
                <h3 className="text-2xl font-bold mb-6">More in {article.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredRelated.map(news => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </div>
            </div>

        </>
    );
}
