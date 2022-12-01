<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { _ } from 'svelte-i18n';
	import FailedLoading from '$lib/UI/FailedLoading.svelte';
	import LoadingSpinner from '$lib/UI/LoadingSpinner.svelte';
	export let ind: number;
	export let src: string;
	export let alt: string;

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

{#if loaded}
	<div
		in:fly={{ y: 1000, duration: 400, delay: 250 }}
		class="grid h-full w-full rounded-md xxs:place-items-center lg:mt-24 lg:grid-cols-2 lg:place-items-start lg:gap-x-8 xl:mt-0"
	>
		<img class="xxs:w-5/6 sm:w-2/3 lg:w-full" {src} {alt} />
		<p class="flex w-full items-center px-16 font-montserrat text-3xl">
			{$_(`myStoryPage.description.text${ind + 1}`)}
		</p>
	</div>
{:else if failed}
	<div class="relative h-full w-full">
		<FailedLoading />
	</div>
{:else if loading}
	<LoadingSpinner />
{/if}
