const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ro-RO',
  otherLanguages: ['en-US'],
  localeSubpaths: {
    'en-US': 'en',
  },
});

module.exports = NextI18NextInstance;
