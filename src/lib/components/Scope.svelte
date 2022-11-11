<script>
    const scope = [
        "Websites",
        "Mobile apps",
        "Logos & branding",
        "Design systems",
        "SAAS",
        "Wireframes",
        "Stationery",
        "Pitch decks",
        "Slide decks",
        "Direct mail",
        "Infographics",
        "Brochures",
        "Signage",
        "Brand guides",
        "Social media graphics",
        "Billboards",
        "Trade show banners",
        "Email graphics",
        "Resumes",
        "Business cards",
        "Packaging",
        "Blog graphics",
        "Digital ads",
        "Icons",
    ]
</script>

<section class="bg-base-100 py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
        <section>
            <h2 class="text-3xl sm:text-5xl font-bold text-center">Apps, websites, logos & more.</h2>
        </section>
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-8 p-4 sm:p-10 border-base-200 border-8">
            {#each scope as item}
                <li class="border-b-4 border-base-200 pb-2">
                    <h2 class="text-xl font-semibold">{item}</h2>
                </li>
            {/each}
        </ul>
    </div>
</section>