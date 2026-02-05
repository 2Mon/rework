import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x'
    }),
    prerender: {
      entries: ['/', '/how-it-works', '/submitting/journaling', '/submitting/submission-guidelines', '/examples'],
      handleHttpError: 'warn'
    }
  }
};
