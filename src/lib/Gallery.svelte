<script lang="ts">
	import { screenshots } from '$lib/screenshots';

	let selected: number | null = $state(null);

	function open(i: number) {
		selected = i;
	}
	function close() {
		selected = null;
	}
	function step(dir: 1 | -1) {
		if (selected === null) return;
		selected = (selected + dir + screenshots.length) % screenshots.length;
	}

	function onKey(e: KeyboardEvent) {
		if (selected === null) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<svelte:window onkeydown={onKey} />

<section id="screenshots" class="mx-auto max-w-6xl px-4 py-12">
	<h2 class="text-2xl font-bold tracking-tight">Screenshots</h2>
	<p class="mt-1 text-zinc-500">Click any screenshot to view it full size.</p>

	<div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each screenshots as shot, i (shot.src)}
			<button
				type="button"
				onclick={() => open(i)}
				class="group overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition hover:shadow-md"
			>
				<div class="flex aspect-video items-center justify-center bg-zinc-100">
					<!-- object-contain: the whole screenshot is always visible, never cropped -->
					<img
						src="screenshots/{shot.src}"
						alt={shot.alt}
						loading="lazy"
						decoding="async"
						class="h-full w-full object-contain transition group-hover:scale-[1.02]"
					/>
				</div>
				<p class="px-4 py-3 text-sm font-medium">{shot.caption}</p>
			</button>
		{/each}
	</div>
</section>

{#if selected !== null}
	<!-- Lightbox -->
	<div
		class="fixed inset-0 z-50 flex flex-col bg-black/90 p-4"
		role="dialog"
		aria-modal="true"
		aria-label={screenshots[selected].alt}
	>
		<div class="flex items-center justify-between text-white">
			<span class="text-sm font-medium">
				{selected + 1} / {screenshots.length} — {screenshots[selected].caption}
			</span>
			<button
				type="button"
				onclick={close}
				aria-label="Close"
				class="rounded-full bg-white/10 px-3 py-1 text-lg leading-none hover:bg-white/20"
			>
				×
			</button>
		</div>
		<button type="button" onclick={close} class="flex min-h-0 flex-1 cursor-zoom-out items-center justify-center">
			<img
				src="screenshots/{screenshots[selected].src}"
				alt={screenshots[selected].alt}
				class="max-h-full max-w-full object-contain"
			/>
		</button>
		<div class="flex justify-center gap-3 text-white">
			<button
				type="button"
				onclick={() => step(-1)}
				class="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">← Prev</button
			>
			<button
				type="button"
				onclick={() => step(1)}
				class="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">Next →</button
			>
		</div>
	</div>
{/if}
