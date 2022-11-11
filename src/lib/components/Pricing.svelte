<script>
	const Pricing = [
		{
			heaeder: 'Monthly',
			description: 'No minimum commitment. Pause or cancel anytime.',
			price: '$4,995/m',
			priceDescription: 'Pause or cancel anytime',

			included: [
				'Unlimited requests',
				'Unlimited brands',
				'Unlimited users',
				'Unlimited stock photos via Shutterstock',
				'Pause or cancel anytime'
			]
		},
		{
			heaeder: 'Quarterly',
			description: 'Save 10% compared to monthly.',
			price: '$4,495/m',
			priceDescription: 'paid quarterly',

			included: [
				'Unlimited requests',
				'Unlimited brands',
				'Unlimited users',
				'Unlimited stock photos via Shutterstock'
			]
		},
		{
			heaeder: 'Yearly',
			description: 'Save 20% compared to monthly.',
			price: '$3,995/m',
			priceDescription: 'paid yearly',

			included: [
				'Unlimited requests',
				'Unlimited brands',
				'Unlimited users',
				'Unlimited stock photos via Shutterstock'
			]
		}
	]
</script>

<section class="bg-base-200 py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section class="flex flex-col mx-auto max-w-lg text-center gap-8">
			<h1 class="text-3xl sm:text-5xl font-bold">Memberships levels</h1>
			<p class="text-2xl ">Choose a plan that's right for you.</p>
		</section>
		<div class="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-1">
			{#each Pricing as item}
				<section class="grid gap-1">
					<div class="flex flex-col justify-start rounded p-6 shadow-lg bg-base-100 gap-12">
						<div class="h-24">
							<h3 class="text-2xl font-bold">{item.heaeder}</h3>
							<span class="text-base font-normal block">{item.description}</span>
						</div>
						<div>
							<h2 class="text-4xl font-bold">{item.price}</h2>
							<span class="text-base font-normal block">{item.priceDescription}</span>
							<button class="btn btn-primary mt-8">Get started</button>
						</div>
					</div>
					<ul class="flex flex-col justify-start rounded p-6 shadow-lg bg-base-100 gap-6 h-96">
						<span class="font-bold">what's included:</span>
						{#each item.included as included}
							<li class="text-base font-normal">{'• ' + included}</li>
						{/each}
					</ul>
				</section>
			{/each}
			<section class="grid gap-1">
				<div class="flex flex-col justify-start rounded p-6 shadow-lg bg-base-100 gap-6 h-auto">
					<div class="grid gap-3">
						<img
							src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c32fdaa097c267b19_dFrame.svg"
							alt=""
							class="h-24 mt-10"
						/>
						<h3 class="text-2xl font-bold">Custom</h3>
						<span class="text-base font-normal block">Need something different? We can help.</span>
						<a href="/" class="font-bold">Contact us</a>
					</div>
					<div class="border-2"/>
					<div class="grid gap-3">
						<img
							src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c5e7a2adf4b36ad2c_ddGroup.svg"
							alt=""
							class="h-24 mt-10"
						/>
						<h3 class="text-2xl font-bold">Refer a friend & earn</h3>
						<span class="text-base font-normal block">Earn 5% monthly recurring commissions for each referral.</span>
						<a href="/" class="font-bold">Join now</a>
					</div>
				</div>
			</section>
			<section class="flex flex-col bg-base-300 text-center rounded shadow-lg sm:col-span-4 p-8 gap-4">
				<h2 class="text-2xl font-bold">Custom plan</h2>
				<p>Get a better website faster with Webflow development. Requires a design subscription.</p>
				<h2 class="text-2xl font-bold">$999/m</h2>
			</section>
		</div>
	</div>
</section>
