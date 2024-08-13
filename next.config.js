const process = require('process');

const env = process.env.NODE_ENV;

const SELF_CONTENT_SRC = "'self'";
const JS_CDN = 'cdn.jsdelivr.net';
const UNSAFE_INLINE_SRC = "'unsafe-inline'";
const UNSAFE_EVAL_SCRIPT = "'unsafe-eval'";
const GOOGLE_FONTS_STYLES_SRC = 'fonts.googleapis.com';
const GOOGLE_FONTS_SRC = 'fonts.gstatic.com';
const CLOUDINARY_CDN = 'res.cloudinary.com';
const GRAVATAR_CDN = 'www.gravatar.com';
const SOURCE_CONTENT = '*.gcamposengenharia.com.br';
const W3_CONTENT = 'www.w3.org';
const DATA_SRC = 'data:';

const csp = {
  'object-src': [SELF_CONTENT_SRC, W3_CONTENT],
  'default-src': [SELF_CONTENT_SRC],
  'frame-src': [SELF_CONTENT_SRC],
  'script-src': [SELF_CONTENT_SRC, JS_CDN, SOURCE_CONTENT, DATA_SRC],
  'style-src': [
    SELF_CONTENT_SRC,
    UNSAFE_INLINE_SRC,
    JS_CDN,
    GOOGLE_FONTS_STYLES_SRC,
    DATA_SRC,
  ],
  'style-src-elem': [
    SELF_CONTENT_SRC,
    UNSAFE_INLINE_SRC,
    JS_CDN,
    GOOGLE_FONTS_STYLES_SRC,
    DATA_SRC,
  ],
  'img-src': [SELF_CONTENT_SRC, CLOUDINARY_CDN, GRAVATAR_CDN],
  'frame-ancestors': [SELF_CONTENT_SRC],
  'font-src': [SELF_CONTENT_SRC, GOOGLE_FONTS_SRC, JS_CDN],
  'connect-src': [SELF_CONTENT_SRC, SOURCE_CONTENT],
};

if (env.includes('dev')) {
  csp['script-src'].push(UNSAFE_EVAL_SCRIPT);
  csp['connect-src'].push('localhost:8080');
}

module.exports = {
  async headers() {
    const headers = {
      'Content-Security-Policy': Object.entries(csp)
        .map(([src, values]) => `${src} ${values.join(' ')};`)
        .join(' '),
      'Strict-Transport-Security':
        'max-age=3124138248000; includeSubDomains; preload;',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'same-origin',
    };

    const nextHeaders = Object.entries(headers).map(([key, value]) => {
      return {
        key: key,
        value: value,
      };
    });

    nextHeaders.push({
      key: 'Cache-Control',
      value: 's-maxage=1, stale-while-revalidate=59',
    });

    return [
      {
        source: '/(.*)',
        headers: nextHeaders,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
