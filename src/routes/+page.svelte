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


	export let data
</script>

<main>
	<h1><span>Hello from the edge!</span></h1>

	<div class="info">
		<div class="block">
			<div class="contents">
				<span>Your city</span>
				<strong>{data.city}</strong>
			</div>
		</div>
		<div class="block">
			<div class="contents">
				<span>Your IP address</span>
				<strong>{data.ip}</strong>
			</div>
		</div>
	</div>
</main>
