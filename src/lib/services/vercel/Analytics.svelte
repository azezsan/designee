<script>
	import { inject } from '@vercel/analytics'
	import { webVitals } from '$lib/services/vercel/vitals'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID

	const isProduction = import.meta.env.VITE_VERCEL_ENV === 'production'

	if (browser && analyticsId && isProduction) {
		inject()

		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		})
	}
</script>
