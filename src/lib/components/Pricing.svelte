<script lang="ts">
	import { inview } from 'svelte-inview'
	import image1 from '$lib/assets/doodles/D11.svg'

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
			priceId: 'price_1M3zuiJbsquC2kejKnPSNySx'
		},
		{
			header: 'Quarterly',
			price: '$4,495/m',
			description: 'Save $500 per month, Paid quarterly',
			benefits: ['Unlimited requests', 'Unlimited brands', 'Unlimited users', 'Unlimited stock photos'],
			priceId: 'price_1M6ExhJbsquC2kej8d1CQ0Nd'
		},
		{
			header: 'Yearly',
			price: '$3,995/m',
			description: 'Save $1,000 per month, Paid annually',
			benefits: ['Unlimited requests', 'Unlimited brands', 'Unlimited users', 'Unlimited stock photos'],
			priceId: 'price_1M6ExhJbsquC2kejTqiwLid8'
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

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-200 py-20 sm:py-32 relative" id="Pricing">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16">
		<section use:inview on:enter={handleEnter} class="grid gap-8 text-center opacity-0 translate-y-8">
			<h2 class="text-3xl sm:text-5xl font-semibold">Memberships levels</h2>
			<p class="text-2xl">Choose a plan that's right for you.</p>
		</section>
		<ul use:inview on:enter={handleEnter} class="grid grid-cols-1 sm:grid-cols-3 gap-8 rounded-3xl opacity-0 translate-y-8">
			{#each plans as plan}
				<li class="flex flex-col gap-8 p-6 rounded-3xl bg-base-100">
					<h2 class="text-sm font-semibold">{plan.header}</h2>
					<h2 class="text-3xl font-bold">{plan.price}</h2>
					<p class="text-sm text-gray-500">{plan.description}</p>
					<div class="grid gap-3">
						<form action="/api/stripe" method="POST" class="grid">
							<input type="hidden" name="priceId" value={plan.priceId} />
							<button class="btn btn-primary py-2 font-semibold" type="submit">Get started!</button>
						</form>
						<a
							href="https://calendly.com/designee/30minute"
							target="_blank"
							rel="noopener noreferrer"
							class="mx-auto border-b-2 border-dotted">Book a call</a
						>
					</div>

					<ul class="flex flex-col divide-gray-200 divide-y list-inside list-disc">
						{#each plan.benefits as benefit}
							<li class="p-2">{benefit}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
		<section
			use:inview
			on:enter={handleEnter}
			class="flex flex-col text-center plans-center gap-5 bg-base-300 rounded-3xl py-8 items-center opacity-0 translate-y-8"
		>
			<span class="badge badge-primary">Add-On</span>
			<h2 class="text-3xl font-semibold">Webflow development</h2>
			<p class="text-base">All plans include a 14-day free trial. No credit card required.</p>
			<h2 class="text-3xl font-semibold">$999/m</h2>
		</section>
	</div>

	{#if lazyLoad}
		<img src={image1} alt="Doodle" class="absolute top-0 left-0 right-0 mx-auto z-10 -translate-y-1/2" />
	{/if}
</section>
