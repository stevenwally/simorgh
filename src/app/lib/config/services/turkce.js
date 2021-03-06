import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { latinDiacritics } from '@bbc/gel-foundations/scripts';
import {
  F_REITH_SANS_BOLD,
  F_REITH_SANS_BOLD_ITALIC,
  F_REITH_SANS_ITALIC,
  F_REITH_SANS_REGULAR,
  F_REITH_SERIF_MEDIUM,
  F_REITH_SERIF_MEDIUM_ITALIC,
} from '@bbc/psammead-styles/fonts';
import { turkce as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Istanbul';
import withContext from '../../../contexts/utils/withContext';
import 'moment/locale/tr';

export const service = {
  default: {
    lang: `tr`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'Updated',
    atiAnalyticsAppName: 'news-turkce',
    atiAnalyticsProducerId: '92',
    brandName: 'BBC News Türkçe',
    product: 'BBC News',
    serviceLocalizedName: 'Türkçe',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/turkce.png',
    defaultImageAltText: 'BBC News Türkçe',
    dir: `ltr`,
    externalLinkText: ', external',
    imageCaptionOffscreenText: 'Image caption, ',
    videoCaptionOffscreenText: 'Video caption, ',
    audioCaptionOffscreenText: 'Audio caption',
    defaultCaptionOffscreenText: 'Caption, ',
    imageCopyrightOffscreenText: 'Image source, ',
    locale: `tr-TR`,
    datetimeLocale: `tr-tr`,
    service: 'turkce',
    serviceName: 'News Türkçe',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcturkce',
    twitterSite: '@bbcturkce',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: latinDiacritics,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Haberler',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'See all',
      home: 'Haberler',
      currentPage: 'Current page',
      skipLinkText: 'Siteye gir',
      relatedContent: 'Related content',
      error: {
        404: {
          statusCode: '404',
          title: '404 - Sayfa bulunamadı',
          message:
            'Bunun sebebi, internet adresini yanlış yazmanız olabilir. Lütfen adresi ve nasıl yazıldığını kontrol edin.',
          solutions: [
            'Double checking the url',
            'Hitting the refresh button in your browser',
            'Searching for this page using the BBC search bar',
          ],
          callToActionFirst: 'Alternatively, please visit the ',
          callToActionLinkText: 'BBC Türkçe Haberler',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/turkce',
        },
        500: {
          statusCode: '500',
          title: '500 - Hata',
          message: 'Bir hata oluştu. Lütfen sayfayı yeniden yükleyin.',
          solutions: [
            'Hitting the refresh button in your browser',
            'Coming back again later',
          ],
          callToActionFirst: 'Alternatively, please visit the ',
          callToActionLinkText: 'BBC Türkçe Haberler',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/turkce',
        },
      },
      consentBanner: {
        privacy: {
          title: "We've updated our Privacy and Cookies Policy",
          description: {
            uk: {
              first:
                "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'OK',
          reject: "Find out what's changed",
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Let us know you agree to cookies',
          description: {
            uk: {
              first: 'We use ',
              linkText: 'cookies',
              last:
                ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'We and our partners use technologies, such as ',
              linkText: 'cookies',
              last:
                ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Yes, I agree',
          reject: 'No, take me to settings',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'Dinleyin',
        photogallery: 'Fotoğraf',
        video: 'İzleyin',
      },
    },
    brandSVG,
    mostRead: {
      header: 'Most read',
      lastUpdated: 'Last updated: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Why you can trust the BBC',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Read about our approach to external linking.',
      },
      links: [
        {
          href: 'https://www.bbc.com/news/help-41670342',
          text: 'Why you can trust the BBC',
        },
        {
          href: 'https://www.bbc.com/terms',
          text: 'Terms of Use',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'Privacy Policy',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.com/contact/',
          text: 'Contact the BBC',
        },
      ],
      copyrightText:
        'BBC. BBC, diğer internet sayfalarının içeriğinden sorumlu değildir',
    },
    fonts: [
      F_REITH_SANS_BOLD,
      F_REITH_SANS_BOLD_ITALIC,
      F_REITH_SANS_ITALIC,
      F_REITH_SANS_REGULAR,
      F_REITH_SERIF_MEDIUM,
      F_REITH_SERIF_MEDIUM_ITALIC,
    ],
    timezone: 'Asia/Istanbul',
    navigation: [
      {
        title: 'Haberler',
        url: '/turkce',
      },
      {
        title: 'Video',
        url: '/turkce/media/video',
      },
      {
        title: 'Fotoğraf',
        url: '/turkce/media/photogalleries',
      },
      {
        title: 'Dergi',
        url: '/turkce/dergi',
      },
      {
        title: 'Spor',
        url: '/turkce/spor',
      },
      {
        title: 'Ekonomi',
        url: '/turkce/topics/ca170ae3-99c1-48db-9b67-2866f85e7342',
      },
      {
        title: 'Bilim',
        url: '/turkce/topics/0f469e6a-d4a6-46f2-b727-2bd039cb6b53',
      },
      {
        title: 'Teknoloji',
        url: '/turkce/topics/31684f19-84d6-41f6-b033-7ae08098572a',
      },
      {
        title: 'Sağlık',
        url: '/turkce/topics/c4794229-7f87-43ce-ac0a-6cfcd6d3cef2',
      },
    ],
  },
};

export default withContext(service);
