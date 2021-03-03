export interface FrontMatter {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  image: string;
  by?: string;
  categories: string[];
  keywords: string[];
  /**
   * Added automatically
   */
  wordCount?: number;
  /**
   * Added automatically
   */
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}
