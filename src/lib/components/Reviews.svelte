<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview'

	interface Reviews {
		body: string
		author: string
	}

	const reviews: Reviews[] = [
		{
			body: 'I downloaded Pocket today and turned $5000 into $25,000 in half an hour.',
			author: 'CrazyInvestor'
		},
		{
			body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.',
			author: 'CluelessButRich'
		},
		{
			body: 'Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.',
			author: 'LivingDaDream'
		},
		{
			body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.',
			author: 'JordanBelfort1962'
		},
		{
			body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
			author: 'MrBurns'
		},
		{
			body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!',
			author: 'LazyRich99'
		},
		{
			body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
			author: 'SarahLuvzCash'
		},
		{
			body: 'Yeah, you read that right. Want your own island too? Get Pocket.',
			author: 'ScroogeMcduck'
		},
		{
			body: 'After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?',
			author: 'BruceWayne'
		},
		{
			body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
			author: 'RichieRich'
		},
		{
			body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
			author: 'TheCountOfMonteChristo'
		},
		{
			body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
			author: 'ClarkKent'
		},
		{
			body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
			author: 'GeorgeCostanza'
		},
		{
			body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
			author: 'JeffBezos'
		}
	]

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}

	function chunkArray(array: Reviews[], size: number) {
		const chunked_arr = []
		let copied = [...array]
		const numOfChild = Math.ceil(copied.length / size)

		for (let i = 0; i < size; i++) {
			chunked_arr.push(copied.splice(0, numOfChild))
		}

		return chunked_arr
	}

	function handleResize(width: number) {
		if (width >= 1024) {
			return 3
		} else if (width >= 768) {
			return 2
		} else {
			return 1
		}
	}

	let width: number

	function getDuration(chunk: Reviews[]) {
		return `${Math.min(chunk.length * Math.floor(Math.random() * (11 - 9) + 9), 90)}s`
		// make sure the duration is at least 9s and at most 11s
	}
</script>

<section class="bg-base-300 py-20 sm:py-32 relative" bind:clientWidth={width}>
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid gap-24">
		<section use:inview on:enter={handleEnter} class="flex flex-col mx-auto max-w-lg text-center gap-8 opacity-0 translate-y-8">
			<h1 class="text-3xl sm:text-5xl font-semibold">Customer Love Letters</h1>
		</section>
		<section class="relative -mx-4 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 lg:grid-cols-3  ">
			{#each chunkArray(reviews, handleResize(width)) as chunk}
				<ul class="animate-marquee space-y-8 py-4" style="--marquee-duration:{getDuration(chunk)};">
					{#each Array(2) as _}
						{#each chunk as review}
							<li class="flex flex-col gap-6 bg-base-100 rounded-2xl p-8 shadow-xl">
								<p class="text-xl font-semibold">{review.body}</p>
								<p class="text-base font-semibold">{review.author}</p>
							</li>
						{/each}
					{/each}
				</ul>
			{/each}

			<div class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-base-300-gradient-b" />
			<div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-base-300-gradient-t" />
		</section>
	</div>
</section>
