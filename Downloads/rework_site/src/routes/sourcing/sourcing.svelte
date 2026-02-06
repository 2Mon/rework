<script>
</script>

<svelte:head>
	<title>How It Works - Hack Club Rework</title>
</svelte:head>

<div class="container">
	<a href="/" class="back-link">← Back to Home</a>

	<header>
		<h1>Sourcing Guide</h1>
		<p class="subtitle">Where do I buy parts for my rework?</p>
	</header>
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
		text-align: center;
		padding: 60px 20px;
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
		margin-bottom: 40px;
		letter-spacing: 2px;
	}

	.ascii-art {
		margin: 30px 0;
		opacity: 0.5;
	}

	.ascii-art pre {
		font-size: 1rem;
		line-height: 1.2;
		color: var(--accent-primary);
	}

	.hero-stats {
		display: flex;
		justify-content: center;
		gap: 60px;
		flex-wrap: wrap;
		margin-top: 40px;
	}

	.stat {
		text-align: center;
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
