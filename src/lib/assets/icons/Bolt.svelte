<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		id="Bolt"
		d="M53.4758 15.0231L21.2324 55.499C19.9278 57.1368 21.0939 59.5567 23.1878 59.5567H40.3734C41.976 59.5567 43.1647 61.0434 42.8121 62.6067L38.2443 82.8606C37.681 85.3583 40.7907 86.9875 42.5236 85.1025L77.6467 46.8935C79.1199 45.2908 77.9831 42.7016 75.8061 42.7016H57.3957C55.8867 42.7016 54.7216 41.3749 54.9166 39.8786L57.9103 16.9038C58.2374 14.393 55.0535 13.0426 53.4758 15.0231Z"
		stroke="black"
		stroke-width="4"
		stroke-linecap="round"
	/>
</svg>

<style>
	#Bolt {
		stroke-dasharray: 217;
		stroke-dashoffset: 217;
		animation: dash 2s linear infinite alternate forwards;
	}

	@keyframes dash {
		33% {
			stroke-dashoffset: 217;
		}
		66% {
			stroke-dashoffset: 0;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
</style>
