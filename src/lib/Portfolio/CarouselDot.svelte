<script lang="ts">
	import portfolioData from './portfolioData';
	let clicked: boolean[] = new Array(portfolioData.length).fill(false);
	export let num: boolean[];
	let screenHeight: number;
	const handleClick = (index: number) => {
		num = num.map((item, i) => (item = false));
		num[index] = true;
		window.scrollTo({
			top: screenHeight * index + 1,
			behavior: 'smooth'
		});
	};
</script>

<svelte:window bind:innerHeight={screenHeight} />
<ul class="absolute top-1/3 right-8 h-max w-fit space-y-2">
	{#each clicked as dot, index}
		<button
			on:click={() => handleClick(index)}
			class="relative flex h-6 w-6 items-center justify-center rounded-full border-2 transition-border-color duration-300 hover:border-white {num[
				index
			]
				? 'border-white'
				: 'border-transparent'}"
		>
			<div
				class="h-[6px] w-[6px] rounded-full bg-white {num[index]
					? 'opacity-100'
					: 'opacity-20'} transition-opacity"
			/>
		</button>
	{/each}
</ul>
