<script>
</script>

<svelte:head>
	<title>How It Works - Hack Club Rework</title>
</svelte:head>

<div class="container">
	<a href="/" class="back-link">← Back to Home</a>

	<header>
		<h1>HOW IT WORKS</h1>
		<p class="subtitle">so, how do I rework my printer?</p>
	</header>

	<section class="workflow-section">
		<div class="workflow-steps">
			<div class="step">
				<div class="step-content">
					<div class="step-number">1</div>
					<h3>Design Your Mod</h3>
					<p>Come up with a hardware mod for your 3D printer. Design it in CAD using the program of your choice.</p>
					<ul>
						<li>Design your mod</li>
						<li>Journal your design process in your JOURNAL.md</li>
					</ul>
				</div>
				<div class="image">
					<img src="https://cdn.hackclub.com/019c35e6-febe-7005-9fbb-b823b2b47eb8/image.png" alt="CAD Design Example" />
				</div>
			</div>

			<div class="step">
				<div class="step-content">
					<div class="step-number">2</div>
					<h3>Document Your Design</h3>
					<p>Create your repo with all the documentation for your mod before submitting.</p>
					<ul>
						<li>Write a README.md explaining your mod</li>
						<li>Include full BOM in table format</li>
						<li>Add wiring diagrams</li>
						<li>Include CAD renders</li>
					</ul>
				</div>
				<div class="image">
					<img src="https://user-cdn.hackclub-assets.com/019c35fa-14af-7a34-83d6-a5b57243367e/Screenshot%202026-02-06%20at%209.41.25%E2%80%AFPM.png" alt="Documentation" />
				</div>
			</div>

			<div class="step">
				<div class="step-content">
					<div class="step-number">3</div>
					<h3>Submit + Get Grant</h3>
					<p>Submit your design and documentation.</p>
					<ul>
						<li>Submit via the application form and post to #rework-submissions</li>
						<li>Get your design reviewed</li>
						<li>Receive $75 grant via HCB</li>
						<li>Order your parts</li>
					</ul>
				</div>
				<div class="image">
					<img src="https://user-cdn.hackclub-assets.com/019c3612-7768-7901-90e9-d77e467f486f/Screenshot%202026-02-06%20at%2010.08.14%E2%80%AFPM.png" alt="Submit" />
				</div>
			</div>

			<div class="step">
				<div class="step-content">
					<div class="step-number">4</div>
					<h3>Build & Journal</h3>
					<p>Build your mod.</p>
					<ul>
						<li>Build and test your mod</li>
						<li>Document progress in your JOURNAL.md</li>
						<li>Write a build instruction manual for your project</li>
					</ul>
				</div>
				<div class="image">
					<img src="https://user-cdn.hackclub-assets.com/019c3613-ffe0-7480-8fd0-2c56167e4fa5/Screenshot%202026-02-06%20at%2010.09.56%E2%80%AFPM.png" alt="Build" />
				</div>
			</div>

			<div class="step">
				<div class="step-content">
					<div class="step-number">5</div>
					<h3>Get Hack Club Filament</h3>
					<p>Submit your build to receive exclusive Hack Club filament!</p>
					<ul>
						<li>Record a video of your mod in action</li>
						<li>Submit final build to the build submission form</li>
						<li>Receive Hack Club filament</li>
					</ul>
				</div>
				<div class="image">
					<img src="https://user-cdn.hackclub-assets.com/019c3613-7343-7bce-9598-43dc07c06330/Flashforge-1-75mm-PLA-Galaxy-3D-Printing-Filament-1KG-Galaxy-Red-522611-0._w500_.jpg" alt="Filament" />
				</div>
			</div>
		</div>
	</section>
	<section class="cta-section">
		<h2>Ready to Go?</h2>
		<p>Check out the submission guidelines to learn how to document and submit your project!</p>
		<a href="/submitting/submission-guidelines" class="cta-button">Submission Guidelines</a>
		<div class="section-divider"></div>
		<h2>Have More Questions?</h2>
		<p>Join the #rework channel on Slack to ask questions and get help from the community!</p>
	</section>
</div>

<style>
	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	.back-link {
		display: inline-block;
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 1rem;
		padding: 10px 20px;
		border: 1px solid var(--border-color);
		margin-bottom: 40px;
		transition: all 0.3s;
	}

	.back-link:hover {
		border-color: var(--accent-primary);
		color: var(--accent-primary);
	}

	header {
		text-align: center;
		padding: 40px 20px;
		border-bottom: 2px solid var(--border-color);
		margin-bottom: 60px;
	}

	h1 {
		font-size: 3.5rem;
		color: var(--accent-primary);
		letter-spacing: 4px;
		margin-bottom: 15px;
	}

	.subtitle {
		font-size: 1.3rem;
		color: var(--text-secondary);
	}

	h2 {
		font-size: 2.5rem;
		color: var(--accent-primary);
		margin-bottom: 40px;
		letter-spacing: 2px;
		text-align: center;
	}

	.workflow-steps {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	.step {
		display: flex;
		gap: 30px;
		padding: 40px;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-left: 4px solid var(--accent-primary);
		transition: all 0.3s;
	}

	.step:hover {
		border-color: var(--accent-primary);
		box-shadow: 0 5px 20px rgba(255, 107, 53, 0.1);
	}

	.step-content {
		flex: 1;
	}

	.step-number {
		font-size: 3rem;
		font-weight: bold;
		color: var(--accent-primary);
		margin-bottom: 20px;
		text-shadow: 0 0 20px var(--accent-glow);
	}

	.step h3 {
		font-size: 1.8rem;
		color: var(--text-primary);
		margin-bottom: 15px;
	}

	.step p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 20px;
	}

	.step ul {
		list-style: none;
		padding: 0;
	}

	.step li {
		font-size: 1rem;
		color: var(--text-secondary);
		padding: 8px 0;
		padding-left: 25px;
		position: relative;
	}

	.step li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--accent-primary);
	}

	.image {
		width: 320px;
		height: 320px;
		flex-shrink: 0;
		overflow: hidden;
		border-radius: 16px;
		order: 2;
		background:var(--bg-secondary);
		padding: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--border-color);
		transition: all 0.3s;
	}

	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s;
		border-radius: inherit;
	}

	.step:hover .image img {
		transform: scale(1.05);
		border-color: var(--accent-primary);
	}
	
	.step:nth-child(even) {
		flex-direction: row-reverse;
	}

	.cta-section {
		text-align: center;
		padding: 60px 40px;
		background: var(--bg-secondary);
		border: 2px solid var(--border-color);
		margin-top: 80px;
	}

	.cta-section h2 {
		margin-bottom: 20px;
	}

	.cta-section p {
		font-size: 1.2rem;
		color: var(--text-secondary);
		margin-bottom: 30px;
	}

	.cta-button {
		display: inline-block;
		font-size: 1.3rem;
		padding: 20px 50px;
		border: 3px solid var(--accent-primary);
		background: rgba(255, 107, 53, 0.1);
		color: var(--accent-primary);
		text-decoration: none;
		transition: all 0.3s;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: bold;
	}

	.cta-button:hover {
		background: var(--accent-primary);
		color: var(--bg-primary);
		transform: scale(1.05);
		box-shadow: 0 0 30px rgba(255, 107, 53, 0.3);
	}

	.section-divider {
		border-top: 2px solid var(--border-color);
		margin: 60px 0;
	}


	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		.step {
			flex-direction: column;
		}

		.image {
			width: 100%;
			order: 0;
		}
	}
</style>