<script>
</script>

<svelte:head>
	<title>How to Journal - Hack Club Rework</title>
</svelte:head>

<div class="container">
	<a href="/" class="back-link">← Back to Home</a>

	<header>
		<h1>HOW TO JOURNAL</h1>
		<p class="subtitle">Document your design and build</p>
	</header>

	<section class="intro-section">
		<p>
			Journaling is one of the most important parts of submitting a project for Rework. 
			Instead of using Hackatime or Lapse, Rework uses a journaling system similar to Highway and Blueprint. 
			If you have participated in either of those programs, please read this anyway as there are a couple differences!
		</p>
		<p>
			A journal is a markdown file (named <code>JOURNAL.md</code>) that you use to document your work in creating your projects. 
			Journaling is <strong>mandatory</strong> and a great opportunity for you to be able to share your work with the world! 
			People want to see progress, not just completed work. <strong>You should include struggles, successes, wins, and losses</strong>, 
			it all adds to your project. Projects with low quality journaling will be rejected!
		</p>
	</section>

	<section class="requirements-section">
		<h2>Journal Entry Requirements</h2>
		<p>
			A journal is broken down into multiple entries, one from each of your sessions working on the project, 
			all of which must include the following:
		</p>

		<div class="requirement-list">
			<div class="requirement-item">
				<span class="number">1</span>
				<span>Date and time of entry</span>
			</div>
			<div class="requirement-item">
				<span class="number">2</span>
				<span>Title</span>
			</div>
			<div class="requirement-item">
				<span class="number">3</span>
				<span>Journal content (what you worked on)</span>
			</div>
			<div class="requirement-item">
				<span class="number">4</span>
				<span>Images of progress</span>
			</div>
			<div class="requirement-item">
				<span class="number">5</span>
				<span>Time spent</span>
			</div>
		</div>
	</section>

	<section class="template-section">
		<h2>Template</h2>
		<p>A template for a journal entry could look like this:</p>
		
		<div class="code-block">
			<pre><code># February 1 10:11pm : Added fan mounts

[actual journal content - what did you do?]

[pictures of what you worked on]

**Total time spent: 2h**</code></pre>
		</div>

		<p class="note">Every journal entry you do needs to meet all of these requirements!</p>
	</section>

	<section class="guidelines-section">
		<h2>Important Guidelines</h2>
        <p> <strong>Your journal should be:</strong></p>
		
		<div class="requirement-item">
			<h3>Readable</h3>
			<p>
				Your journal should be readable by others and sound like your voice. This means that we have a 
				<strong>strict no AI in journals rule</strong>. If you used AI in your journal the project will be rejected 
				and you will be asked to rewrite it in your own words.
			</p>
		</div>

		<div class="requirement-item">
			<h3>Interesting</h3>
			<p>
				Your journal should be something that others would be <i>interested</i> in reading! Share your process, 
				your thoughts, and what you learned along the way.
			</p>
		</div>
	</section>

	<section class="cta-section">
		<h2>Ready to Start?</h2>
		<p>Create your JOURNAL.md and start documenting your build!</p>
		<a href="/submitting/submission-guidelines" class="cta-button">View Submission Guidelines</a>
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

	h3 {
		font-size: 1.5rem;
		color: var(--text-primary);
		margin-bottom: 15px;
	}

	.intro-section p {
		font-size: 1.2rem;
		color: var(--text-secondary);
		line-height: 1.8;
		margin-bottom: 20px;
	}

	.intro-section strong {
		color: var(--text-primary);
	}

	.intro-section code {
		background: var(--bg-tertiary);
		padding: 2px 8px;
		border-radius: 3px;
		color: var(--accent-primary);
		font-family: 'Courier New', monospace;
	}

	.requirements-section p {
		font-size: 1.2rem;
		color: var(--text-secondary);
		margin-bottom: 30px;
		line-height: 1.8;
	}

	.requirement-list {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.requirement-item {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 20px;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-left: 4px solid var(--accent-primary);
		font-size: 1.1rem;
		color: var(--text-secondary);
	}

	.requirement-item .number {
		font-size: 1.8rem;
		font-weight: bold;
		color: var(--accent-primary);
		min-width: 40px;
		text-align: center;
	}

	.template-section p {
		font-size: 1.2rem;
		color: var(--text-secondary);
		margin-bottom: 20px;
	}

	.code-block {
		background: var(--bg-secondary);
		border: 2px solid var(--border-color);
		padding: 30px;
		margin: 30px 0;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
	}

	.code-block code {
		font-family: 'Courier New', monospace;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-primary);
	}

	.note {
		font-size: 1.1rem;
		color: var(--accent-primary);
		font-weight: bold;
		margin-top: 20px;
	}

	.guideline-box {
		padding: 30px;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		margin-bottom: 20px;
		transition: all 0.3s;
	}

	.guideline-box:hover {
		border-color: var(--accent-primary);
		box-shadow: 0 5px 20px rgba(255, 107, 53, 0.1);
	}

	.guideline-box h3 {
		margin-bottom: 15px;
	}

	.guideline-box p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.guideline-box strong {
		color: var(--accent-primary);
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

		.requirement-item {
			flex-direction: column;
			text-align: center;
		}

		.cta-button {
			font-size: 1.1rem;
			padding: 15px 35px;
		}
	}
</style>