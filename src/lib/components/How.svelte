<script>
	import icon1 from '$lib/assets/icon1.svg'
	import icon2 from '$lib/assets/icon2.svg'
	import icon3 from '$lib/assets/icon3.svg'

	const Features = [
		{
			icon: icon1,
			alt: 'Rocket',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod'
		},
		{
			icon: icon2,
			alt: 'Rocket',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod'
		},
		{
			icon: icon3,
			alt: 'Rocket',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod'
		}
	]
</script>

<section class="bg-base-100 py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section class="flex flex-col mx-auto max-w-lg text-center gap-8">
			<h2 class="text-5xl font-bold">We didn't reinvent the wheel, just design</h2>
			<p class="text-xl">
				Design as you know it is out the door. Design as you want it just arrived.
			</p>
		</section>
		<ul class="grid grid-cols-1 sm:grid-cols-3 gap-24">
			{#each Features as feature}
				<li class="flex flex-col items-center text-center gap-8">
					<img src={feature.icon} alt={feature.alt} />
					<p class="text-xl">{feature.description}</p>
				</li>
			{/each}
		</ul>
		<section class="flex flex-col justify-center gap-8 text-center bg-base-200 p-10 sm:p-16">
			<img
				class="h-8"
				src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
				alt=""
			/>
			<p class="text-3xl sm:text-5xl font-semibold">
				Designjoy shows that they know the art of subtlety.
			</p>
			<img
				class="h-8"
				src="https://assets.website-files.com/5837424ae11409586f837994/6119d7e989cff23b39d11a86_webflow.svg"
				alt=""
			/>
		</section>
	</div>
</section>
