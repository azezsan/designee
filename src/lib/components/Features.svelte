<script lang="ts">
	import image1 from '$lib/assets/doodles/Rainbow.svg'
	import ben from '$lib/assets/images/Ben.webp'
	import { inview } from 'svelte-inview'
	const List = [
		{
			header: 'Designs that drive sales',
			description: 'designed to persuade potential customers to make a purchase or take a desired action.'
		},
		{
			header: 'Effortless Communication',
			description: 'Communicate with us without disturbing your busy schedule. We communicate round the clock, effortlessly.'
		},
		{
			header: 'Get your Team members on-board',
			description: 'Want your team on board for review? With us, you can have as many people involved as you like.'
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

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-200 py-20 sm:py-32 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-12">
		<section use:inview on:enter={handleEnter} class="flex flex-col sm:col-span-2 text-center mx-auto gap-7 opacity-0 translate-y-1/3">
			<h2 class="text-5xl font-semibold">Say Goodbye to expensive Freelancers and in-house Designers</h2>
			<p class="text-2xl">We offer unlimited designs and revisions at a flat monthly fee. No recurring charges!</p>
		</section>
		<section use:inview on:enter={handleEnter} class="grid items-start gap-9 p-8 bg-base-300 rounded-3xl opacity-0 translate-y-1/3">
			<span class="text-7xl font-extrabold -mb-10">“</span>
			<p class="text-3xl sm:text-4xl font-medium">if you want to work with a creative team, responsive, and detail focus while executing fast, Designee is what you need!</p>
			<div class="flex gap-4">
				<img src={ben} alt="Ben" class="rounded-full w-[50px] h-[50px]" height="50" width="50" />
				<div class="flex flex-col">
					<span class="text-xl font-semibold">Benjamin Debonneville</span>
					<span class="text-lg">New York, United States</span>
				</div>
			</div>
		</section>
		<ul class="flex flex-col gap-12">
			{#each List as item}
				<li use:inview on:enter={handleEnter} class="flex flex-col gap-2 opacity-0 translate-y-1/3">
					<h2 class="font-medium text-2xl">{item.header}</h2>
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
			alt="Rainbow Doodle"
			class="absolute w-[25vw] max-w-[250px] top-0 left-0 z-10 opacity-0 !-translate-y-1/2 -translate-x-full"
		/>
	{/if}
</section>
