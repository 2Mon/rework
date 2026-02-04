<script>
	import '../app.css';
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

<slot />

<style>
	.gcode-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.03;
		z-index: 0;
		font-size: 14px;
		line-height: 1.4;
		overflow: hidden;
		pointer-events: none;
		display: flex;
		gap: 40px;
	}	

	.gcode-column {
		flex: 1;
		white-space: pre;
		animation: scrollUp 50s linear infinite;
	}

	@keyframes scrollUp {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}
</style>