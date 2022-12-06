<script lang="ts">
	import portfolioData from './portfolioData';
	import { screenHeight } from '../../stores/screenSize';
	export let num: boolean[];
	const handleClick = (index: number) => {
		window.scrollTo({
			top: $screenHeight * index + 1,
			behavior: 'smooth'
		});
	};
</script>

<ul class="fixed top-1/2 bottom-0 h-max w-fit space-y-2 xxs:right-1 xs:right-4 sm:right-8">
	{#each portfolioData as _, index}
		<li>
			<button
				aria-label={`Carousel dot ${index + 1}`}
				on:click={() => handleClick(index)}
				class="transition-border-color relative flex h-6 w-6 items-center justify-center rounded-full border-2 duration-300 hover:border-portfolio dark:hover:border-white {num[
					index
				]
					? 'border-portfolio dark:border-white'
					: 'border-transparent'}"
			>
				<div
					class="h-[6px] w-[6px] rounded-full bg-portfolio dark:bg-white {num[index]
						? 'opacity-100'
						: 'opacity-20'} transition-opacity"
				/>
			</button>
		</li>
	{/each}
</ul>
