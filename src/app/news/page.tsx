import type { Metadata } from 'next';
import { NewsSection } from '@/components/NewsSection';
import { getAllNews } from '@/lib/news';

export const metadata: Metadata = {
  title: 'News',
};

export default function NewsPage() {
  const news = getAllNews();

  return (
    <div>
      <NewsSection items={news} />
    </div>
  );
}
