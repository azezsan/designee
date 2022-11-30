<script>
	import { inject } from '@vercel/analytics'
	import { webVitals } from '$lib/services/vitals'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { getContext } from 'svelte'

	const environment = getContext('environment')

	if (environment === 'production') {
		inject()
	
		let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID
	
		if (browser && analyticsId) {
			webVitals({
				path: $page.url.pathname,
				params: $page.params,
				analyticsId
			})
		}
	} else {
		console.log('Analytics disabled')
	}
</script>
