<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>SRMusic — Lightweight Music Player</title>
	<meta
		name="description"
		content="SRMusic — a lightweight, native music player with bit-perfect USB audio, DSD, AutoEq and synced lyrics."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen">
	<header class="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
		<a href="#top" class="flex items-center gap-2 text-xl font-bold tracking-tight">
			<span class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-lg text-white"
				>♪</span
			>
			SRMusic
		</a>
		<nav class="flex items-center gap-5 text-sm font-medium">
			<a href="#screenshots" class="hover:text-primary">Screenshots</a>
			<a href="#features" class="hover:text-primary">Features</a>
			<a
				href="https://github.com/Sanggi18"
				class="rounded-full bg-primary px-4 py-2 text-white hover:bg-primary-dark"
			>
				GitHub
			</a>
		</nav>
	</header>

	<main id="top">
		{@render children()}
	</main>

	<footer class="border-t py-8 text-center text-sm text-zinc-500">
		SRMusic — built by Sanggi. Lightweight, native, no WebView2.
	</footer>
</div>
