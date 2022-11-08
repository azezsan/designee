<script>
	const List = [
		{
			header: 'Design board',
			description: "Add as many design requests to your board as you'd like."
		},
		{
			header: 'Lightning fast delivery',
			description: 'Get your design one at a time in just a few days on average.'
		},
		{
			header: 'Fixed monthly rate',
			description: 'No surprises here! Pay the same fixed price each month.'
		},
		{
			header: 'Top-notch quality',
			description: 'Insane design quality at your fingertips whenever you need it.'
		},
		{
			header: 'Flexible and scalable',
			description: 'Scale up or down as needed, and pause or cancel at anytime.'
		},
		{
			header: 'Unique and all yours',
			description: 'Each of your designs is made especially for you and is 100% yours.'
		}
	]
</script>

<section class="bg-base-100 py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section class="flex flex-col mx-auto max-w-lg text-center gap-8">
			<h1 class="text-3xl sm:text-5xl font-bold">Membership benefits</h1>
			<p class="text-2xl ">
				Perks so good you'll never need to go anywhere else for your design. Seriously.
			</p>
			<button class="btn btn-primary text-lg mx-auto">See plans</button>
		</section>
		<ul class="grid grid-cols-1 sm:grid-cols-3 gap-24">
			{#each List as item}
				<li class="flex flex-col text-center gap-8">
					<h2 class="text-2xl font-bold">{item.header}</h2>
					<p class="text-base">{item.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
