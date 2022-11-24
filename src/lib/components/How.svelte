<script lang="ts">
	import image1 from '$lib/assets/doodles/3Lines.svg'
	import image2 from '$lib/assets/doodles/YellowDots.svg'
	import Arrow from '$lib/assets/icons/Arrow.svelte'
	import Bolt from '$lib/assets/icons/Bolt.svelte'
	import Infinite from '$lib/assets/icons/Infinite.svelte'
	import { inview } from 'svelte-inview'

	const Features = [
		{
			icon: Infinite,
			description: 'Subscription model with unlimited designs'
		},
		{
			icon: Bolt,
			description: 'Quick Turnaround in receiving your designs'
		},
		{
			icon: Arrow,
			description: 'Unlimited revisions to ensure your 100% Satisfaction'
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

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-100 py-20 sm:py-32 relative" id="How">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section class="flex flex-col mx-auto max-w-lg text-center gap-8 opacity-0 translate-y-8" use:inview on:enter={handleEnter}>
			<h2 class="text-5xl font-bold">Designs that resonate with your Audience</h2>
			<p class="text-xl">We create designs that translate your brand image. Use our unique features:</p>
		</section>
		<ul class="grid grid-cols-1 sm:grid-cols-3 gap-24 opacity-0 translate-y-8" use:inview on:enter={handleEnter}>
			{#each Features as feature}
				<li class="flex flex-col gap-4 items-center text-center">
					{#if lazyLoad}
						<svelte:component this={feature.icon} />
					{/if}
					<p class="text-xl">{feature.description}</p>
				</li>
			{/each}
		</ul>
		<section
			class="grid relative justify-center gap-8 text-center bg-base-300 p-10 sm:p-16 rounded-3xl opacity-0 translate-y-8"
			use:inview
			on:enter={handleEnter}
		>
			{#if lazyLoad}
				<img src={image1} alt="3 lines Doodle" class="absolute w-[16vw] max-w-[120px] top-16 left-5 -translate-x-1/2 -translate-y-1/2 " />
				<img src={image2} alt="Yellow Dots Doodle" class="absolute w-[16vw] max-w-[120px] bottom-5 right-0 translate-x-1/2 translate-y-1/2" />

				<p class="text-3xl sm:text-4xl font-medium">Designee are offering amazing services! Loved my work</p>
				<p class="text-xl sm:text-2xl">Webflow website design</p>
			{/if}
		</section>
	</div>
</section>

<style>
</style>
