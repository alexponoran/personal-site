<script lang="ts">
	import PortfolioItem from '$lib/Portfolio/PortfolioItem.svelte';
	import portfolioData from '$lib/Portfolio/portfolioData';
	import { inview } from 'svelte-inview';
	const options = {
		threshold: 0.5
	};
	let num: boolean[] = new Array(portfolioData.length).fill(false);
	function handleEnter(index: number, event: CustomEvent) {
		num = num.map((item, i) => (item = false));
		num[index] = true;
	}
</script>

<div class="relative h-full overflow-x-hidden">
	{#each portfolioData as item, index}
		<div use:inview={options} on:enter={(event) => handleEnter(index, event)}>
			<PortfolioItem {num} src={item.src}>
				<p slot="text">{item.text}</p>
			</PortfolioItem>
		</div>
	{/each}
</div>
