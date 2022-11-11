<script lang="ts">
	interface FaqItem {
		question: string
		answer: string
	}

	const faqs: FaqItem[] = [
		{
			question: "Why wouldn't I just hire a full-time designer?",
			answer:
				"Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them."
		},
		{
			question: 'Is there a limit to how many requests I can have?',
			answer:
				"Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
		},
		{
			question: 'How fast will I receive my designs?',
			answer:
				'On average, most requests are completed in just two days or less. However, more complex requests can take longer.'
		},
		{
			question: 'Who are the designers?',
			answer:
				"Our designers are all top-notch, and they're all based in the US. We have a rigorous hiring process, and we only hire the best."
		},
		{
			question: 'What programs do you design in?',
			answer: 'Most requests are designed using Figma.'
		},
		{
			question: 'How do I request designs?',
			answer: 'You can request designs through our website, or you can email us at x.'
		},
		{
			question: "What if I don't like the design?",
			answer: "No worries! We'll continue to revise the design until you're 100% satisfied."
		},
		{
			question: 'What if I only have a single request?',
			answer:
				"That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
		},
		{
			question: "Are there any refunds if I don't like the service?",
			answer: 'Due to the high quality nature of the work, there will be no refunds issued.'
		},
		{
			question: "What if I have a question that isn't answered here?",
			answer: 'Feel free to email us at x.'
		}
	]

	let activeIndex: number | null

	function toggle(index: number) {

		if (activeIndex === index) {
			return activeIndex = null
		} 

		return activeIndex = index
	}
</script>



<section class="bg-base-100 py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section class="flex flex-col mx-auto max-w-lg text-center gap-8">
			<h1 class="text-3xl sm:text-5xl font-bold">FAQs</h1>
			<p class="text-2xl ">We've got answers to all your questions.</p>
		</section>
		<ul class="grid gap-8 max-w-7xl">
			{#each faqs as faq, index}
				<li
					on:click={() => toggle(index)}
					on:keypress
					class=" place border-b-4 border-base-200 cursor-pointer"
				>
					<div class="flex items-center justify-between pb-8">
						<h2 class="text-xl font-semibold">{faq.question}</h2>
						<img
							src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg"
							alt=""
							class="h-4 transition duration-300 ease-in-out {activeIndex === index ? "rotate-180" : null}"
						/>
					</div>
					<p class="text-base transition-all duration-700 ease-in-out overflow-hidden {activeIndex === index ? "max-h-20" : "max-h-0"}">
						{faq.answer}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
