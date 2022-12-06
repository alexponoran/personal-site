<script lang="ts">
	import ArrowUp from 'carbon-icons-svelte/lib/ArrowUp.svelte';
	import ArrowDown from 'carbon-icons-svelte/lib/ArrowDown.svelte';
	import { screenHeight } from '../../stores/screenSize';

	const scrollUp = () => {
		window.scrollTo({
			top: -$screenHeight,
			behavior: 'smooth'
		});
	};
	const scrollDown = () => {
		window.scrollTo({
			top: $screenHeight,
			behavior: 'smooth'
		});
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fixed bottom-4 left-28 flex justify-center gap-x-8 3xl:left-0 3xl:right-0">
	<div
		on:click={scrollUp}
		class="rounded-full bg-neutral-200 p-2 text-black transition-colors hover:text-carmine dark:bg-slider-arrow dark:text-white dark:hover:text-carmine-dark"
	>
		<span><ArrowUp size={20} /></span>
	</div>
	<div
		on:click={scrollDown}
		class="rounded-full bg-neutral-200 p-2 text-black transition-colors hover:text-carmine dark:bg-slider-arrow dark:text-white dark:hover:text-carmine-dark"
	>
		<span><ArrowDown size={20} /></span>
	</div>
</div>
