<script>
	import { inject } from '@vercel/analytics'
	import { webVitals } from '$lib/services/vitals'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'

	inject()

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID

	if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		})
	}
	console.log('Analytics disabled')

</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-WKFSBS095N"></script>
	<script>
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())

		gtag('config', 'G-WKFSBS095N')
	</script>
</svelte:head>
