<script lang="ts">
	import '../app.css'
	import Analytics from '$lib/services/Analytics.svelte';
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>Designee</title>
	<meta
		name="Designee - Your designing partner"
		content="The best Design subscription service for you, Unlimited design & revisions for Apps, Websites, Social Media, and a lot more!"
	/>
</svelte:head>

<Analytics />

<Header />
<main>
	<slot />
</main>
<Footer />
