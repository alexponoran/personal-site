<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/UI/Navbar.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	import Transition from '$lib/Transition.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Transition url={data.url} duration={500}>
	<main class="relative h-full overflow-hidden">
		<Navbar />
		{#if $page.route.id !== '/portfolio'}
			<Sidebar />
		{/if}

		<slot />
	</main>
</Transition>
