import type { Publication } from '@/types';
import { AbstractToggle } from './AbstractToggle';
import { ExternalLink } from 'lucide-react';

function AuthorList({ authors }: { authors: Publication['authors'] }) {
  return (
    <span className="text-sm text-gray-600 dark:text-gray-400">
      {authors.map((a, i) => {
        if (a.last === 'others') {
          return (
            <span key={i}>
              {i > 0 && ', '}et al.
            </span>
          );
        }
        const name = `${a.first} ${a.last}`;
        return (
          <span key={i}>
            {i > 0 && ', '}
            {a.isSelf ? (
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {name}
              </span>
            ) : (
              name
            )}
          </span>
        );
      })}
    </span>
  );
}

function LinkButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-primary hover:text-white hover:border-primary transition-colors"
    >
      {label} <ExternalLink size={10} />
    </a>
  );
}

export function PublicationCard({ pub }: { pub: Publication }) {
  const venue =
    pub.type === 'phdthesis'
      ? `PhD Thesis, ${pub.school || ''}`
      : pub.journal || pub.booktitle || '';

  return (
    <div className="flex gap-4 py-4">
      {pub.thumbnail && (
        <div className="flex-shrink-0 hidden sm:block">
          <img
            src={pub.thumbnail}
            alt=""
            className="w-[140px] h-auto rounded object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-[15px] leading-snug">
          {pub.title}
        </h3>
        <div className="mt-1">
          <AuthorList authors={pub.authors} />
        </div>
        <div className="mt-0.5 text-sm italic text-gray-500 dark:text-gray-400">
          {venue}
          {pub.year && `, ${pub.year}`}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {pub.abstract && <AbstractToggle abstract={pub.abstract} />}
          {pub.html && <LinkButton href={pub.html} label="HTML" />}
          {pub.pdf && <LinkButton href={pub.pdf} label="PDF" />}
          {pub.code && <LinkButton href={pub.code} label="Code" />}
          {pub.poster && <LinkButton href={pub.poster} label="Poster" />}
          {pub.slides && <LinkButton href={pub.slides} label="Slides" />}
        </div>
      </div>
    </div>
  );
}
