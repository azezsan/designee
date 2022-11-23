<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g id="Infinite">
		<path
			id="Left"
			d="M50 50L40 40C34.4771 34.4771 25.5228 34.4772 20 40V40C14.4772 45.5228 14.4772 54.4772 20 60V60C25.5228 65.5228 34.4772 65.5228 40 60L52 48"
			stroke="black"
			stroke-width="4"
			stroke-linecap="round"
		/>
		<path
			id="Right"
			d="M50 50L60 40C65.5229 34.4771 74.4772 34.4772 80 40V40C85.5228 45.5228 85.5228 54.4772 80 60V60C74.4772 65.5228 65.5228 65.5228 60 60L48 48"
			stroke="black"
			stroke-width="4"
			stroke-linecap="round"
		/>
	</g>
</svg>

<style>
	#Left {
		stroke-dasharray: 97.76528930664062;
		stroke-dashoffset: 97.76528930664062;
		animation: left 3s linear infinite alternate forwards;
	}

	#Right {
		stroke-dasharray: 97.76528930664062;
		stroke-dashoffset: 97.76528930664062;
		animation: right 3s linear infinite alternate forwards;
	}

	@keyframes left {
		0% {
			stroke-dashoffset: 0;
		}
		51% {
			stroke-dashoffset: 97.76528930664062;
		}
		100% {
			stroke-dashoffset: 97.76528930664062;
		}
	}

	@keyframes right {
		0% {
			stroke-dashoffset: 0;
		}
		49% {
			stroke-dashoffset: 0;
		}
		100% {
			stroke-dashoffset: 97.76528930664062;
		}
	}
</style>
