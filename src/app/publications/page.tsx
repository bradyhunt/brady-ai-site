import type { Metadata } from 'next';
import { PublicationList } from '@/components/PublicationList';
import { getAllPublications } from '@/lib/bibtex';
import { siteConfig } from '@/lib/siteConfig';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Publications',
};

export default function PublicationsPage() {
  const publications = getAllPublications();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Publications
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        For the most recent publications (2022–present), see my{' '}
        <a
          href={`https://scholar.google.com/citations?user=${siteConfig.social.scholar}&sortby=pubdate`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-link dark:text-primary-light font-medium hover:underline inline-flex items-center gap-1"
        >
          Google Scholar profile <ExternalLink size={12} />
        </a>
      </p>
      <PublicationList publications={publications} groupByYear />
    </div>
  );
}
