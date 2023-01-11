<script lang="ts">
	import { inview } from 'svelte-inview'
	import image1 from '$lib/assets/doodles/1Line.svg'
	import { onMount } from 'svelte'

	let isMounted: boolean
	let lazyLoad: boolean

	onMount(() => {
		function isCalendlyEvent(e: MessageEvent) {
			return e.origin === 'https://calendly.com' && e.data.event && e.data.event.indexOf('calendly.') === 0
		}

		window.addEventListener('message', function (e) {
			if (isCalendlyEvent(e)) {
				/* Example to get the name of the event */
				console.log('Event name:', e.data.event)

				/* Example to get the payload of the event */
				console.log('Event details:', e.data.payload)
			}
		})
	})

	const options = {
		rootMargin: '1000px',
		unobserveOnEnter: true
	}

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}

	let width: number
</script>

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-200 py-20 sm:py-32 relative" id="Pricing" bind:clientWidth={width}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid">
		<section use:inview on:enter={handleEnter} class="grid gap-8 text-center opacity-0 translate-y-8">
			<h2 class="text-3xl sm:text-5xl font-semibold">Let’s Schedule a Meeting!</h2>
			<p class="text-2xl">Make the wise decision for your business</p>
		</section>
		<section>
			{#if lazyLoad}
				<!-- Calendly inline widget begin -->
				<div
					class="calendly-inline-widget"
					data-url="https://calendly.com/designee/30minute?primary_color=1A1A1A"
					style="min-width:320px;height:{width <= 1063 ? '1200px' : '750px'};"
				/>
				<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
				<!-- Calendly inline widget end -->
			{:else}
				<div class="h-[750px] w-full bg-base-300" />
			{/if}
		</section>
	</div>

	{#if lazyLoad}
		<img use:inview on:enter={handleEnter} src={image1} alt="1 Line Doodle" class="absolute w-[16vw] max-h-[100px] top-0 left-0 right-0 mx-auto z-10 opacity-0 !-translate-y-1/2" />
	{/if}
</section>
