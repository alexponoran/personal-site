<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { highlighted } from '../../stores/isVisible';
	import { index } from '../../stores/isVisible';
	import { _ } from 'svelte-i18n';
	onMount(() => {
		$highlighted[0] = true;
	});
	onDestroy(() => {
		$highlighted = $highlighted.map((itm) => (itm = false));
		$index = 0;
	});
	function highlight(ind: number) {
		$highlighted = $highlighted.map((itm) => (itm = false));
		$highlighted[ind] = true;
		$index = ind;
	}
</script>

<aside
	class="mt-20 mb-6 flex items-center justify-center xxs:ml-6 xxs:gap-x-2 xs:gap-x-4 sm:gap-x-9 lg:ml-16 lg:mt-20 lg:mb-0 lg:gap-x-16"
>
	{#each $highlighted as h, ind}
		<button
			on:click={() => highlight(ind)}
			class="font-poppins font-bold xxs:text-xs xs:text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl {$highlighted[
				ind
			]
				? 'text-carmine dark:text-[#ff2535]'
				: 'text-portfolio dark:text-white'} transition-colors duration-300 ease-in-out hover:text-carmine dark:hover:text-carmine-dark"
		>
			{$_(`myStoryPage.part.title${ind + 1}`)}
		</button>
	{/each}
</aside>
