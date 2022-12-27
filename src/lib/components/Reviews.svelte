<script lang="ts">
	import { inview, type ObserverEventDetails } from 'svelte-inview'

	interface Reviews {
		body: string
		author: string
	}

	const reviews: Reviews[] = [
		{
			body: 'As a small business owner, I was hesitant to invest in a new website. But Designee made the process easy and the end result was worth it. Highly recommend.',
			author: 'William T'
		},
		{
			body: 'Designee team exceeded our expectations. Highly recommend.',
			author: 'Benjamin D'
		},
		{
			body: 'I worked with Designee many times, They are very reliable and responsive, and I highly recommend them!',
			author: 'Abdulaziz A'
		},
		{
			body: 'I was impressed with Designee efficiency. Highly recommend.',
			author: 'Emily W'
		},
		{
			body: 'Great partner to work with!',
			author: 'Salman Mohammad'
		},
		{
			body: 'Designee was one of the best Ive worked with. Highly recommend.',
			author: 'Rachel G'
		},
		{
			body: 'I was extremely satisfied with the work that Designee did on my website. They were able to take my vision and turn it into a reality, and the end result was exactly what I had hoped for.',
			author: 'Jessica D'
		},
		{
			body: 'Designee team did a great job on our site. Highly recommend them.',
			author: 'Othmane G'
		},
		{
			body: 'Very happy with the work done by Designee team. Professional and efficient.',
			author: 'Nicole T'
		},
		{
			body: 'Was a pleasure to work with. Excellent results.',
			author: 'Michael B'
		},
		{
			body: 'Our website looks fantastic thanks Designee. Highly recommend their services.',
			author: 'Ethan J'
		},
		{
			body: 'From start to finish, the team was professional and efficient, and the end result was a stunning and user-friendly site that perfectly reflects our brand.',
			author: 'Madison G'
		},
		{
			body: 'Awesome experience loved the results, thanks!',
			author: 'Sophia A'
		},
		{
			body: 'Working with Designee was easy to do and they delivered quickly! Will work with again!"',
			author: 'Rohan D'
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
