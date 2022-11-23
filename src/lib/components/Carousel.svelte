<script lang="ts">
	import carousel1 from '$lib/assets/images/Carousel1.webp'
	import carousel2 from '$lib/assets/images/Carousel2.webp'
	import carousel3 from '$lib/assets/images/Carousel3.webp'
	import carousel4 from '$lib/assets/images/Carousel4.webp'
	import carousel5 from '$lib/assets/images/Carousel5.webp'
	import carousel6 from '$lib/assets/images/Carousel6.webp'
	import { inview } from 'svelte-inview'

	const images = [
		{
			src: carousel1,
			alt: 'Kam'
		},
		{
			src: carousel2,
			alt: 'Kam'
		},
		{
			src: carousel3,
			alt: 'Kam'
		},
		{
			src: carousel4,
			alt: 'Kam'
		},
		{
			src: carousel5,
			alt: 'Kam'
		},
		{
			src: carousel6,
			alt: 'Kam'
		}
	]

	let lazyLoad: boolean

	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	}

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}
</script>

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-300 py-6 sm:py-6 overflow-hidden">
	<div use:inview on:enter={handleEnter} class="marquee pt-4 opacity-0 translate-y-8">
		<ul class="marquee-content rounded-3xl" style="--marquee-elements: {images.length}">
			{#each images as image, i}
				<li class={i % 2 === 0 ? 'pt-10' : 'pb-10'}>
					{#if lazyLoad}
						<img src={image.src} alt={image.alt} height="400" width="400" />
					{/if}
				</li>
			{/each}
			{#each images as image, i}
				<li class={i % 2 === 0 ? 'pt-10' : 'pb-10'}>
					{#if lazyLoad}
						<img src={image.src} alt={image.alt} height="400" width="400" />
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	:root {
		--marquee-width: 100vw;
		--marquee-elements-displayed: 4;
		--marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
		--marquee-animation-duration: calc(var(--marquee-elements) * 3s);
	}

	.marquee {
		width: var(--marquee-width);
		height: var(--marquee-height);
		color: #eee;
		overflow: hidden;
		position: relative;
	}
	.marquee:before,
	.marquee:after {
		position: absolute;
		top: 0;
		width: 10rem;
		height: 100%;
		content: '';
		z-index: 1;
	}
	.marquee:before {
		left: 0;
		@apply bg-gradient-to-r from-base-200 to-transparent;
	}
	.marquee:after {
		right: 0;
		@apply bg-gradient-to-l from-base-200 to-transparent;
	}
	.marquee-content {
		list-style: none;
		height: 100%;
		display: flex;
		animation: scrolling 20s linear infinite;
	}
	@keyframes scrolling {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)));
		}
	}
	.marquee-content li {
		display: flex;
		justify-content: center;
		align-items: center;
		/* text-align: center; */
		flex-shrink: 0;
		width: var(--marquee-element-width);
		max-height: 100%;
		font-size: calc(var(--marquee-height) * 3 / 4); /* 5rem; */
		white-space: nowrap;
	}

	@media (max-width: 600px) {
		html {
			font-size: 12px;
		}
		:root {
			--marquee-width: 100vw;
			--marquee-height: 16vh;
			--marquee-elements-displayed: 3;
		}
		.marquee:before,
		.marquee:after {
			width: 5rem;
		}
	}
</style>
