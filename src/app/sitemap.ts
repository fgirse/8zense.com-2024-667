import {MetadataRoute} from 'next';

import {Locale, getPathname, routing} from '@/src/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry('/'), getEntry('/pathnames')];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      )
    }
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({locale, href});
  // Fix the error by replacing 'host' with the actual host URL
  return 'https://localhost:3000' + pathname;
}