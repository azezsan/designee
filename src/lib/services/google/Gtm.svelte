<script lang="ts" context="module">
	const isProduction = import.meta.env.VITE_VERCEL_ENV === 'production'
</script>

<svelte:head>
	{#if isProduction}
		<script>
			;(function (w, d, s, l, i) {
				w[l] = w[l] || []
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : ''
				j.async = true
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
				f.parentNode.insertBefore(j, f)
			})(window, document, 'script', 'dataLayer', 'GTM-W658KV4')
		</script>
	{:else}
		<script>
			;(function (w, d, s, l, i) {
				w[l] = w[l] || []
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : ''
				j.async = true
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl + '&gtm_auth=8Y08YJicQFH0tVUVEq7FvQ&gtm_preview=env-5&gtm_cookies_win=x'
				f.parentNode.insertBefore(j, f)
			})(window, document, 'script', 'dataLayer', 'GTM-W658KV4')
		</script>
	{/if}
</svelte:head>

<!-- svelte-ignore a11y-missing-attribute -->
<noscript
	><iframe
		src={'https://www.googletagmanager.com/ns.html?id=GTM-W658KV4' + (isProduction ? '' : '&gtm_auth=8Y08YJicQFH0tVUVEq7FvQ&gtm_preview=env-5&gtm_cookies_win=x')}
		height="0"
		width="0"
		style="display:none;visibility:hidden"
	/></noscript
>
