import { c as create_ssr_component, e as each, b as escape } from "../../chunks/ssr.js";
const css = {
  code: ".gcode-bg.svelte-1rnsyhw{position:fixed;top:0;left:0;width:100%;height:100%;opacity:0.03;z-index:0;font-size:14px;line-height:1.4;overflow:hidden;pointer-events:none;display:flex;gap:40px}.gcode-column.svelte-1rnsyhw{flex:1;white-space:pre;animation:svelte-1rnsyhw-scrollUp 50s linear infinite}@keyframes svelte-1rnsyhw-scrollUp{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport '../app.css';\\n<\/script>\\n\\n<div class=\\"gcode-bg\\" aria-hidden=\\"true\\">\\n\\t{#each Array(10) as _, col}\\n\\t\\t<div class=\\"gcode-column\\">\\n\\t\\t\\t{#each Array(100) as _, i}\\n\\t\\t\\t\\t<div>G1 X{Math.floor(Math.random() * 200)} Y{Math.floor(Math.random() * 200)} E{(Math.random() * 5).toFixed(2)}</div>\\n\\t\\t\\t{/each}\\n\\t\\t\\t{#each Array(100) as _, i}\\n\\t\\t\\t\\t<div>G1 X{Math.floor(Math.random() * 200)} Y{Math.floor(Math.random() * 200)} E{(Math.random() * 5).toFixed(2)}</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t{/each}\\n</div>\\n\\n<slot />\\n\\n<style>\\n\\t.gcode-bg {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\topacity: 0.03;\\n\\t\\tz-index: 0;\\n\\t\\tfont-size: 14px;\\n\\t\\tline-height: 1.4;\\n\\t\\toverflow: hidden;\\n\\t\\tpointer-events: none;\\n\\t\\tdisplay: flex;\\n\\t\\tgap: 40px;\\n\\t}\\t\\n\\n\\t.gcode-column {\\n\\t\\tflex: 1;\\n\\t\\twhite-space: pre;\\n\\t\\tanimation: scrollUp 50s linear infinite;\\n\\t}\\n\\n\\t@keyframes scrollUp {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translateY(0);\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translateY(-50%);\\n\\t\\t}\\n\\t}\\n</style>"],"names":[],"mappings":"AAoBC,wBAAU,CACT,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,MAAM,CAChB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACN,CAEA,4BAAc,CACb,IAAI,CAAE,CAAC,CACP,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,uBAAQ,CAAC,GAAG,CAAC,MAAM,CAAC,QAChC,CAEA,WAAW,uBAAS,CACnB,EAAG,CACF,SAAS,CAAE,WAAW,CAAC,CACxB,CACA,IAAK,CACJ,SAAS,CAAE,WAAW,IAAI,CAC3B,CACD"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="gcode-bg svelte-1rnsyhw" aria-hidden="true">${each(Array(10), (_, col) => {
    return `<div class="gcode-column svelte-1rnsyhw">${each(Array(100), (_2, i) => {
      return `<div>G1 X${escape(Math.floor(Math.random() * 200))} Y${escape(Math.floor(Math.random() * 200))} E${escape((Math.random() * 5).toFixed(2))}</div>`;
    })} ${each(Array(100), (_2, i) => {
      return `<div>G1 X${escape(Math.floor(Math.random() * 200))} Y${escape(Math.floor(Math.random() * 200))} E${escape((Math.random() * 5).toFixed(2))}</div>`;
    })} </div>`;
  })}</div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
