import path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/scss')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                    removeTitle: false,
                    cleanupIds: {
                      minify: false
                    },
                    // prefixIds: {
                    //   delim: '____',
                    //   prefixIds: true,
                    //   prefixClassNames: false,
                    // },
                  },
                },
              },
            ],
          },
        }
      },
    })

    return config
  },
};

export default nextConfig;
