<script lang="ts">
	import image1 from '$lib/assets/images/work-1.webp'
	import image2 from '$lib/assets/images/work-2.webp'
	import image3 from '$lib/assets/images/work-3.webp'
	import image4 from '$lib/assets/images/work-4.webp'
	import image5 from '$lib/assets/doodles/D9.svg'
	import { inview } from 'svelte-inview'
	import type { ObserverEventDetails, Options } from 'svelte-inview'

	const List = [
		{
			image: image2,
			alt: 'Kam'
		},
		{
			image: image4,
			alt: 'Kam'
		},
		{
			image: image1,
			alt: 'Kam'
		},
		{
			image: image3,
			alt: 'Kam'
		}
	]

	const featured = [
		{
			image: 'https://assets.website-files.com/5837424ae11409586f837994/5e9ba463b27cf60b2c9a7554_dribbble-logo.svg',
			alt: 'Kam'
		},
		{
			image: 'https://assets.website-files.com/5837424ae11409586f837994/5e9ba4634c5ff90b59c1abdf_lapa-logo.svg',
			alt: 'Kam'
		},
		{
			image: 'https://assets.website-files.com/5837424ae11409586f837994/5e9ba46388adf7d226b3bd2e_awwwards-seeklogo.com.svg',
			alt: 'Kam'
		},
		{
			image: 'https://assets.website-files.com/5837424ae11409586f837994/5e9ba4639aae7e3a14b5f282_product-hunt-logo-horizontal-black.svg',
			alt: 'Kam'
		}
	]

	let lazyLoad: boolean

	const options: Options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	}

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}
</script>

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-300 py-20 sm:py-32 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section use:inview on:enter={handleEnter} class="flex flex-col mx-auto max-w-lg text-center gap-8 opacity-0 translate-y-8">
			<h1 class="text-3xl sm:text-5xl font-semibold">Recent work</h1>
			<p class="text-2xl ">Award winning designs, and nothing less.</p>
		</section>
		<ul class="grid grid-cols-1 sm:grid-cols-2 gap-11">
			{#each List as item}
				<li use:inview on:enter={handleEnter} class="opacity-0 translate-y-8">
					{#if lazyLoad}
						<img src={item.image} alt={item.alt} height="585" width="585" />
					{:else}
						<div class="h-[585px] w-[585px]" />
					{/if}
				</li>
			{/each}
		</ul>
		<section use:inview on:enter={handleEnter} class="grid mx-auto text-center gap-6 opacity-0 translate-y-8">
			<h2 class="text-2xl">Designs commonly featured by</h2>
			<ul class="flex justify-center gap-6">
				{#each featured as item}
					<li>
						{#if lazyLoad}
							<img src={item.image} alt={item.alt} class="h-6" />
						{:else}
							<div class="h-[24px]" />
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
			src={image5}
			alt="Doodle"
			class="absolute w-[16vw] max-w-[100px] left-5 -bottom-[4%] opacity-0 z-10 -translate-x-24"
		/>
	{/if}
</section>
