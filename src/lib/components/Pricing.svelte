<script lang="ts">
	import { inview } from 'svelte-inview'
	import image1 from '$lib/assets/doodles/1Line.svg'
	import { getContext } from 'svelte'

	const environment = getContext('environment')
	const isProduction = environment === 'production'

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
</script>

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-200 py-20 sm:py-32 relative" id="Pricing">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16">
		<section use:inview on:enter={handleEnter} class="grid gap-8 text-center opacity-0 translate-y-8">
			<h2 class="text-3xl sm:text-5xl font-semibold">Memberships levels</h2>
			<p class="text-2xl">Make the wise decision for your business</p>
		</section>
		<ul use:inview on:enter={handleEnter} class="grid grid-cols-1 sm:grid-cols-3 gap-8 rounded-3xl opacity-0 translate-y-8">
			{#each plans as plan, i}
				<li class="flex flex-col gap-8 p-6 rounded-3xl bg-base-100">
					{#if i === 0}
						<div class="flex justify-between">
							<h2 class="text-sm font-semibold">{plan.header}</h2>
							<h2 class="badge badge-primary">Popular</h2>
						</div>
					{:else}
						<h2 class="text-sm font-semibold">{plan.header}</h2>
					{/if}

					<h2 class="text-3xl font-bold">{plan.price}</h2>
					<p class="text-sm text-gray-500">{plan.description}</p>
					<div class="grid gap-3">
						<form action="/api/stripe" method="POST" class="grid">
							<input type="hidden" name="priceId" value={plan.priceId} />
							<button class="btn btn-primary py-2 font-semibold" type="submit">Get started!</button>
						</form>
						<a href="https://calendly.com/designee/30minute" target="_blank" rel="noopener noreferrer" class="mx-auto border-b-2 border-dotted">Book a call</a>
					</div>

					<ul class="flex flex-col divide-gray-200 divide-y list-inside list-disc">
						{#each plan.benefits as benefit}
							<li class="p-2">{benefit}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
		<section use:inview on:enter={handleEnter} class="flex flex-col text-center plans-center gap-5 bg-base-300 rounded-3xl py-8 items-center opacity-0 translate-y-8">
			<span class="badge badge-primary">Add-On</span>
			<h2 class="text-3xl font-semibold">Webflow development</h2>
			<p class="text-base">Get a better website faster with Webflow development. Requires a design subscription.</p>
			<h2 class="text-3xl font-semibold">$999/m</h2>
		</section>
	</div>

	{#if lazyLoad}
		<img use:inview on:enter={handleEnter} src={image1} alt="1 Line Doodle" class="absolute w-[16vw] max-h-[100px] top-0 left-0 right-0 mx-auto z-10 opacity-0 !-translate-y-1/2" />
	{/if}
</section>
