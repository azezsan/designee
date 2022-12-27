<script lang="ts">
	import carousel1 from '$lib/assets/images/Carousel1.webp'
	import carousel2 from '$lib/assets/images/Carousel2.webp'
	import carousel3 from '$lib/assets/images/Carousel3.webp'
	import carousel4 from '$lib/assets/images/Carousel4.webp'
	import carousel5 from '$lib/assets/images/Carousel5.webp'
	import carousel6 from '$lib/assets/images/Carousel6.webp'
	import carousel7 from '$lib/assets/images/Carousel7.webp'
	import carousel8 from '$lib/assets/images/Carousel8.webp'
	import carousel9 from '$lib/assets/images/Carousel9.webp'
	import carousel10 from '$lib/assets/images/Carousel10.webp'
	import { inview } from 'svelte-inview'

	const images = [
		{
			src: carousel1,
			alt: 'Website design for digital prudects markting agency'
		},
		{
			src: carousel2,
			alt: 'Website design for a clothing brand'
		},
		{
			src: carousel3,
			alt: 'Website design for messaging app'
		},
		{
			src: carousel4,
			alt: 'Website design for a mattress company'
		},
		{
			src: carousel5,
			alt: 'Website design for a freelnaing platform'
		},
		{
			src: carousel6,
			alt: 'Website design for selling homes'
		},
		{
			src: carousel7,
			alt: 'Website design for interior design company'
		},
		{
			src: carousel8,
			alt: 'Website design for Jewelry brand'
		},
		{
			src: carousel9,
			alt: 'Website design for a digital learning and DIY'
		},
		{
			src: carousel10,
			alt: 'Website design for an interior design brand'
		}
	]

	let lazyLoad: boolean

	const options = {
		rootMargin: '100px',
		unobserveOnEnter: true
	}

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}
</script>

<div class="marquee-container bg-base-300 pb-28 pt-14" use:inview={options} on:enter={() => (lazyLoad = true)}>
	<div class="marquee opacity-0 translate-y-1/3" use:inview on:enter={handleEnter}>
		{#if lazyLoad}
			{#each Array(2) as _}
				<ul class="marquee__group">
					{#each images as image, i}
						<li>
							<img src={image.src} alt={image.alt} class={i % 2 ? 'pt-8' : 'pb-8'} />
						</li>
					{/each}
				</ul>
			{/each}
		{/if}
	</div>
</div>

<style>
	.marquee-container {
		--space: 2rem;

		display: grid;
		align-content: center;
		overflow: hidden;
		gap: var(--space);
		width: 100%;
		font-family: 'Corben', system-ui, sans-serif;
		font-size: 1.5rem;
		line-height: 1.5;
	}

	.marquee {
		--duration: 60s;
		--gap: var(--space);

		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
	}

	.marquee__group {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: var(--gap);
		min-width: 100%;
		animation: scroll var(--duration) linear infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee__group {
			animation-play-state: paused;
		}
	}

	.marquee__group img {
		max-width: clamp(40rem, 1rem + 28vmin, 20rem);
		aspect-ratio: 1;
		object-fit: cover;
	}

	/* .marquee--reverse .marquee__group {
		animation-direction: reverse;
		animation-delay: calc(var(--duration) / -2);
	} */

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}
</style>
