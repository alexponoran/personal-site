<script lang="ts">
	import { fade } from 'svelte/transition';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import Button from '$lib/UI/Button.svelte';
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import PortfolioImage from './PortfolioImage.svelte';

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

<section
	in:fade={{ duration: 200 }}
	class="relative h-screen w-screen overflow-hidden bg-white bg-portfolio-bg bg-auto bg-no-repeat text-black dark:bg-portfolio dark:text-white"
>
	<div
		class="absolute top-0 bottom-0 left-0 right-0 m-auto xxs:h-[480px] xxs:w-[270px] xs:h-[512px] xs:w-[288px] sm:bottom-10 sm:h-[576px] sm:w-[324px] md:bottom-0 md:h-[360px] md:w-[640px] lg:h-[414px] lg:w-[736px] xl:h-[558px] xl:w-[992px] 2xl:h-[630px] 2xl:w-[1120px] 3xl:h-[792px] 3xl:w-[1408px]"
	>
		<h1
			class="h-fit w-full rounded-md font-montserrat tracking-wider xxs:text-xs xs:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
		>
			<slot name="projectTitle" />
		</h1>
		{#if $isVisible[index]}
			<PortfolioImage {src} {index} {showDescription} {showProjectImage} {projectHover} />
		{/if}
		<div
			on:pointerenter={handlePointerEnter}
			on:pointerleave={handlePointerLeave}
			class="absolute top-1/2 bottom-0 left-0 right-full z-30 m-auto h-fit w-max"
		>
			<Button
				on:click={viewProject}
				size="small"
				color="portfolio"
				effect="default-red"
				specialProperties="{showProjectImage
					? 'opacity-0 pointer-events-none'
					: 'opacity-100'} transition-opacity duration-300"
			>
				VIEW PROJECT
				<span class="w-2" />
				<Add size={20} />
			</Button>
		</div>
		<div class="absolute left-4 top-0 z-30 m-auto h-fit w-max">
			<Button
				on:click={viewProject}
				size="tiny"
				color="back"
				effect="scale-red"
				specialProperties="{showProjectImage
					? 'opacity-100 pointer-events-auto'
					: 'opacity-0 pointer-events-none'} transition-all duration-300 absolute top-16 left-4 z-30 m-auto"
			>
				<ArrowLeft size={24} />
				<span class="sr-only">Go back</span>
			</Button>
		</div>
		<div class="absolute bottom-4 right-4 z-30 m-auto h-fit w-max">
			<Button
				on:click={viewDescription}
				size="small"
				color="back"
				effect="scale-red"
				specialProperties="{showProjectImage
					? 'opacity-100 pointer-events-auto'
					: 'opacity-0 pointer-events-none'} transition-all duration-300"
			>
				Show description
			</Button>
		</div>
		<div
			class="absolute top-0 bottom-0 left-0 z-10 my-auto h-fit w-fit transition-opacity duration-500"
		>
			<p
				class="flex h-fit w-fit items-center justify-start text-xl {showDescription
					? 'opacity-100'
					: 'opacity-0'} bg-white px-4 py-4 font-roboto font-medium leading-10 tracking-wider text-black transition-opacity duration-300 dark:bg-portfolio dark:text-white xxs:text-xs md:px-24 md:text-base 2xl:text-xl 3xl:text-2xl"
			>
				<slot name="projectDescription" />
			</p>
		</div>
	</div>
</section>
