export async function GET() {
	const response = await fetch('https://raw.githubusercontent.com/2Mon/rework/main/main/mods.json');
	const data = await response.json();
	
	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}