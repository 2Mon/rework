

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/how-it-works/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B-hJqW5P.js","_app/immutable/chunks/CmWbxXY2.js","_app/immutable/chunks/wThiG212.js"];
export const stylesheets = ["_app/immutable/assets/5.D7Iqdt9I.css"];
export const fonts = [];
