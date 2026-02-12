<script>
	import { faqs } from '$lib/faq-data.js';

	const examples = {
		yes: [
			{
				title: 'Custom Toolhead',
				desc: 'Design a custom toolhead for your printer for a new hotend, extruder, or fan combo',
				image: 'https://cdn.hackclub.com/019c3430-8fea-797a-81c3-f19bf5697c49/image.png'
			},
			{
				title: 'Linear Rail Upgrade',
				desc: 'Replace V-Wheels with linear rails for extra rigidity and precision',
				image:
					'https://cdn.hackclub.com/019c3431-823d-704e-9381-72d970f71092/screenshot_2026-02-06_at_1.22.54___pm.png'
			},
			{
				title: 'Filament Sensor',
				desc: 'Add a filament runout sensor to your printer to avoid failed prints',
				image: 'https://cdn.hackclub.com/019c3433-37b6-7fa2-9e6d-4194b472b820/image.png'
			},
			{
				title: 'Multi Material Upgrade',
				desc: 'Design a mod to add multi-material printing capabilities to your printer',
				image: 'https://cdn.hackclub.com/019c3434-4cec-7605-b07a-70ec5c37df4a/image.png'
			}
		],
		no: [
			{
				title: 'Installing Klipper',
				desc: "Software-only changes don't count (but Klipper + hardware does!)",
				image: 'https://cdn.hackclub.com/019c3434-fc43-73d0-a97e-895a068dfb5f/image.png'
			},
			{
				title: 'Tuning Slicer Settings',
				desc: 'Changing temps, speeds, or flow in your slicer does not qualify as a mod',
				image: 'https://cdn.hackclub.com/019c3437-1e08-7d4b-9917-86b944d9aeb8/image.png'
			},
			{
				title: 'Pre-made Kits',
				desc: 'Your mods must be designed and built by you, not a pre-made upgrade kit',
				image: 'https://cdn.hackclub.com/019c3439-9f80-7ab3-87a8-e38dc79bf646/image.png'
			},
			{
				title: 'High Voltage Upgrades (120V+)',
				desc: 'Please avoid high voltage modifications for safety reasons, please contact us if unsure!',
				image: 'https://cdn.hackclub.com/019c343a-75af-7671-a673-8b43a4c3f082/image.png'
			}
		]
	};

	let email = '';
	let submitMessage = '';

	async function handleEmailSubmit() {
		try {
			const response = await fetch('/api/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, timestamp: new Date().toISOString() })
			});

			if (response.ok) {
				submitMessage = '✓ Email Submitted! Check back soon for instructions!';
				email = '';
			} else {
				submitMessage = '✗ Something went wrong. Try again!';
			}
		} catch (error) {
			submitMessage = '✗ Error submitting. Try again!';
		}
	}
</script>

<svelte:head>
	<title>Hack Club Rework - Mod Your 3D Printer</title>
