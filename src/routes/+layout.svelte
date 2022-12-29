<script lang="ts">
	import '../app.css'
	import preview from '$lib/assets/images/preview.jpg'
	import Analytics from '$lib/services/vercel/Analytics.svelte'
	import Gtm from '$lib/services/google/Gtm.svelte'
	import Loading from '$lib/assets/icons/Loading.svelte'
	import { onMount } from 'svelte'

	const title = 'Designee - Design Subscription Service 🎨'
	const description = 'The best Design subscription service for you, Unlimited design & revisions for Apps, Websites, Social Media, and a lot more!'

	let loading = true
	let hidden = false

	onMount(() => {
		loading = false

		setTimeout(() => {
			hidden = true
		}, 1000)
	})
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
</svelte:head>

<div
	class="fixed grid items-center justify-center top-0 left-0 bottom-0 right-0 z-[9999] h-screen w-screen bg-[#fffbf5] transition duration-1000 
	{loading ? 'opacity-100' : 'opacity-0'} {hidden ? 'hidden' : 'block'}"
>
	<Loading />
</div>

{#if !loading}
	<Gtm />
	<Analytics />
{/if}

<slot />
