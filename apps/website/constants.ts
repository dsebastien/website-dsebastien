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
export const BLOG_DESCRIPTION = `I write about knowledge management, software development, productivity, entrepreneurship, bootstrapping, management, and leadership.`;

/**
 * Newsletter errors
 */
export const NEWSLETTER_MUST_VALIDATE_EMAIL = 'Please check your inbox to confirm your subscription!';

/**
 * Person microdata
 * Reference: https://schema.org/Person
 */
export const BLOG_AUTHOR = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Sébastien Dubois",
  familyName: "Dubois",
  givenName: "Sébastien",
  image: "https://dsebastien.net/static/images/sebastien.png",
  url: "https://twitter.com/dSebastien",
  sameAs: [
    "https://www.linkedin.com/in/sebastiend/",
    "https://github.com/dsebastien",
    "https://dsebastien.medium.com/",
    "https://dev.to/dsebastien",
    "https://www.youtube.com/channel/UCz0x-VJhvKwV-PK3E_i5G1w",
    "https://www.twitch.tv/dsebastien",
    "https://stackoverflow.com/users/226630/dsebastien",
    "https://www.facebook.com/trankill",
    "https://dsebastien.hashnode.dev/",
    "https://updates.dsebastien.net/",
    "https://www.reddit.com/user/lechtitseb/"
  ],
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "DeveloPassion",
    url: "https://developassion.be"
  }
};
