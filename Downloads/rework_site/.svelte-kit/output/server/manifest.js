export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "rework/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.C8_ES4Iy.js",app:"_app/immutable/entry/app.CSlSPi49.js",imports:["_app/immutable/entry/start.C8_ES4Iy.js","_app/immutable/chunks/pgQxTEPd.js","_app/immutable/chunks/CmWbxXY2.js","_app/immutable/entry/app.CSlSPi49.js","_app/immutable/chunks/CmWbxXY2.js","_app/immutable/chunks/wThiG212.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/github",
				pattern: /^\/api\/github\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/github/_server.js'))
			},
			{
				id: "/api/signup",
				pattern: /^\/api\/signup\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/signup/_server.js'))
			},
			{
				id: "/examples",
				pattern: /^\/examples\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/examples/[slug]",
				pattern: /^\/examples\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/how-it-works",
				pattern: /^\/how-it-works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/submitting/journaling",
				pattern: /^\/submitting\/journaling\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/submitting/submission-guidelines",
				pattern: /^\/submitting\/submission-guidelines\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
