<script lang="ts">
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui'
	import { slide } from 'svelte/transition'
	import image1 from '$lib/assets/doodles/GreenLeaf.svg'
	import image2 from '$lib/assets/doodles/WigglyLine.svg'
	import image3 from '$lib/assets/doodles/BlueLeaf.svg'
	import dropdown from '$lib/assets/icons/dropdown.svg'
	import { inview } from 'svelte-inview'

	interface FaqItem {
		question: string
		answer: string
	}

	const faqs: FaqItem[] = [
		{
			question: "Why wouldn't I just hire a full-time designer?",
			answer:
				"Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can cancel your subscription to ensure you're only paying your designer when you have work available for them."
		},
		{
			question: 'Is there a limit to how many requests I can have?',
			answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
		},
		{
			question: 'How fast will I receive my designs?',
			answer: 'On average, most requests are completed in just two days or less. However, more complex requests can take longer.'
		},
		{
			question: 'Who are the designers?',
			answer: "You'll work directly with me, founder of Designee. However, power-ups requests such as animations or custom illustrations are provided by partner designers."
		},
		{
			question: 'What programs do you design in?',
			answer: 'Most requests are designed using Figma.'
		},
		{
			question: 'How do I request designs?',
			answer: 'You can request designs through slack, email, wireframesor or sharing Google docs, or even recording a brief Loom video or any tool you like.'
		},
		{
			question: "What if I don't like the design?",
			answer: "No worries! We'll continue to revise the design until you're 100% satisfied."
		},
		{
			question: 'What if I only have a single request?',
			answer: "You will have to subscribe to the monthly plan. currently we don't offer a one time request."
		},
		{
			question: "Are there any refunds if I don't like the service?",
			answer: 'Due to the high quality nature of the work, there will be no refunds issued.'
		},
		{
			question: "What if I have a question that isn't answered here?",
			answer: 'Feel free to email us at sales@designee.io.'
		}
	]

	let lazyLoad: boolean

	const options = {
		rootMargin: '100px',
		unobserveOnEnter: true
	}

	function handleEnter({ detail }: CustomEvent<ObserverEventDetails>) {
		detail.node.classList.add('enter')
	}
</script>

<section use:inview={options} on:enter={() => (lazyLoad = true)} class="bg-base-100 py-20 sm:py-32 relative">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section use:inview on:enter={handleEnter} class="flex flex-col mx-auto max-w-lg text-center gap-8 opacity-0 translate-y-8">
			<h1 class="text-3xl sm:text-5xl font-bold">FAQs</h1>
			<p class="text-2xl ">We've got answers to all your questions.</p>
		</section>
		<ul use:inview on:enter={handleEnter} class="grid gap-8 sm:mx-28 opacity-0 translate-y-8">
			{#each faqs as faq}
				<Disclosure class="grid" as="li" let:open>
					<DisclosureButton class="bg-base-300 rounded-3xl p-5 text-start">
						<div class="flex items-center justify-between">
							<h2 class="text-xl font-medium">{faq.question}</h2>
							<img src={dropdown} alt="Dropdown" width="15" height="8" class="transition duration-300 ease-in-out {open ? 'transform rotate-180' : ''}" />
						</div>
						<DisclosurePanel>
							<p class="text-lg pt-4" transition:slide={{ delay: 0, duration: 300 }}>
								{faq.answer}
							</p>
						</DisclosurePanel>
					</DisclosureButton>
				</Disclosure>
			{/each}
		</ul>
		<section use:inview on:enter={handleEnter} class="flex flex-col items-center gap-5 opacity-0 translate-y-8">
			<p class="text-center text-xl">Ready To Get Started</p>
			<a href="https://calendly.com/designee/30minute" target="_blank" rel="noopener noreferrer" class="button_parent mx-auto" role="button">
				<span class="button_top_300">Schedule Your FREE Audit Call Now</span>
			</a>
		</section>
	</div>

	{#if lazyLoad}
		<img
			use:inview
			on:enter={handleEnter}
			src={image1}
			alt="Green Leaf Doodle"
			class="absolute w-[20vw] max-w-[220px] top-0 right-0 z-10 opacity-0 !-translate-y-1/2 translate-x-full"
		/>
		<img use:inview on:enter={handleEnter} src={image2} alt="Wiggly Line Doodle" class="absolute max-h-[120px] top-0 right-0 left-0 mx-auto z-10 opacity-0 !-translate-y-1/2 " />
		<img
			use:inview
			on:enter={handleEnter}
			src={image3}
			alt="Blue Leaf Doodle"
			class="absolute w-[16vw] max-w-[150px] top-0 left-0 z-10 opacity-0 !-translate-y-1/2 -translate-x-full"
		/>
	{/if}
</section>
