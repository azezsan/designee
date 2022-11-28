<script lang="ts">
	import Hero from '$lib/components/Hero.svelte'
	import Carousel from '$lib/components/Carousel.svelte'
	import Benefits from '$lib/components/Benefits.svelte'
	import How from '$lib/components/How.svelte'
	import Scope from '$lib/components/Scope.svelte'
	import Protfolio from '$lib/components/Protfolio.svelte'
	import Pricing from '$lib/components/Pricing.svelte'
	import Features from '$lib/components/Features.svelte'
	import Faq from '$lib/components/Faq.svelte'

	const vercel = import.meta.env.VITE_VERCEL_ENV
</script>

<p>{vercel}</p>

<Hero />
<Carousel />
<How />
<Features />
<Benefits />
<Protfolio />
<Scope />
<Pricing />
<Faq />
