<script lang="ts">
	import { screenWidth, screenHeight } from '../../stores/screenSize';
	import PortfolioItem from '$lib/Portfolio/PortfolioItem.svelte';
	import CarouselDot from '$lib/Portfolio/CarouselDot.svelte';
	import ScrollArrow from '$lib/Portfolio/ScrollSide.svelte';
	import PortfolioFooter from '$lib/Portfolio/PortfolioFooter.svelte';
	import portfolioData from '$lib/Portfolio/portfolioData';
	import { inview } from 'svelte-inview';

	const options = {
		threshold: 0.5
	};
	let num: boolean[] = new Array(portfolioData.length).fill(false);
	function handleEnter(index: number) {
		num = num.map((item) => (item = false));
		num[index] = true;
	}
</script>

<svelte:window bind:innerWidth={$screenWidth} bind:innerHeight={$screenHeight} />
<div class="relative h-full overflow-x-hidden">
	{#if $screenWidth > 768}
		{#each portfolioData as project, index}
			<div use:inview={options} on:enter={() => handleEnter(index)}>
				<PortfolioItem src={project.src}>
					<span slot="projectTitle">{project.title}</span>
					<span slot="projectDescription">{project.description}</span>
				</PortfolioItem>
			</div>
		{/each}
	{:else}
		{#each portfolioData as project, index}
			<div use:inview={options} on:enter={() => handleEnter(index)}>
				<PortfolioItem src={project.srcMobile}>
					<span slot="projectTitle">{project.title}</span>
					<span slot="projectDescription">{project.description}</span>
				</PortfolioItem>
			</div>
		{/each}
	{/if}
	<CarouselDot {num} />
	<ScrollArrow />
	<PortfolioFooter />
</div>
