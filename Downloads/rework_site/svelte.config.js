import adapter from '@sveltejs/adapter-vercel';

const repoName = 'rework'; 

export default {
  kit: {
    adapter: adapter({
	  runtime: 'nodejs20.x',
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' 
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? `/${repoName}` : ''
    },
    prerender: {
  		entries: ['/', '/how-it-works', '/submitting/journaling', '/submitting/submission-guidelines', '/examples'],
      handleHttpError: 'warn'
    }
  }
};