</svelte:head>
<div class="container">
	<header>
		<div class="hero-content">
			<div class="logo">REWORK</div>
			<div class="tagline">DESIGN A MOD FOR YOUR 3D PRINTER.</div>
			<div class="tagline">GET A GRANT TO REWORK IT.</div>

			<div class="hero-stats">
				<div class="stat">
					<div class="stat-number">$75</div>
					<div class="stat-label">grant per mod</div>
				</div>
				<div class="stat">
					<div class="stat-number">1kg</div>
					<div class="stat-label">hack club filament</div>
				</div>
			</div>
		</div>
		<div class="example_media">
			<img src="/examplemod.png" alt="Example mod" class="example_image" aria-hidden="true" />
			<p class="example_image_caption">This used to be a Creality Ender 3! ⤴</p>
		</div>
	</header>
	<div class="email-signup">
		<p class="signup-text">Join the Hack Club Slack to get started!</p>
		<form on:submit|preventDefault={handleEmailSubmit}>
			<input type="email" placeholder="Enter your email" bind:value={email} required />
			<button type="submit">Join Rework</button>
		</form>
		{#if submitMessage}
			<p class="submit-message">{submitMessage}</p>
		{/if}
	</div>
	<section class="intro">
		<h2>WHAT IS THIS?</h2>
		<p>
			Hack Club Rework gives you <strong>$75 + exclusive free filament</strong> to physically modify your
			3D printer.
		</p>
		<p>
			Got an old Ender 3? Make it print faster. Got a Bambu? Hack it and add custom features. Have a
			unique idea? Make it happen. <strong
				>Rework is made for all hardware based 3d printer mods</strong
			>
		</p>
		<p>
			Design submissions for Rework end on March 6th, 2026. <strong
				>Get started early and post your progress in the Hack Club Slack!</strong
			>
		</p>
	</section>

	<section class="examples-section">
		<h2>WHAT COUNTS AS A MOD?</h2>
		<p class="section-intro">
			Your project needs to involve <strong>actual hardware modifications</strong> designed by you.
		</p>

		<div class="examples-grid">
			<div class="examples-column">
				<h3 class="examples-header yes">✓ YES — THESE COUNT</h3>
				{#each examples.yes as example}
					<div class="example-card yes">
						<div class="example-image">
							<img src={example.image} alt={example.title} />
						</div>
						<div class="example-content">
							<div class="example-title">{example.title}</div>
							<div class="example-desc">{example.desc}</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="examples-column">
				<h3 class="examples-header no">✗ NO — THESE DON'T</h3>
				{#each examples.no as example}
					<div class="example-card no">
						<div class="example-image">
							<img src={example.image} alt={example.title} />
						</div>
						<div class="example-content">
							<div class="example-title">{example.title}</div>
							<div class="example-desc">{example.desc}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="faq-section">
		<h2>FREQUENTLY ASKED QUESTIONS</h2>
		<div class="faq-list">
			{#each faqs as faq}
				<div class="faq-item">
					<div class="faq-gcode">
						<span class="gcode">{faq.gcode}</span>
						<span class="command">// {faq.command}</span>
					</div>
					<div class="faq-question">{faq.question}</div>
					<div class="faq-answer">
						{#each faq.answer as line}
							<p>{line}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="cta-section">
		<a href="https://hackclub.slack.com" class="cta-button">HACK CLUB SLACK</a>
		<a href="/how-it-works" class="cta-button">HOW TO REWORK</a>
		<p class="cta-subtext">Got an old printer? Time to rework it.</p>
		<div style="margin-top: 30px;">
			<a
				href="/examples"
				style="color: var(--text-secondary); border-bottom: 1px solid var(--border-color); padding-bottom: 2px;"
			>
				Check out featured mods from the community →
			</a>
		</div>
	</section>

	<footer>
		<p>A HACK CLUB PROGRAM</p>
		<p class="footer-sub">Questions? Join the Hack Club Slack.</p>
	</footer>
</div>

<style>
	.container {
		position: relative;
		z-index: 1;
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;

		text-align: left;
		padding: 90px 20px;
		border-bottom: 2px solid var(--border-color);
		margin-bottom: 60px;
	}

	.logo {
		font-size: 4rem;
		font-weight: bold;
		margin-bottom: 10px;
		color: var(--accent-primary);
		text-shadow: 0 0 30px var(--accent-glow);
		letter-spacing: 8px;
	}

	.tagline {
		font-size: 1.5rem;
		color: var(--text-secondary);
		margin-bottom: 20px;
		letter-spacing: 2px;
	}

	.hero-stats {
		display: flex;
		justify-content: left;
		gap: 60px;
		flex-wrap: wrap;
		margin-top: 40px;
	}

	.stat {
		text-align: left;
	}

	.stat-number {
		font-size: 3rem;
		color: var(--accent-primary);
		text-shadow: 0 0 20px var(--accent-glow);
		font-weight: bold;
	}

	.stat-label {
		font-size: 0.9rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	section {
		margin: 80px 0;
	}

	h2 {
		font-size: 2.5rem;
		margin-bottom: 30px;
		color: var(--accent-primary);
		letter-spacing: 2px;
	}

	.intro p {
		font-size: 1.2rem;
		line-height: 1.8;
		color: var(--text-secondary);
		margin-bottom: 20px;
	}

	.intro strong {
		color: var(--text-primary);
	}

	.section-intro {
		font-size: 1.2rem;
		color: var(--text-secondary);
		margin-bottom: 40px;
	}

	.example_image {
		margin-top: 60px;
		position: static;
		width: 100%;
		max-width: 600px;
		height: auto;
		transform: none;
		z-index: auto;
		border: 6px solid var(--border-accent);
		filter: brightness(1);
		border-radius: 24px;
		box-shadow: 0 0 40px var(--accent-glow);
	}

	.example_image:hover {
		transform: scale(1.01);
		box-shadow: 0 0 60px var(--accent-glow);
		filter: brightness(1.1);
		transition:
			transform 0.3s ease-in,
			box-shadow 0.3s ease-in-out,
			filter 0.3s ease-in-out;
	}

	.example_media {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.example_image_caption {
		margin-top: 10px;
		transform: none;
		position: static;
		color: var(--accent-primary);
	}

	.hero_content {
		display: flex;
	}
	.examples-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 40px;
	}

	.examples-column {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.examples-header {
		font-size: 1.3rem;
		padding: 15px;
		text-align: center;
		border: 2px solid;
		margin-bottom: 10px;
	}

	.examples-header.yes {
		border-color: var(--success);
		color: var(--success);
		background: rgba(74, 222, 128, 0.05);
	}

	.examples-header.no {
		border-color: var(--error);
		color: var(--error);
		background: rgba(239, 68, 68, 0.05);
	}

	.example-card {
		display: flex;
		gap: 15px;
		padding: 20px;
		border: 1px solid var(--border-color);
		background: var(--bg-secondary);
		transition: all 0.3s;
	}

	.example-card:hover {
		transform: translateY(-3px);
		border-color: var(--border-accent);
	}

	.example-card.yes {
		border-left: 4px solid var(--success);
	}

	.example-card.no {
		border-left: 4px solid var(--error);
		opacity: 0.7;
	}

	.example-title {
		font-size: 1.1rem;
		margin-bottom: 10px;
		color: var(--text-primary);
		font-weight: bold;
	}

	.example-desc {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.5;
	}
	.example-image {
		width: 100px;
		height: 100px;
		flex-shrink: 0;
		overflow: hidden;
		border-radius: 4px;
	}

	.example-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s;
	}

	.example-content {
		flex: 1;
	}

	.example-card:hover .example-image img {
		transform: scale(1.05);
	}
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.faq-item {
		padding: 30px;
		border: 1px solid var(--border-color);
		background: var(--bg-secondary);
		transition: all 0.3s;
	}

	.faq-item:hover {
		border-color: var(--border-accent);
		box-shadow: 0 0 20px rgba(255, 107, 53, 0.1);
	}

	.faq-gcode {
		font-size: 0.9rem;
		margin-bottom: 15px;
		opacity: 0.6;
	}

	.gcode {
		color: var(--accent-primary);
		margin-right: 10px;
	}

	.command {
		color: var(--text-muted);
	}

	.faq-question {
		font-size: 1.4rem;
		margin-bottom: 15px;
		color: var(--text-primary);
		font-weight: bold;
	}

	.faq-answer {
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.faq-answer p {
		margin-bottom: 8px;
	}

	.cta-section {
		text-align: center;
		padding: 80px 20px;
		margin: 100px 0;
	}

	.cta-button {
		display: inline-block;
		font-size: 1.5rem;
		padding: 20px 60px;
		border: 3px solid var(--accent-primary);
		background: rgba(255, 107, 53, 0.1);
		color: var(--accent-primary);
		text-decoration: none;
		font-family: 'Courier New', monospace;
		transition: all 0.3s;
		text-transform: uppercase;
		letter-spacing: 3px;
		box-shadow: 0 0 20px var(--accent-glow);
		font-weight: bold;
	}

	.cta-button:hover {
		background: var(--accent-primary);
		color: var(--bg-primary);
		box-shadow: 0 0 40px var(--accent-glow);
		transform: scale(1.03);
	}

	.cta-subtext {
		margin-top: 20px;
		color: var(--text-muted);
		font-size: 1.1rem;
	}

	footer {
		text-align: center;
		padding: 40px;
		border-top: 2px solid var(--border-color);
		margin-top: 80px;
	}

	footer p {
		color: var(--text-muted);
		margin-bottom: 10px;
	}

	.footer-sub {
		font-size: 0.9rem;
	}

	.email-signup {
		margin-top: 40px;
		text-align: center;
	}

	.signup-text {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin-bottom: 20px;
	}

	.email-signup form {
		display: flex;
		gap: 10px;
		justify-content: center;
		max-width: 500px;
		margin: 0 auto;
	}

	.email-signup input {
		flex: 1;
		padding: 15px 20px;
		background: var(--bg-secondary);
		border: 2px solid var(--border-color);
		color: var(--text-primary);
		font-family: 'Courier New', monospace;
		font-size: 1rem;
		transition: all 0.3s;
	}

	.email-signup input:focus {
		outline: none;
		border-color: var(--accent-primary);
	}

	.email-signup button {
		padding: 15px 30px;
		background: rgba(255, 107, 53, 0.1);
		border: 2px solid var(--accent-primary);
		color: var(--accent-primary);
		font-family: 'Courier New', monospace;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.email-signup button:hover {
		background: var(--accent-primary);
		color: var(--bg-primary);
	}

	.submit-message {
		margin-top: 15px;
		font-size: 1rem;
		color: var(--accent-primary);
	}

	@media (max-width: 768px) {
		.logo {
			font-size: 2.5rem;
			letter-spacing: 4px;
		}

		.tagline {
			font-size: 1.2rem;
		}

		h2 {
			font-size: 2rem;
		}

		.hero-stats {
			gap: 30px;
		}

		.stat-number {
			font-size: 2rem;
		}

		.examples-grid {
			grid-template-columns: 1fr;
			gap: 30px;
		}

		.cta-button {
			font-size: 1.2rem;
			padding: 15px 40px;
		}
	}
</style>
