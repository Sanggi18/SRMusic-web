<script lang="ts">
	import Gallery from '$lib/Gallery.svelte';

	const features = [
		{ title: 'Bit-perfect audio', text: 'USB DAC output, DSD native / DoP, no resampling.' },
		{ title: 'Parametric EQ + AutoEq', text: '10-band PEQ and squig.link AutoEq profiles per IEM.' },
		{ title: 'Synced lyrics', text: 'Word-by-word lyrics with kanji → romaji reading index.' },
		{ title: 'Lightweight & native', text: 'No WebView2, no Electron. Fast and small.' },
		{ title: 'FFmpeg decoder', text: 'FLAC, ALAC, Opus, Vorbis, WavPack, APE and more.' },
		{ title: 'Your library, your way', text: 'Fast local library, playlists, and queue.' }
	];
</script>

<section class="mx-auto max-w-6xl px-4 pt-14 pb-8 text-center">
	<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
		SRMusic — <span class="text-primary">lightweight</span> music player
	</h1>
	<p class="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
		Native Android player with bit-perfect USB audio, DSD, parametric EQ with AutoEq, and
		synced lyrics.
	</p>
	<div class="mt-6 flex justify-center gap-3">
		<a href="#screenshots" class="rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark">
			View screenshots
		</a>
		<a
			href="https://github.com/Sanggi18"
			class="rounded-full border px-6 py-3 font-medium hover:border-primary hover:text-primary"
		>
			GitHub
		</a>
	</div>
</section>

<Gallery />

<section id="features" class="mx-auto max-w-6xl px-4 py-12">
	<h2 class="text-2xl font-bold tracking-tight">Features</h2>
	<div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each features as f (f.title)}
			<article class="rounded-2xl border bg-white p-5 shadow-sm">
				<h3 class="font-semibold">{f.title}</h3>
				<p class="mt-1 text-sm text-zinc-500">{f.text}</p>
			</article>
		{/each}
	</div>
</section>
