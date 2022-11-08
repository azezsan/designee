<script>
	const List = [
		{
			header: 'Rocket',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod'
		},
		{
			header: 'Rocket',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod'
		},
		{
			header: 'Rocket',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod'
		}
	]
</script>

<section class="bg-base-200 py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-12">
		<section class="flex flex-col sm:col-span-2 text-center mx-auto max-w-xl gap-7 ">
			<h2 class="text-5xl font-bold">It’s “you’ll never go back” better</h2>
			<p class="text-xl">
				Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee,
				with designs delivered so fast that it will blow your mind.
			</p>
		</section>
		<section
			class="flex flex-col items-start justify-center gap-6 p-8 bg-base-100 order-last sm:order-none"
		>
			<img
				class="h-6"
				src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
				alt=""
			/>
			<p class="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod</p>
			<div class="flex items-center gap-4">
				<img
					class="h-10 rounded-full"
					src="https://assets.website-files.com/5837424ae11409586f837994/6126a045ae4708114a9f6320_5fb3e6aa7b258c2dfe0928dc.jpeg"
					alt=""
				/>

				<p class="text-lg ">Kevin O'Leary, <span class="font-bold">🦈 Shark Tank</span></p>
			</div>
		</section>
		<ul class="flex flex-col gap-12">
			{#each List as item}
				<li class="flex flex-col gap-2">
					<h2 class="font-bold text-xl">{item.header}</h2>
					<p class="text-base">{item.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
