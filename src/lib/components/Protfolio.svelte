<script lang="ts">
	import Dribbble from '$lib/assets/images/Dribbble.svg'
	import Behance from '$lib/assets/images/Behance.svg'
	import Awwwards from '$lib/assets/images/Awwwards.svg'
	import image6 from '$lib/assets/doodles/2Lines.svg'
	import image7 from '$lib/assets/doodles/YellowDizziness.svg'
	import { inview } from 'svelte-inview'
	import type { ObserverEventDetails, Options } from 'svelte-inview'

	const featured = [
		{
			image: Dribbble,
			alt: 'Dribbble Logo',
			width: '91',
			height: '23'
		},
		{
			image: Behance,
			alt: 'Behance Logo',
			width: '101',
			height: '19'
		},
		{
			image: Awwwards,
			alt: 'Awwwards Logo',
			width: '141',
			height: '23'
		}
	]

	let lazyLoad: boolean

	const options: Options = {
		rootMargin: '100px',
		unobserveOnEnter: true
	}

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}
</script>

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-300 py-20 sm:py-32 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section use:inview on:enter={handleEnter} class="flex mx-auto text-center opacity-0 translate-y-8">
			<h1 class="text-3xl sm:text-5xl font-semibold">A Glimpse Into Our World</h1>
		</section>

		<a href="https://calendly.com/designee/30minute" target="_blank" rel="noopener noreferrer" class="button_parent mx-auto" role="button">
			<span class="button_top_200">Schedule Your FREE Audit Call Now</span>
		</a>

		<section use:inview on:enter={handleEnter} class="grid mx-auto text-center gap-6 opacity-0 translate-y-8">
			<h2 class="text-2xl">Designs commonly featured by</h2>
			<ul class="flex justify-center gap-6">
				{#each featured as item}
					<li class="grid items-end">
						{#if lazyLoad}
							<img src={item.image} alt={item.alt} width={item.width} height={item.height} />
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	</div>

	{#if lazyLoad}
		<img
			use:inview
			on:enter={handleEnter}
			src={image7}
			alt="Yellow Dizziness Doodle"
			class="absolute w-[25vw] max-w-[220px] top-0 right-0 z-10 opacity-0 !-translate-y-1/2 translate-x-full"
		/>
		<img
			use:inview
			on:enter={handleEnter}
			src={image6}
			alt="2 Lines Doodle"
			class="absolute w-[16vw] max-h-[100px] top-0 right-0 left-0 mx-auto z-10 opacity-0 !-translate-y-1/2"
		/>
	{/if}
</section>
