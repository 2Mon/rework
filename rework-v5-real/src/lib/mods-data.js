export const GITHUB_MODS_URL = 'https://raw.githubusercontent.com/2Mon/rework/main/main/mods.json?t=' + Date.now();

export const sampleMods = [
	{
		id: 'testmod',
		title: 'test',
		author: 'test',
		printer: 'test',
		description: 'test',
		cost: '$67',
		image: null
	},
		{
		id: 'testmod1',
		title: 'test',
		author: 'test',
		printer: 'test',
		description: 'test',
		cost: '$67',
		image: null
	},
		{
		id: 'testmod2',
		title: 'test',
		author: 'test',
		printer: 'test',
		description: 'test',
		cost: '$67',
		image: null
	},
];

export async function fetchMods() {
	try {
		const response = await fetch(GITHUB_MODS_URL);
		if (!response.ok) {
			console.warn('Failed to fetch mods from GitHub, using sample data');
			return sampleMods;
		}
		const data = await response.json();
		return data.mods || sampleMods;
	} catch (error) {
		console.warn('Error fetching mods:', error);
		return sampleMods;
	}
}
