export interface FrontMatter {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  by?: string;
  slug: string;
  wordCount?: number;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}
