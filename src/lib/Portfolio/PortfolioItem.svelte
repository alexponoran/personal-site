<script lang="ts">
	import { fade } from 'svelte/transition';
	import CarouselArrows from './CarouselArrows.svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import Button from '$lib/UI/Button.svelte';
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import PortfolioImage from './PortfolioImage.svelte';
	import { screenWidth } from '../../stores/screenSize';
	import { isVisible } from '../../stores/isVisible';
	export let src: string;
	export let index: number;
	let disableViewProjectButton: boolean = false;
	let projectHover: boolean = false;
	let showProjectImage: boolean = false;
	let showDescription: boolean = false;

	const handlePointerEnter = () => (projectHover = true);
	const handlePointerLeave = () => (projectHover = false);
	const viewProject = () => {
		showProjectImage = !showProjectImage;
		disableViewProjectButton = !disableViewProjectButton;
		showDescription ? (showDescription = false) : '';
	};
	const viewDescription = () => {
		showDescription = !showDescription;
	};
</script>

<div
	in:fade={{ duration: 200 }}
	class="relative h-screen w-screen overflow-hidden bg-portfolio bg-portfolio-bg bg-auto bg-no-repeat text-white"
>
	<div
		class="absolute top-0 bottom-0 left-0 right-0 m-auto xxs:h-[528px] xxs:w-[297px] xs:h-[592px] xs:w-[333px] sm:h-[640px] sm:w-[360px] md:h-[360px] md:w-[640px] lg:h-[432px] lg:w-[768px] xl:h-[576px] xl:w-[1024px] 2xl:h-[648px] 2xl:w-[1152px] 3xl:h-[720px] 3xl:w-[1280px]"
	>
		{#if $isVisible[index]}
			<PortfolioImage {src} {index} {showDescription} {showProjectImage} {projectHover} />
		{/if}
		<p
			class="text-shadow absolute -top-6 z-20 font-montserrat tracking-wider shadow-portfolio xs:text-center xs:text-sm sm:-left-1/4 sm:w-max md:left-6 md:text-lg lg:text-2xl xl:left-10 xl:text-3xl 2xl:text-4xl"
		>
			<slot name="projectTitle" />
		</p>
		<div
			on:pointerenter={handlePointerEnter}
			on:pointerleave={handlePointerLeave}
			class="absolute top-1/2 bottom-0 left-0 right-full z-10 m-auto h-fit w-max"
		>
			<Button
				on:click={viewProject}
				size="small"
				color="portfolio"
				effectColor="after:bg-carmine {showProjectImage
					? 'opacity-0 pointer-events-none'
					: 'opacity-100'} transition-opacity duration-300"
			>
				VIEW PROJECT
				<span class="w-2" />
				<Add size={20} />
			</Button>
		</div>
		<div class="absolute left-4 z-10 m-auto h-fit w-max xxs:top-16 sm:top-6">
			<Button
				on:click={viewProject}
				size="tiny"
				color="back"
				effect="hover:scale-110 hover:bg-carmine hover:border-carmine duration-300"
				effectColor="{showProjectImage
					? 'opacity-100'
					: 'opacity-0 pointer-events-none'} transition-all duration-300"
			>
				<ArrowLeft size={24} />
			</Button>
		</div>
		<div class="absolute bottom-4 right-4 z-10 m-auto h-fit w-max">
			<Button
				on:click={viewDescription}
				size="small"
				color="back"
				effect="hover:scale-110 hover:bg-carmine hover:border-carmine duration-300"
				effectColor="after:bg-carmine {showProjectImage
					? 'opacity-100'
					: 'opacity-0 pointer-events-none'} transition-all duration-300"
			>
				Show description
			</Button>
		</div>
		<div class="absolute top-0 bottom-0 left-0 h-full w-full transition-opacity duration-500">
			<p
				class="flex h-full w-full items-center justify-start text-xl {showDescription
					? 'opacity-100'
					: 'opacity-0'} px-20 py-4 font-montserrat leading-10 tracking-wider text-white transition-opacity duration-300 xxs:text-sm sm:text-base md:text-lg"
			>
				<slot name="projectDescription" />
			</p>
		</div>
	</div>
	{#if $screenWidth >= 640}
		<CarouselArrows />
	{/if}
</div>

<style>
	.text-shadow {
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
</style>
