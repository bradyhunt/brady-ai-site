import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import type { NewsItem } from '@/types';

const newsDir = join(process.cwd(), 'src/content/news');

export function getAllNews(): NewsItem[] {
  const files = readdirSync(newsDir).filter((f) => f.endsWith('.md'));
  const items: NewsItem[] = files.map((filename) => {
    const raw = readFileSync(join(newsDir, filename), 'utf-8');
    const { data, content } = matter(raw);
    return {
      slug: filename.replace('.md', ''),
      date: data.date ? new Date(data.date).toISOString() : '',
      content: content.trim(),
    };
  });
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
