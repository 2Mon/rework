import { f as fetchMods } from "../../../../chunks/mods-data.js";
import { error } from "@sveltejs/kit";
async function load({ params }) {
  const mods = await fetchMods();
  const mod = mods.find((m) => m.id === params.slug);
  if (!mod) {
    throw error(404, "Mod not found");
  }
  return {
    mod
  };
}
export {
  load
};
