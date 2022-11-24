<script lang="ts">
	import image1 from '$lib/assets/doodles/D5.svg'
	import { inview } from 'svelte-inview'
	const List = [
		{
			header: 'Effortless Communication',
			description: 'Communicate with us without disturbing your busy schedule. We communicate round the clock, effortlessly.'
		},
		{
			header: 'Stay Updated',
			description: 'We will keep you updated on progress and completion through Trello, or any other tool you like!'
		},
		{
			header: 'Get your Team members on-board',
			description: 'Want your team on board for review? With us, you can have as many people involved as you like.'
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

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-200 py-20 sm:py-32 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-12">
		<section use:inview on:enter={handleEnter} class="flex flex-col sm:col-span-2 text-center mx-auto gap-7 opacity-0 translate-y-8">
			<h2 class="text-5xl font-semibold">Say Goodbye to expensive Freelancers and in-house Designers</h2>
			<p class="text-2xl">We offer unlimited designs and revisions at a flat monthly fee. No recurring charges!</p>
		</section>
		<section
			use:inview
			on:enter={handleEnter}
			class="flex flex-col items-start justify-center gap-6 p-8 bg-base-300 order-last sm:order-none rounded-3xl opacity-0 translate-y-8"
		>
			<!-- !!! CHANGE THIS -->
			<!-- <img class="h-6" src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg" alt="" />
			<p class="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod</p>
			<div class="flex items-center gap-4">
				<img
					class="h-10 rounded-full"
					src="https://assets.website-files.com/5837424ae11409586f837994/6126a045ae4708114a9f6320_5fb3e6aa7b258c2dfe0928dc.jpeg"
					alt=""
				/>

				<p class="text-lg ">Kevin O'Leary, <span class="font-bold">🦈 Shark Tank</span></p>
			</div> -->
		</section>
		<ul class="flex flex-col gap-12">
			{#each List as item}
				<li use:inview on:enter={handleEnter} class="flex flex-col gap-2 opacity-0 translate-y-8">
					<h2 class="font-medium text-2xl">{item.header}</h2>
					<p class="text-xl">{item.description}</p>
				</li>
			{/each}
		</ul>
	</div>

	{#if lazyLoad}
		<img src={image1} alt="Doodle" class="absolute w-[16vw] max-w-[130px] top-0 left-0 z-10 -translate-y-1/2" />
	{/if}
</section>
