<script>
</script>

<svelte:head>
	<title>How It Works - Hack Club Rework</title>
</svelte:head>

<div class="container">
	<a href="/" class="back-link">← Back to Home</a>

	<header>
		<h1>HOW IT WORKS</h1>
		<p class="subtitle">Your journey from idea to built mod</p>
	</header>

	<section class="workflow-section">
		<div class="workflow-steps">
			<div class="step">
				<div class="step-number">1</div>
				<h3>Design Your Mod</h3>
				<p>Come up with a hardware mod for your 3D printer. Design it in CAD using tools like Fusion 360, FreeCAD, or Onshape.</p>
				<ul>
					<li>Sketch out your idea</li>
					<li>Create full CAD models in .step format</li>
					<li>Journal your design process in your JOURNAL.md</li>
				</ul>
			</div>

			<div class="step">
				<div class="step-number">2</div>
				<h3>Document Your Design</h3>
				<p>Create your README with all the details about your mod before submitting.</p>
				<ul>
					<li>Write clear description of your mod with the reasoning behind why you designed it</li>
					<li>Include full BOM in table format</li>
					<li>Add wiring diagrams</li>
					<li>Include CAD renders</li>
				</ul>
			</div>

			<div class="step">
				<div class="step-number">3</div>
				<h3>Submit + Get Grant</h3>
				<p>Submit your design and documentation in #rework-submissions. Once approved, you'll receive your $75 grant to order parts.</p>
				<ul>
					<li>Submit via the application form</li>
					<li>Get your design reviewed</li>
					<li>Receive $75 grant via HCB</li>
					<li>Order your parts</li>
				</ul>
			</div>

			<div class="step">
				<div class="step-number">4</div>
				<h3>Build & Journal</h3>
				<p>Build your mod and document everything in your journal as you go.</p>
				<ul>
					<li>Build and test your mod</li>
					<li>Document progress in your JOURNAL.md</li>
				</ul>
			</div>

			<div class="step">
				<div class="step-number">5</div>
				<h3>Get Your Filament</h3>
				<p>Once your mod is complete and working, resubmit to receive exclusive Hack Club filament!</p>
				<ul>
					<li>Complete your build</li>
					<li>Submit final journal and photos</li>
					<li>Receive Hack Club filament</li>
					<li>Get featured in examples gallery</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="cta-section">
		<h2>Ready to Submit?</h2>
		<p>Check out the submission guidelines to learn how to document and submit your project!</p>
		<a href="/submitting/submission-guidelines" class="cta-button">Submission Guidelines</a>
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

	.tips-section {
		margin: 80px 0;
	}

	.tips-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
	}

	.tip-card {
		padding: 30px;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		transition: all 0.3s;
	}

	.tip-card:hover {
		border-color: var(--accent-primary);
		transform: translateY(-5px);
	}

	.tip-card h3 {
		font-size: 1.3rem;
		color: var(--text-primary);
		margin-bottom: 15px;
	}

	.tip-card p {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.6;
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

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		.tips-grid {
			grid-template-columns: 1fr;
		}
	}
</style>