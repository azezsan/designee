<script lang="ts">
	import image1 from '$lib/assets/doodles/D1.svg'
	import image2 from '$lib/assets/doodles/D2.svg'
	import { inview } from 'svelte-inview'

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}
</script>

<section class="bg-base-200 py-16 sm:pb-24 sm:pt-44 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 place-content-center">
		<section use:inview on:enter={handleEnter} class="flex flex-col gap-8 text-center max-w-4xl max-h-96 opacity-0 translate-y-8">
			<h1 class="text-3xl sm:text-6xl font-bold ">Your designing partner- Unlike you've ever seen before</h1>
			<p class="text-2xl">Design services on a subscription model!</p>
			<button class="btn btn-primary mx-auto">See plans</button>
			<p>Designs you'll ❤️, guaranteed</p>
		</section>
	</div>
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
</section>
