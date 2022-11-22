<script lang="ts">
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>Designee</title>
	<meta
		name="Design as Subscription"
		content="PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account."
	/>
</svelte:head>

<Navbar />
<main>
	<slot />
</main>
<Footer />
