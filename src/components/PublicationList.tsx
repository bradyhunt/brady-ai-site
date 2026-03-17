import type { Publication } from '@/types';
import { PublicationCard } from './PublicationCard';

export function PublicationList({
  publications,
  groupByYear = false,
  title,
}: {
  publications: Publication[];
  groupByYear?: boolean;
  title?: string;
}) {
  if (!groupByYear) {
    return (
      <section>
        {title && (
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {title}
          </h2>
        )}
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {publications.map((pub) => (
            <PublicationCard key={pub.key} pub={pub} />
          ))}
        </div>
      </section>
    );
  }

  const byYear = new Map<number, Publication[]>();
  for (const pub of publications) {
    const list = byYear.get(pub.year) || [];
    list.push(pub);
    byYear.set(pub.year, list);
  }
  const years = Array.from(byYear.keys()).sort((a, b) => b - a);

  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {title}
        </h2>
      )}
      {years.map((year) => (
        <div key={year} className="mb-8">
          <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            {year}
          </h3>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {byYear.get(year)!.map((pub) => (
              <PublicationCard key={pub.key} pub={pub} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
