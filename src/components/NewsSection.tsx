import type { NewsItem } from '@/types';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function NewsSection({ items }: { items: NewsItem[] }) {
  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        News
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.slug}
            className="flex gap-4 items-baseline"
          >
            <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap flex-shrink-0">
              {formatDate(item.date)}
            </span>
            <span
              className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed [&_a]:text-primary-link dark:[&_a]:text-primary-light [&_a]:font-medium [&_a]:hover:underline"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
