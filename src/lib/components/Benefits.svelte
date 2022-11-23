<script lang="ts">
	import image1 from '$lib/assets/doodles/D7.svg'
	import image2 from '$lib/assets/doodles/D8.svg'
	import Scale from '$lib/assets/icons/Scale.svelte'
	import Stars from '$lib/assets/icons/Stars.svelte'
	import Fee from '$lib/assets/icons/Fee.svelte'
	import Face from '$lib/assets/icons/Face.svelte'
	import Board from '$lib/assets/icons/Board.svelte'

	import { inview } from 'svelte-inview'

	const List = [
		{
			src: Scale,
			alt: '',
			header: 'Design Board',
			description: "Add as many design requests to your board as you'd like."
		},
		{
			src: Stars,
			alt: '',
			header: 'Lightning fast delivery',
			description: 'Get your design one at a time in just a few days on average.'
		},
		{
			src: Fee,
			alt: '',
			header: 'Fixed monthly rate',
			description: 'No surprises here! Pay the same fixed price each month.'
		},
		{
			src: Face,
			alt: '',
			header: 'Top-notch quality',
			description: 'Insane design quality at your fingertips whenever you need it.'
		},
		{
			src: Board,
			alt: '',
			header: 'Flexible and scalable',
			description: 'Scale up or down as needed, and pause or cancel at anytime.'
		},
		{
			src: Board,
			alt: '',
			header: 'Unique and all yours',
			description: 'Each of your designs is made especially for you and is 100% yours.'
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

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-100 py-20 sm:py-32 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section
			use:inview
			on:enter={handleEnter}
			class="flex flex-col mx-auto max-w-lg text-center items-center gap-8 opacity-0 translate-y-8"
		>
			<h1 class="text-3xl sm:text-5xl font-semibold">Membership benefits</h1>
			<p class="text-2xl">Perks so good you'll never need to go anywhere else for your design. Seriously.</p>
			<a href={'#Pricing'} class="btn btn-primary">See plans</a>
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
			alt="Doodle"
			class="absolute w-[16vw] max-w-[100px] right-0 left-0 mx-auto -bottom-[6%] z-10 opacity-0 -translate-y-8 rotate-3"
		/>
		<img
			use:inview
			on:enter={handleEnter}
			src={image2}
			alt="Doodle"
			class="absolute w-[16vw] max-w-[150px] right-2 -bottom-[10%] z-10 opacity-0 translate-x-32"
		/>
	{/if}
</section>
