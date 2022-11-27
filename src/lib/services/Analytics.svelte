<script>
	import { inject } from '@vercel/analytics'
	import { webVitals } from '$lib/services/vitals'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'

	inject()

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		})
	}
</script>
