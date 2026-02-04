import { sampleMods } from '$lib/mods-data.js';

export async function load({ fetch }) {
	try {
		const response = await fetch('/api/github');
		if (!response.ok) {
			return { mods: sampleMods };
		}
		const data = await response.json();
		return { mods: data.mods || sampleMods };
	} catch (error) {
		console.warn('Error fetching mods:', error);
		return { mods: sampleMods };
	}
}