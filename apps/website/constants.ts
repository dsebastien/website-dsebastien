/**
 * Utils
 */
export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = typeof window === 'undefined';
export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_TEST = process.env.NODE_ENV === 'test';

/**
 * Meta
 */
export const BUILD_TIME = new Date().toString();
export const BUILD_TIMESTAMP = Date.now();

/**
 * Ref data
 */
export const BLOG_DESCRIPTION = `A glimpse of my journey. I write about knowledge management, software development, productivity, entrepreneurship, indie hacking, management and leadership.`;

/**
 * Newsletter errors
 */
export const NEWSLETTER_MUST_VALIDATE_EMAIL = 'Please check your inbox to confirm your subscription!';
