export interface FrontMatter {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  image: string;
  by?: string;
  /**
   * To be used for highlighting posts
   */
  featured?: boolean;
  /**
   * To be used for display (tags)
   */
  categories: string[];
  /**
   * Used as page meta keywords if provided
   */
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
