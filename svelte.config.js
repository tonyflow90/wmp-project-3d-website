import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const prod = process.env.NODE_ENV === 'production';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',  // path to public directory
      assets: 'build',  // path to public directory
      fallback: null
    }),
    files: {
      serviceWorker: prod ? '/wmp-project-3d-website/service-worker' : 'src/service-worker',
      template: prod ? 'src/app.html' : 'src/app-dev.html'
    },
    paths: {
      base: prod ? '/wmp-project-3d-website' : ''
    },
    target: '#svelte'
  },
  preprocess: [
    preprocess()
  ]
};

export default config;
