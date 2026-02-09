import { json } from '@sveltejs/kit';
import { writeFileSync, readFileSync, existsSync } from 'fs';

const EMAILS_FILE = 'emails.json';

export async function POST({ request }) {
	const { email, timestamp } = await request.json();
	
	let emails = [];
	if (existsSync(EMAILS_FILE)) {
		emails = JSON.parse(readFileSync(EMAILS_FILE, 'utf-8'));
	}
	
	emails.push({ email, timestamp });
	
	writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
	
	return json({ success: true });
}