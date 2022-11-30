import { defineConfig } from '@umijs/max';
import proxy from './src/lib/proxy'
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  model: {},
  request: {},
  title:"klick",
  npmClient: 'pnpm',
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
  proxy: proxy['dev'],
});

