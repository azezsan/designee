<script lang="ts">
	import image1 from '$lib/assets/doodles/D10.svg'
	import image2 from '$lib/assets/doodles/D9.svg'
	import { inview } from 'svelte-inview'

	const scope = [
		'Websites',
		'Mobile apps',
		'Logos & branding',
		'Design systems',
		'SAAS',
		'Wireframes',
		'Stationery',
		'Pitch decks',
		'Slide decks',
		'Direct mail',
		'Infographics',
		'Brochures',
		'Signage',
		'Brand guides',
		'Social media graphics',
		'Billboards',
		'Trade show banners',
		'Email graphics',
		'Resumes',
		'Business cards',
		'Packaging',
		'Blog graphics',
		'Digital ads',
		'Icons'
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
		<section>
			<h2 class="text-3xl sm:text-5xl font-bold text-center">Apps, websites, logos & more.</h2>
		</section>
		<ul class="grid grid-cols-1 sm:grid-cols-3 gap-8 p-4 sm:p-10 border-base-300 border-8 rounded-3xl relative">
			{#each scope as item}
				<li class="border-b-4 border-base-300 pb-2 ">
					<h2 class="text-xl font-semibold">{item}</h2>
				</li>
			{/each}
			{#if lazyLoad}
				<img src={image1} alt="Doodle" class="absolute w-[16vw] max-w-[100px] top-0 right-0 z-10 -translate-y-1/2 translate-x-1/2" />
			{/if}
		</ul>
	</div>

	{#if lazyLoad}
		<img src={image2} alt="Doodle" class="absolute w-[16vw] max-w-[100px] top-0 left-0 z-10 -translate-y-1/2" />
	{/if}
</section>
