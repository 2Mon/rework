

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ClsldgJt.js","_app/immutable/chunks/B7VdhWLQ.js","_app/immutable/chunks/B8t-AeH4.js"];
export const stylesheets = ["_app/immutable/assets/0.BHxh_Hmm.css"];
export const fonts = [];
