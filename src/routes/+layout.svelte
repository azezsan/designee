<script lang="ts">
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>Designee</title>
	<meta
		name="description"
		content="Mary's simple recipe for maple bacon donuts
			 makes a sticky, sweet treat with just a hint
			 of salt that you'll keep coming back for."
	/>
</svelte:head>

<Navbar />
<main>
	<slot />
</main>
<Footer />
