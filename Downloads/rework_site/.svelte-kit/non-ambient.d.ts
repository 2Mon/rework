
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/github" | "/api/signup" | "/examples" | "/examples/[slug]" | "/github-test" | "/github-test/[slug]" | "/how-it-works" | "/sourcing" | "/submitting" | "/submitting/journaling" | "/submitting/submission-guidelines";
		RouteParams(): {
			"/examples/[slug]": { slug: string };
			"/github-test/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/api": Record<string, never>;
			"/api/github": Record<string, never>;
			"/api/signup": Record<string, never>;
			"/examples": { slug?: string };
			"/examples/[slug]": { slug: string };
			"/github-test": { slug?: string };
			"/github-test/[slug]": { slug: string };
			"/how-it-works": Record<string, never>;
			"/sourcing": Record<string, never>;
			"/submitting": Record<string, never>;
			"/submitting/journaling": Record<string, never>;
			"/submitting/submission-guidelines": Record<string, never>
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/github" | "/api/github/" | "/api/signup" | "/api/signup/" | "/examples" | "/examples/" | `/examples/${string}` & {} | `/examples/${string}/` & {} | "/github-test" | "/github-test/" | `/github-test/${string}` & {} | `/github-test/${string}/` & {} | "/how-it-works" | "/how-it-works/" | "/sourcing" | "/sourcing/" | "/submitting" | "/submitting/" | "/submitting/journaling" | "/submitting/journaling/" | "/submitting/submission-guidelines" | "/submitting/submission-guidelines/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}