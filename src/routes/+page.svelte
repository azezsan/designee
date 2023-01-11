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
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Reviews from '$lib/components/Reviews.svelte'
</script>

<Header />
<main>
	<Hero />
	<Carousel />
	<How />
	<Features />
	<Benefits />
	<Protfolio />
	<Scope />
	<Pricing />
	<Reviews />
	<Faq />
</main>
<Footer />
