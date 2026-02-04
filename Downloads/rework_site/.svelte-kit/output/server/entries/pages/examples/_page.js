import { f as fetchMods } from "../../../chunks/mods-data.js";
async function load() {
  const mods = await fetchMods();
  return {
    mods
  };
}
export {
  load
};
