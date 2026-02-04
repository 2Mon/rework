import * as universal from '../entries/pages/examples/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/examples/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/examples/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.B7tNHxwa.js","_app/immutable/chunks/dl9zW9Nn.js","_app/immutable/chunks/CmWbxXY2.js","_app/immutable/chunks/wThiG212.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.DgiLJQAK.css"];
export const fonts = [];
