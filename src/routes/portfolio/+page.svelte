<script lang="ts">
	import PortfolioItem from '$lib/Portfolio/PortfolioItem.svelte';
	import CarouselDot from '$lib/Portfolio/CarouselDot.svelte';
	import ScrollArrow from '$lib/Portfolio/ScrollSide.svelte';
	import portfolioData from '$lib/Portfolio/portfolioData';
	import { inview } from 'svelte-inview';

	let screenWidth: number;
	const options = {
		threshold: 0.5
	};
	let num: boolean[] = new Array(portfolioData.length).fill(false);
	function handleEnter(index: number, event: CustomEvent) {
		num = num.map((item, i) => (item = false));
		num[index] = true;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />
<div class="relative h-full overflow-x-hidden">
	{#if screenWidth > 768}
		{#each portfolioData as item, index}
			<div use:inview={options} on:enter={(event) => handleEnter(index, event)}>
				<PortfolioItem src={item.src}>
					<span slot="text">{item.text}</span>
				</PortfolioItem>
			</div>
		{/each}
	{:else}
		{#each portfolioData as item, index}
			<div use:inview={options} on:enter={(event) => handleEnter(index, event)}>
				<PortfolioItem src={item.srcMobile}>
					<span slot="text">{item.text}</span>
				</PortfolioItem>
			</div>
		{/each}
	{/if}
	<CarouselDot {num} />
	<ScrollArrow />
</div>
