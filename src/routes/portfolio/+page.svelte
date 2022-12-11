<script lang="ts">
	import { screenWidth, screenHeight } from '../../stores/screenSize';
	import PortfolioItem from '$lib/Portfolio/PortfolioItem.svelte';
	import PortfolioFooter from '$lib/Portfolio/PortfolioFooter.svelte';
	import CarouselArrows from '$lib/Portfolio/CarouselArrows.svelte';
	import portfolioData from '$lib/Portfolio/portfolioData';
	import { inview } from 'svelte-inview';
	import { isVisible } from '../../stores/isVisible';
	import { _ } from 'svelte-i18n';

	const options = {
		threshold: 0.5
	};
	let num: boolean[] = new Array(portfolioData.length).fill(false);
	function handleEnter(index: number, { detail }: CustomEvent<ObserverEventDetails>) {
		$isVisible[index] = detail.inView;
		num = num.map((item) => (item = false));
		num[index] = true;
	}
</script>

<div class="relative h-full overflow-x-hidden">
	{#if $screenWidth >= 768}
		{#each portfolioData as project, index}
			<div use:inview={options} on:enter={(event) => handleEnter(index, event)}>
				<PortfolioItem {num} {index} src={project.src}>
					<span slot="projectTitle">{$_(`portfolioPage.projectText${index + 1}.title`)}</span>
					<span slot="projectDescription"
						>{$_(`portfolioPage.projectText${index + 1}.description`)}</span
					>
				</PortfolioItem>
			</div>
		{/each}
	{:else if $screenWidth < 768}
		{#each portfolioData as project, index}
			<div use:inview={options} on:enter={(event) => handleEnter(index, event)}>
				<PortfolioItem {num} {index} src={project.srcMobile}>
					<span slot="projectTitle"> {$_(`portfolioPage.projectText${index + 1}.title`)} </span>
					<span slot="projectDescription">
						{$_(`portfolioPage.projectText${index + 1}.description`)}
					</span>
				</PortfolioItem>
			</div>
		{/each}
	{/if}

	{#if $screenWidth >= 1024}
		<CarouselArrows />
	{/if}
	<PortfolioFooter />
</div>
