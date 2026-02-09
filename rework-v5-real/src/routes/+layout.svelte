<script>
	import '../app.css';
	import { page } from '$app/stores';
	
	let menuOpen = false;
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/how-it-works', label: 'How It Works' },
		{ href: '/examples', label: 'Examples' },
		{ href: '/submitting/journaling', label: 'Journaling Guide' },
		{ href: '/submitting/submission-guidelines', label: 'Submission Guidelines' },
		{ href: '/sourcing', label: 'Sourcing Guide' }
	];
</script>

<div class="gcode-bg" aria-hidden="true">
	{#each Array(10) as _, col}
		<div class="gcode-column">
			{#each Array(100) as _, i}
				<div>G1 X{Math.floor(Math.random() * 200)} Y{Math.floor(Math.random() * 200)} E{(Math.random() * 5).toFixed(2)}</div>
			{/each}
			{#each Array(100) as _, i}
				<div>G1 X{Math.floor(Math.random() * 200)} Y{Math.floor(Math.random() * 200)} E{(Math.random() * 5).toFixed(2)}</div>
			{/each}
		</div>
	{/each}
</div>

<button class="menu-toggle" on:click={() => menuOpen = !menuOpen}>
	☰
</button>

<nav class="sidebar" class:open={menuOpen}>
	<div class="sidebar-header">
		<a href="/" class="sidebar-logo">REWORK</a>
		<button class="close-btn" on:click={() => menuOpen = false}>✕</button>
	</div>
	<ul class="nav-list">
		{#each navItems as item}
			<li>
				<a 
					href={item.href} 
					class:active={$page.url.pathname === item.href}
					on:click={() => menuOpen = false}
				>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
	<div class="sidebar-footer">
		<a href="https://hackclub.slack.com" target="_blank" rel="noopener noreferrer">
			Join Slack →
		</a>
	</div>
</nav>
	
{#if menuOpen}
	<div class="overlay" on:click={() => menuOpen = false}></div>
{/if}

<slot />

<style>
	.gcode-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.0;
		z-index: 0;
		font-size: 18px;
		line-height: 1.4;
		overflow: hidden;
		pointer-events: none;
		display: flex;
		gap: 40px;
	}	

	.gcode-column {
		flex: 1;
		white-space: pre;
		animation: scrollUp 20s linear infinite;
	}

	@keyframes scrollUp {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	.menu-toggle {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 1001;
		background: var(--bg-secondary);
		border: 2px solid var(--accent-primary);
		color: var(--accent-primary);
		font-size: 1.5rem;
		padding: 10px 15px;
		cursor: pointer;
		transition: all 0.3s;
	}

	.menu-toggle:hover {
		border-color: var(--accent-primary);
		box-shadow: 0 0 20px var(--accent-glow);
	}

	.sidebar {
		position: fixed;
		top: 0;
		right: -300px;
		width: 300px;
		height: 100vh;
		background: var(--bg-secondary);
		border-right: 2px solid var(--border-color);
		z-index: 1002;
		transition: left 0.3s;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.sidebar.open {
		right: 0;
	}

	.sidebar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		border-bottom: 2px solid var(--border-color);
	}

	.sidebar-logo {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--accent-primary);
		text-decoration: none;
		letter-spacing: 3px;
	}

	.close-btn {
		background: none;
		border: none;
		color: var(--text-secondary);
		font-size: 1.5rem;
		cursor: pointer;
		padding: 5px 10px;
		transition: color 0.3s;
	}

	.close-btn:hover {
		color: var(--accent-primary);
	}

	.nav-list {
		list-style: none;
		padding: 0;
		margin: 0;
		flex: 1;
	}

	.nav-list li a {
		display: block;
		padding: 15px 20px;
		color: var(--text-secondary);
		text-decoration: none;
		border-right: 3px solid transparent;
		transition: all 0.3s;
		font-size: 1.1rem;
	}

	.nav-list li a:hover {
		color: var(--text-primary);
		background: rgba(255, 107, 53, 0.05);
		border-right-color: var(--accent-primary);
	}

	.nav-list li a.active {
		color: var(--accent-primary);
		background: rgba(255, 107, 53, 0.1);
		border-right-color: var(--accent-primary);
	}

	.sidebar-footer {
		padding: 20px;
		border-top: 2px solid var(--border-color);
	}

	.sidebar-footer a {
		display: block;
		text-align: center;
		padding: 12px;
		background: rgba(255, 107, 53, 0.1);
		border: 1px solid var(--accent-primary);
		color: var(--accent-primary);
		text-decoration: none;
		transition: all 0.3s;
	}

	.sidebar-footer a:hover {
		background: var(--accent-primary);
		color: var(--bg-primary);
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.7);
		z-index: 1001;
	}

	@media (max-width: 768px) {
		.sidebar {
			width: 80vw;
			left: -80vw;
		}
	}
</style>