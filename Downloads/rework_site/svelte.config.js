import adapter from '@sveltejs/adapter-static';

const repoName = 'rework';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? `/${repoName}` : ''
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};
