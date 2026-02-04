<script>
</script>

<svelte:head>
	<title>Submission Guidelines - Hack Club Rework</title>
</svelte:head>

<div class="container">
	<a href="/" class="back-link">← Back to Home</a>

	<header>
		<h1>SUBMITTING</h1>
		<p class="subtitle">Ready to submit your project?</p>
	</header>

	<section class="requirements">
		<h2>Submission Requirements</h2>
		<p class="intro">
			Submitting for Rework is all about <strong>shipping your project</strong>. What does this mean?
		</p>
		<p class="intro">This means that your project needs to have a...</p>

		<div class="requirement-list">
			<div class="requirement">
				<div class="req-number">1</div>
				<div class="req-content">
					<h3>Complete CAD Model</h3>
					<p>Your entire project in <code>.step</code> format</p>
				</div>
			</div>

			<div class="requirement">
				<div class="req-number">2</div>
				<div class="req-content">
					<h3>README.md</h3>
					<ul>
						<li>Full image of your project in CAD</li>
						<li>Short description of your project and why you made it</li>
						<li>BOM in table format</li>
						<li>Wiring diagram for your full project</li>
						<li><strong>NO AI IN READMEs</strong></li>
					</ul>
				</div>
			</div>

			<div class="requirement">
				<div class="req-number">3</div>
				<div class="req-content">
					<h3>Firmware</h3>
					<p>For your project (if applicable)</p>
				</div>
			</div>
			<div class="requirement">
				<div class="req-number">4</div>
				<div class="req-content">
					<h3>Bill Of Materials (BOM)</h3>
					<p>In <strong>.csv</strong> format, including:</p>
					<ul>
						<li>Item name</li>
						<li>Price</li>
						<li>Quantity</li>
						<li>Link</li>
						<li>Total Cost</li>
					</ul>
				</div>
			</div>
			<div class="requirement">
				<div class="req-number">4</div>
				<div class="req-content">
					<h3>High Quality Journal.md</h3>
					<p>Documenting your work throughout the process</p>
					<a href="/submitting/journaling" class="cta-button">READ JOURNALING GUIDELINES</a>
				</div>
			</div>
		</div>
	</section>

	<section class="submit-section">
		<h2>Ready to Submit?</h2>
		<p>When you have completed all of these requirements, submit your project:</p>
		<a href="#" class="submit-button">SUBMIT YOUR PROJECT</a>
	</section>
</div>

<style>
	.container {
		max-width: 900px;
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

	section {
		margin: 60px 0;
	}

	h2 {
		font-size: 2.5rem;
		color: var(--accent-primary);
		margin-bottom: 30px;
		letter-spacing: 2px;
	}

	.intro {
		font-size: 1.2rem;
		color: var(--text-secondary);
		line-height: 1.8;
		margin-bottom: 15px;
	}

	.intro strong {
		color: var(--text-primary);
	}

	.requirement-list {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin-top: 40px;
	}

	.requirement {
		display: flex;
		gap: 20px;
		padding: 30px;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-left: 4px solid var(--accent-primary);
		transition: all 0.3s;
	}

	.requirement:hover {
		border-color: var(--accent-primary);
		box-shadow: 0 5px 20px rgba(255, 107, 53, 0.1);
	}

	.req-number {
		font-size: 2.5rem;
		font-weight: bold;
		color: var(--accent-primary);
		min-width: 60px;
		text-align: center;
		line-height: 1;
	}

	.req-content h3 {
		font-size: 1.5rem;
		color: var(--text-primary);
		margin-bottom: 10px;
	}

	.req-content p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.req-content code {
		background: var(--bg-tertiary);
		padding: 2px 8px;
		border-radius: 3px;
		color: var(--accent-primary);
		font-family: 'Courier New', monospace;
	}

	.req-content ul {
		margin-top: 10px;
		padding-left: 20px;
	}

	.req-content li {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin-bottom: 8px;
		line-height: 1.6;
	}

	.req-content li strong {
		color: var(--accent-primary);
	}

	.submit-section {
		text-align: center;
		padding: 60px 40px;
		background: var(--bg-secondary);
		border: 2px solid var(--border-color);
		margin-top: 80px;
	}

	.submit-section h2 {
		margin-bottom: 20px;
	}

	.submit-section p {
		font-size: 1.2rem;
		color: var(--text-secondary);
		margin-bottom: 30px;
	}

	.submit-button {
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

	.submit-button:hover {
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

		.requirement {
			flex-direction: column;
			gap: 15px;
		}

		.req-number {
			text-align: left;
		}

		.submit-button {
			font-size: 1.1rem;
			padding: 15px 35px;
		}
	}
</style>