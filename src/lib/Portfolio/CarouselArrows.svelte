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
<div class="absolute bottom-4 left-0 right-0 flex justify-center gap-x-8">
	<div
		on:click={scrollUp}
		class="rounded-full bg-slider-arrow p-2 transition-colors hover:text-carmine"
	>
		<span><ArrowUp size={24} /></span>
	</div>
	<div
		on:click={scrollDown}
		class="rounded-full bg-slider-arrow p-2 transition-colors hover:text-carmine"
	>
		<span><ArrowDown size={24} /></span>
	</div>
</div>
