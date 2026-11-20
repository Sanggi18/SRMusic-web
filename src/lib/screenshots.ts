export interface Screenshot {
	/** File in static/screenshots/, e.g. "player.webp" */
	src: string;
	/** Short caption shown under the image */
	caption: string;
	/** Alt text for accessibility */
	alt: string;
}

/**
 * Drop WebP screenshots into static/screenshots/ and list them here.
 * Keep the original aspect ratio — images are shown with object-fit:
 * contain, so nothing is ever cropped or squished.
 */
export const screenshots: Screenshot[] = [
	{ src: 'player.webp', caption: 'Now Playing', alt: 'SRMusic Now Playing screen' },
	{ src: 'library.webp', caption: 'Library', alt: 'SRMusic library screen' },
	{ src: 'lyrics.webp', caption: 'Synced lyrics', alt: 'SRMusic synced lyrics with romaji' },
	{ src: 'equalizer.webp', caption: 'Parametric EQ / AutoEq', alt: 'SRMusic parametric EQ and AutoEq' },
	{ src: 'settings.webp', caption: 'Settings', alt: 'SRMusic settings screen' },
	{ src: 'bitperfect.webp', caption: 'Bit-perfect USB / DSD', alt: 'SRMusic bit-perfect USB DAC output' }
];
