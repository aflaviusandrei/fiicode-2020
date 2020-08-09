const path = require('path');
const withOptimizedImages = require('next-optimized-images');

let config = {
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['templates'] = path.join(__dirname, 'templates');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['assets'] = path.join(__dirname, 'public/assets');
    config.resolve.alias['config'] = path.join(__dirname, 'config');
    config.resolve.alias['translations'] = path.join(__dirname, 'i18n.js');
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            replaceAttrValues: { '#2f3490': '{props.color}' },
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.md$/i,
      use: 'raw-loader',
    });
    return config;
  },
};

config = withOptimizedImages({ handleImages: ['png'], ...config });

module.exports = config;
