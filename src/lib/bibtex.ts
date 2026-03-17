import { readFileSync } from 'fs';
import { join } from 'path';
import type { Author, Publication } from '@/types';

function deLatex(str: string): string {
  return str
    .replace(/\{\\'\{?([a-zA-Z])\}?\}/g, '$1')
    .replace(/\\'\{?([a-zA-Z])\}?/g, '$1')
    .replace(/\{\\\^\{?([a-zA-Z])\}?\}/g, '$1')
    .replace(/\\\^\{?([a-zA-Z])\}?/g, '$1')
    .replace(/\{\\~\{?([a-zA-Z])\}?\}/g, '$1')
    .replace(/\\~\{?([a-zA-Z])\}?/g, '$1')
    .replace(/\{\\"\{?([a-zA-Z])\}?\}/g, '$1')
    .replace(/\\"\{?([a-zA-Z])\}?/g, '$1')
    .replace(/\{([^}]*)\}/g, '$1')
    .replace(/\\/g, '');
}

function parseAuthors(authorStr: string): Author[] {
  const parts = authorStr.split(/\s+and\s+/);
  return parts.map((part) => {
    if (part.trim().toLowerCase() === 'others') {
      return { first: '', last: 'others', isSelf: false };
    }
    const cleaned = deLatex(part.trim());
    const commaIdx = cleaned.indexOf(',');
    let first: string, last: string;
    if (commaIdx !== -1) {
      last = cleaned.substring(0, commaIdx).trim();
      first = cleaned.substring(commaIdx + 1).trim();
    } else {
      const words = cleaned.split(/\s+/);
      last = words[words.length - 1];
      first = words.slice(0, -1).join(' ');
    }
    const isSelf = last === 'Hunt' && first.startsWith('Brady');
    return { first, last, isSelf };
  });
}

function extractField(entry: string, field: string): string | undefined {
  const regex = new RegExp(`${field}\\s*=\\s*[{"]([\\s\\S]*?)[}"]`, 'i');
  const match = entry.match(regex);
  if (!match) return undefined;
  return match[1].trim();
}

function extractBraceField(entry: string, field: string): string | undefined {
  const fieldStart = entry.search(new RegExp(`${field}\\s*=\\s*\\{`, 'i'));
  if (fieldStart === -1) return undefined;
  const braceStart = entry.indexOf('{', fieldStart);
  let depth = 0;
  let end = braceStart;
  for (let i = braceStart; i < entry.length; i++) {
    if (entry[i] === '{') depth++;
    if (entry[i] === '}') depth--;
    if (depth === 0) {
      end = i;
      break;
    }
  }
  return entry.substring(braceStart + 1, end).trim();
}

function remapThumbnail(path: string | undefined): string | undefined {
  if (!path) return undefined;
  return path.replace('/assets/pubimg/', '/images/publications/');
}

export function getAllPublications(): Publication[] {
  const bibPath = join(process.cwd(), 'src/content/bibliography/papers.bib');
  const raw = readFileSync(bibPath, 'utf-8');

  // Resolve @string macros
  const strings: Record<string, string> = {};
  const stringRegex = /@string\{(\w+)\s*=\s*\{([^}]+)\}\}/gi;
  let sm;
  while ((sm = stringRegex.exec(raw)) !== null) {
    strings[sm[1]] = sm[2];
  }

  // Strip @string macros before parsing entries
  const cleaned = raw.replace(/@string\{[^}]*\{[^}]*\}\}/gi, '');
  // Ensure trailing newline for last entry
  const rawPadded = cleaned + '\n\n';
  const entryRegex = /@(\w+)\{([^,\n]+),\s*([\s\S]*?)\n\}\s*\n/g;
  const publications: Publication[] = [];
  let match;

  while ((match = entryRegex.exec(rawPadded)) !== null) {
    const type = match[1].toLowerCase();
    const key = match[2].trim();
    const body = match[3];

    const title = deLatex(extractBraceField(body, 'title') || '');
    const authorStr = extractBraceField(body, 'author') || '';
    const authors = parseAuthors(authorStr);

    let publisher = extractBraceField(body, 'publisher') || extractField(body, 'publisher');
    if (publisher && strings[publisher]) {
      publisher = strings[publisher];
    }

    const yearStr = extractField(body, 'year') || '0';
    const selectedStr = extractField(body, 'selected') || '';

    const pub: Publication = {
      key,
      type,
      title,
      authors,
      journal: deLatex(extractBraceField(body, 'journal') || ''),
      booktitle: extractBraceField(body, 'booktitle'),
      year: parseInt(yearStr, 10),
      volume: extractField(body, 'volume'),
      number: extractField(body, 'number'),
      pages: extractField(body, 'pages'),
      publisher: publisher ? deLatex(publisher) : undefined,
      school: extractBraceField(body, 'school'),
      abstract: extractBraceField(body, 'abstract'),
      html: extractField(body, 'html'),
      pdf: extractField(body, 'pdf'),
      code: extractField(body, 'code'),
      poster: extractField(body, 'poster'),
      slides: extractField(body, 'slides'),
      thumbnail: remapThumbnail(extractField(body, 'thumbnail')),
      selected: selectedStr.toLowerCase() === 'true',
    };

    publications.push(pub);
  }

  return publications.sort((a, b) => b.year - a.year);
}

export function getSelectedPublications(): Publication[] {
  return getAllPublications().filter((p) => p.selected);
}

export function getPublicationsByYear(): Map<number, Publication[]> {
  const pubs = getAllPublications();
  const byYear = new Map<number, Publication[]>();
  for (const pub of pubs) {
    const list = byYear.get(pub.year) || [];
    list.push(pub);
    byYear.set(pub.year, list);
  }
  return byYear;
}
