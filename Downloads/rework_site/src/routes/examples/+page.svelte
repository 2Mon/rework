<script>
	export let data;
	$: mods = data.mods;
</script>

<svelte:head>
	<title>Example Mods - Hack Club Rework</title>
</svelte:head>

<div class="container">
	<a href="/" class="back-link">← Back to Home</a>
	<header>
		<h1>EXAMPLE MODS</h1>
		<p class="subtitle">Real projects from the Rework community</p>
	</header>

	<div class="mods-grid">
		{#each mods as mod}
			<a href="/examples/{mod.id}" class="mod-card">
				<div class="mod-image">
					{#if mod.image}
						<img src={mod.image} alt={mod.title} />
					{:else}
						<div class="placeholder-image">
							<span class="placeholder-text">📷</span>
						</div>
					{/if}
				</div>
				
				<div class="mod-content">
					<h2 class="mod-title">{mod.title}</h2>
					<div class="mod-meta">
  						<span class="author">by {mod.author}</span>
  						{#if mod.link}
    						<a href={mod.link} target="_blank" rel="noopener noreferrer" class="mod-link">View Project →</a>
  						{/if}
				</div>
					<p class="mod-description">{mod.description}</p>
					<div class="mod-stats">
						<span class="stat">💰 {mod.cost}</span>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="submit-section">
		<h2>Got a mod to share?</h2>
		<p>Submit your project to inspire others in the community!</p>
		<a href="https://forms.fillout.com/t/t5ZZxieRZYus" class="submit-button">Submit Your Mod</a>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
	}

	header {
		text-align: center;
		padding: 60px 20px 40px;
		border-bottom: 2px solid var(--border-color);
		margin-bottom: 60px;
		position: relative;
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
		margin-bottom: 30px;
	}

	.back-link {
		display: inline-block;
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 1rem;
		padding: 10px 20px;
		border: 1px solid var(--border-color);
		transition: all 0.3s;
	}

	.back-link:hover {
		border-color: var(--accent-primary);
		color: var(--accent-primary);
	}

	.mods-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 30px;
		margin-bottom: 80px;
	}

	.mod-card {
		display: block;
		border: 1px solid var(--border-color);
		background: var(--bg-secondary);
		overflow: hidden;
		transition: all 0.3s;
		text-decoration: none;
		color: inherit;
	}

	.mod-card:hover {
		border-color: var(--accent-primary);
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
	}

	.mod-image {
		width: 100%;
		height: 200px;
		background: var(--bg-tertiary);
		overflow: hidden;
	}

	.mod-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.placeholder-image {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%);
	}

	.placeholder-text {
		font-size: 3rem;
		opacity: 0.3;
	}

	.mod-content {
		padding: 25px;
	}

	.mod-title {
		font-size: 1.5rem;
		color: var(--text-primary);
		margin-bottom: 10px;
		line-height: 1.3;
	}

	.mod-meta {
		display: flex;
		justify-content: space-between;
		font-size: 0.9rem;
		color: var(--text-muted);
		margin-bottom: 15px;
		padding-bottom: 15px;
		border-bottom: 1px solid var(--border-color);
	}

	.author {
		color: var(--accent-secondary);
	}

	.mod-description {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.mod-stats {
		display: flex;
		gap: 20px;
		font-size: 0.9rem;
		color: var(--text-muted);
		padding-top: 15px;
		border-top: 1px solid var(--border-color);
	}

	.mod-link {
  		color: var(--accent-primary);
  		text-decoration: none;
  		border-bottom: 1px solid var(--accent-primary);
  		transition: all 0.2s;
	}

	.mod-link:hover {
  		color: var(--accent-secondary);
  		border-bottom-color: var(--accent-secondary);
	}

	.submit-section {
		text-align: center;
		padding: 60px 20px;
		border: 2px solid var(--border-color);
		background: var(--bg-secondary);
		margin-top: 80px;
	}

	.submit-section h2 {
		font-size: 2rem;
		color: var(--accent-primary);
		margin-bottom: 15px;
	}

	.submit-section p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin-bottom: 30px;
	}

	.submit-button {
		display: inline-block;
		font-size: 1.2rem;
		padding: 15px 40px;
		border: 2px solid var(--accent-primary);
		background: rgba(255, 107, 53, 0.1);
		color: var(--accent-primary);
		text-decoration: none;
		transition: all 0.3s;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.submit-button:hover {
		background: var(--accent-primary);
		color: var(--bg-primary);
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		.mods-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
