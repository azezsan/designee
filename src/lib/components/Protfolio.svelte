<script>
    const List = [
        {
            image: "https://assets.website-files.com/5837424ae11409586f837994/61251d9c096822eb44901aeb_Kam.jpg",
            alt: "Kam",
        },
        {
            image: "https://assets.website-files.com/5837424ae11409586f837994/61251d9b71751f8295add479_Kam-6.jpg",
            alt: "Kam",
        },
        {
            image: "https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam.jpg",
            alt: "Kam",
        },
        {
            image: "https://assets.website-files.com/5837424ae11409586f837994/618afe35fde37ec4b6ea5328_Kam.jpg",
            alt: "Kam",
        }
    ]

    const featured = [
        {
            image: "https://assets.website-files.com/5837424ae11409586f837994/5e9ba463b27cf60b2c9a7554_dribbble-logo.svg",
            alt: "Kam",
        },
        {
            image: "https://assets.website-files.com/5837424ae11409586f837994/5e9ba4634c5ff90b59c1abdf_lapa-logo.svg",
            alt: "Kam",
        },
        {
            image: "https://assets.website-files.com/5837424ae11409586f837994/5e9ba46388adf7d226b3bd2e_awwwards-seeklogo.com.svg",
            alt: "Kam",
        },
        {
            image: "https://assets.website-files.com/5837424ae11409586f837994/5e9ba4639aae7e3a14b5f282_product-hunt-logo-horizontal-black.svg",
            alt: "Kam",
        }
    ]
</script>

<section class="bg-base-200 py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-24">
		<section class="flex flex-col mx-auto max-w-lg text-center gap-8">
			<h1 class="text-3xl sm:text-5xl font-bold">Recent work</h1>
			<p class="text-2xl ">Award winning designs, and nothing less.</p>
			<button class="btn btn-primary text-lg mx-auto">View recent work</button>
		</section>
		<ul class="grid grid-cols-1 sm:grid-cols-2 gap-20 ">
            {#each List as item}
                <li>
                    <img src={item.image} alt={item.alt} class="rounded-lg shadow-lg" />
                </li>
            {/each}
        </ul>
		<section class="grid mx-auto text-center gap-6">
            <h2 class="text-2xl">Designs commonly featured by</h2>
            <ul class="flex justify-center gap-6">
                {#each featured as item}
                    <li>
                        <img src={item.image} alt={item.alt} class=" h-6" />
                    </li>
                {/each}
            </ul>
        </section>
	</div>
</section>
