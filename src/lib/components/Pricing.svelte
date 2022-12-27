<script lang="ts">
	import { inview } from 'svelte-inview'
	import image1 from '$lib/assets/doodles/1Line.svg'

	const isProduction = import.meta.env.VITE_VERCEL_ENV === 'production'

	interface Plans {
		header: string
		price: string
		description: string
		benefits: string[]
		priceId: string
	}

	const plans: Plans[] = [
		{
			header: 'Monthly',
			price: '$4,995/m',
			description: 'No minimum commitment. cancel anytime.',
			benefits: ['Unlimited requests', 'Unlimited brands', 'Unlimited users', 'Unlimited stock photos'],
			priceId: isProduction ? 'price_1M7pUHJbsquC2kejNyNv0B3D' : 'price_1M9ar5JbsquC2kejqHHjWeKG'
		},
		{
			header: 'Quarterly',
			price: '$4,495/m',
			description: 'Save $500 per month, Paid quarterly',
			benefits: ['Unlimited requests', 'Unlimited brands', 'Unlimited users', 'Unlimited stock photos'],
			priceId: isProduction ? 'price_1M7pn5JbsquC2kejKneoxIBT' : 'price_1M9asSJbsquC2kejZKcO8lUS'
		},
		{
			header: 'Yearly',
			price: '$3,995/m',
			description: 'Save $1,000 per month, Paid annually',
			benefits: ['Unlimited requests', 'Unlimited brands', 'Unlimited users', 'Unlimited stock photos'],
			priceId: isProduction ? 'price_1M7polJbsquC2kej7MLnkFnf' : 'price_1M9atPJbsquC2kejCyStyofO'
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

	let width: number
</script>

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-200 py-20 sm:py-32 relative" id="Pricing" bind:clientWidth={width}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid">
		<section use:inview on:enter={handleEnter} class="grid gap-8 text-center opacity-0 translate-y-8">
			<h2 class="text-3xl sm:text-5xl font-semibold">Let’s Schedule a Meeting!</h2>
			<p class="text-2xl">Make the wise decision for your business</p>
		</section>
		<section>
			<!-- Calendly inline widget begin -->
			<div
				class="calendly-inline-widget"
				data-url="https://calendly.com/designee/30minute?hide_gdpr_banner=1&primary_color=1A1A1A"
				style="min-width:320px;height:{width <= 1063 ? '1200px' : '750px'};"
			/>
			<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
			<!-- Calendly inline widget end -->
		</section>
	</div>

	{#if lazyLoad}
		<img use:inview on:enter={handleEnter} src={image1} alt="1 Line Doodle" class="absolute w-[16vw] max-h-[100px] top-0 left-0 right-0 mx-auto z-10 opacity-0 !-translate-y-1/2" />
	{/if}
</section>
