import * as universal from '../entries/pages/examples/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/examples/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/examples/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.B-QJnj16.js","_app/immutable/chunks/C5tJsr1t.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/B7VdhWLQ.js","_app/immutable/chunks/B8t-AeH4.js"];
export const stylesheets = ["_app/immutable/assets/4.srAILv5m.css"];
export const fonts = [];
