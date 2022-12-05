<script lang="ts">
	import '../app.css'
	import preview from '$lib/assets/images/preview.jpg'
	import Analytics from '$lib/services/vercel/Analytics.svelte'
	import Gtm from '$lib/services/google/Gtm.svelte'

	const title = 'Designee - Design Subscription Service 🎨'
	const description = 'The best Design subscription service for you, Unlimited design & revisions for Apps, Websites, Social Media, and a lot more!'

	console.log(import.meta.env.VITE_VERCEL_ENV)
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content="#ffffff" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://designee.io" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={preview} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={preview} />
	<meta property="twitter:card" content="summary_large_image" />

	<script src="https://js.stripe.com/v3" async />
</svelte:head>

<Gtm />
<Analytics />

<slot />
