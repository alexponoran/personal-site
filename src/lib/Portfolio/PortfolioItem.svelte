<script lang="ts">
	import CarouselArrows from './CarouselArrows.svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import Button from '$lib/UI/Button.svelte';
	import PortfolioFooter from './PortfolioFooter.svelte';

	export let src: string;
	// export let num: boolean[];
	let showProject: boolean = false;
	const handlePointerEnter = () => {
		showProject = true;
	};
	const handlePointerLeave = () => {
		showProject = false;
	};
</script>

<div
	class="relative h-screen w-screen overflow-hidden bg-portfolio bg-hero-bg bg-auto bg-no-repeat text-white"
>
	<div
		class="absolute top-0 bottom-0 left-0 right-0 m-auto xxs:h-[528px] xxs:w-[297px] xs:h-[592px] xs:w-[333px] sm:h-[640px] sm:w-[360px] md:h-[360px] md:w-[640px] lg:h-[432px] lg:w-[768px] xl:h-[576px] xl:w-[1024px] 2xl:h-[648px] 2xl:w-[1152px] 3xl:h-[720px] 3xl:w-[1280px]"
	>
		<img
			class="relative rounded-md transition-opacity duration-500 {showProject
				? 'opacity-100'
				: 'opacity-20'}"
			{src}
			alt="Project"
		/>
		<p
			class="absolute -top-6 font-montserrat tracking-wider xs:text-center xs:text-sm sm:-left-1/4 sm:w-max md:left-6 md:text-lg lg:text-2xl xl:left-10 xl:text-3xl 2xl:text-4xl {showProject
				? 'opacity-0'
				: 'opacity-100'} transition-opacity"
		>
			<slot name="text" />
		</p>
		<div
			on:pointerenter={handlePointerEnter}
			on:pointerleave={handlePointerLeave}
			class="absolute top-1/2 bottom-0 left-0 right-full z-10 m-auto h-fit w-max"
		>
			<Button size="small" color="portfolio" effect="after:bg-carmine">
				VIEW PROJECT
				<span class="w-2" />
				<Add size={20} />
			</Button>
		</div>
	</div>
	<CarouselArrows />
	<PortfolioFooter />
</div>
