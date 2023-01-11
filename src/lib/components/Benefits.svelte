<script lang="ts">
	import image1 from '$lib/assets/doodles/WigglyLine.svg'
	import Speed from '$lib/assets/icons/Speed.svelte'
	import Stars from '$lib/assets/icons/Stars.svelte'
	import Fee from '$lib/assets/icons/Fee.svelte'
	import Unique from '$lib/assets/icons/Unique.svelte'
	import Control from '$lib/assets/icons/Control.svelte'
	import Board from '$lib/assets/icons/Board.svelte'

	import { inview } from 'svelte-inview'

	const List = [
		{
			src: Board,
			header: 'Design Board',
			description: 'Add as many design requests as you like. No extra charges.'
		},
		{
			src: Speed,
			header: 'Quick Turnaround',
			description: 'No more waiting for days to get designs. Get results in a few days.'
		},
		{
			src: Fee,
			header: 'Flat Monthly Fee',
			description: 'No hidden charges. No recurring charges.'
		},
		{
			src: Stars,
			header: 'Top Notch Quality',
			description: 'The perfect blend of creativity and marketing tactics.'
		},
		{
			src: Control,
			header: 'Have Control of Plan',
			description: 'Scale, slow down or quit, you have control at all times.'
		},
		{
			src: Unique,
			header: 'Designed for You',
			description: 'Receive designs tailored to your audience and business.'
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

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-100 py-20 sm:py-32 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section use:inview on:enter={handleEnter} class="flex flex-col mx-auto max-w-lg text-center items-center gap-8 opacity-0 translate-y-8">
			<h1 class="text-3xl sm:text-5xl font-semibold">Membership benefits</h1>
			<p class="text-2xl">A design service crafted to serve you in the best way possible without compromising on the quality of designs and service.</p>
			<a href="https://calendly.com/designee/30minute" target="_blank" rel="noopener noreferrer" class="button_parent mx-auto" role="button">
				<span class="button_top_300">Schedule Your FREE Audit Call Now</span>
			</a>
		</section>
		<ul class="grid grid-cols-1 sm:grid-cols-3 gap-24">
			{#each List as item}
				<li use:inview on:enter={handleEnter} class="flex flex-col text-center items-center gap-8 opacity-0 translate-y-8">
					{#if lazyLoad}
						<svelte:component this={item.src} />
					{/if}
					<h2 class="text-2xl font-medium">{item.header}</h2>
					<p class="text-xl">{item.description}</p>
				</li>
			{/each}
		</ul>
	</div>

	{#if lazyLoad}
		<img
			use:inview
			on:enter={handleEnter}
			src={image1}
			alt="Wiggly Line Doodle"
			class="absolute w-[16vw] max-h-[120px] top-0 right-0 left-0 mx-auto z-10 opacity-0 !-translate-y-1/2"
		/>
	{/if}
</section>
