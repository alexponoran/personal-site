<script lang="ts">
	export let showProjectImage: boolean;
	export let showDescription: boolean;
	export let projectHover: boolean;
	export let src: string;
	export let index: number;
	import LoadingSpinner from '$lib/UI/LoadingSpinner.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { isVisible } from '../../stores/isVisible';

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

{#if loaded && $isVisible[index]}
	<img
		in:fade={{ delay: 300, duration: 300 }}
		class="relative h-full w-full rounded-md transition-opacity duration-500 {projectHover ||
		(showProjectImage && !showDescription)
			? 'opacity-100'
			: 'opacity-20'}"
		{src}
		alt="Project"
	/>
{:else if failed && $isVisible[index]}
	<img src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg" alt="Not Found" />
{:else if loading && $isVisible[index]}
	<LoadingSpinner size="small" />
{/if}
