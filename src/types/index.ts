export interface Author {
  first: string;
  last: string;
  isSelf: boolean;
}

export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: Author[];
  journal?: string;
  booktitle?: string;
  year: number;
  volume?: string;
  number?: string;
  pages?: string;
  publisher?: string;
  school?: string;
  abstract?: string;
  html?: string;
  pdf?: string;
  code?: string;
  poster?: string;
  slides?: string;
  thumbnail?: string;
  selected: boolean;
}

export interface NewsItem {
  slug: string;
  date: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  img?: string;
  importance: number;
  category: string;
  redirect?: string;
  content: string;
}
