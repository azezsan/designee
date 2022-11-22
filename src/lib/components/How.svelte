<script lang="ts">
	import image1 from '$lib/assets/doodles/D3.svg'
	import image2 from '$lib/assets/doodles/D4.svg'
	import image3 from '$lib/assets/doodles/D5.svg'
	import Arrow from '$lib/assets/icons/Arrow.svelte'
	import { inview } from 'svelte-inview'

	const Features = [
		{
			icon: Arrow,
			alt: 'Rocket',
			description: 'Subscription model with unlimited designs'
		},
		{
			icon: Arrow,
			alt: 'Rocket',
			description: 'Quick Turnaround in receiving your designs'
		},
		{
			icon: Arrow,
			alt: 'Rocket',
			description: 'Unlimited revisions to ensure your 100% Satisfaction'
		}
	]

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}
</script>

<section class="bg-base-100 py-20 sm:py-32 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section class="flex flex-col mx-auto max-w-lg text-center gap-8 opacity-0 translate-y-8" use:inview on:enter={handleEnter}>
			<h2 class="text-5xl font-bold">Designs that resonate with your Audience</h2>
			<p class="text-xl">We create designs that translate your brand image. Use our unique features:</p>
		</section>
		<ul class="grid grid-cols-1 sm:grid-cols-3 gap-24 opacity-0 translate-y-8" use:inview on:enter={handleEnter}>
			{#each Features as feature}
				<li class="flex flex-col gap-4 items-center text-center">
					<svelte:component this={feature.icon} />
					<p class="text-xl">{feature.description}</p>
				</li>
			{/each}
		</ul>
		<section
			class="flex flex-col relative justify-center gap-8 text-center bg-base-200 p-10 sm:p-16 rounded-3xl opacity-0 translate-y-8"
			use:inview
			on:enter={handleEnter}
		>
			<img
				use:inview
				on:enter={handleEnter}
				src={image1}
				alt="Doodle"
				class="absolute w-[16vw] max-w-[200px] -left-[5%] -top-[9%] opacity-0 -translate-x-44"
			/>
			<img
				use:inview
				on:enter={handleEnter}
				src={image2}
				alt="Doodle"
				class="absolute w-[16vw] max-w-[200px] -right-[8%] -bottom-[10%] opacity-0 translate-x-44"
			/>

			<img class="h-8" src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg" alt="" />
			<p class="text-3xl sm:text-5xl font-semibold">Designee are offering amazing services! Loved my work</p>
			<img class="h-8" src="https://assets.website-files.com/5837424ae11409586f837994/6119d7e989cff23b39d11a86_webflow.svg" alt="" />
		</section>
	</div>
	<img
		use:inview
		on:enter={handleEnter}
		src={image3}
		alt="Doodle"
		class="absolute w-[16vw] max-w-[250px] -left-[2%] -translate-x-44 z-10"
	/>
</section>

<style>
</style>
