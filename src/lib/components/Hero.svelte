<script lang="ts">
	import image1 from '$lib/assets/doodles/D1.svg'
	import image2 from '$lib/assets/doodles/D2.svg'
	import { inview } from 'svelte-inview'

	let lazyLoad: boolean

	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	}

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}
</script>

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-300 py-16 sm:pb-24 sm:pt-44 relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 place-content-center">
		<section use:inview on:enter={handleEnter} class="flex flex-col gap-8 text-center max-w-4xl max-h-96 opacity-0 translate-y-8">
			<h1 class="text-3xl sm:text-6xl font-bold ">Your designing partner- Unlike you've ever seen before</h1>
			<p class="text-2xl">Design services on a subscription model!</p>
			<a href={'#Pricing'} class="btn btn-primary mx-auto">See plans</a>
			<p>Designs you'll ❤️, guaranteed</p>
		</section>
	</div>

	{#if lazyLoad}
		<img
			use:inview
			on:enter={handleEnter}
			src={image1}
			alt="Doodle"
			class="absolute w-[16vw] max-w-[200px] -left-5 top-[15%] opacity-0 -translate-x-44"
		/>
		<img
			use:inview
			on:enter={handleEnter}
			src={image2}
			alt="Doodle"
			class="absolute w-[16vw] max-w-[200px] -right-5 top-[15%] opacity-0 translate-x-44"
		/>
	{/if}
</section>
