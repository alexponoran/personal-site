<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/UI/Navbar.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	import Transition from '$lib/Transition.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;
	import { screenWidth } from '../stores/screenSize';
	import { screenHeight } from '../stores/screenSize';
</script>

<svelte:head>
	<meta />
	<title>Alex Ponoran</title>
	<meta name="description" content="Alex Ponoran's personal website" />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#1A191D" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#FFFFFF" />
	<script
		defer
		src="https://static.cloudflareinsights.com/beacon.min.js"
		data-cf-beacon={{ token: '8931d034db1840f9ab1cf0eaacb97f33' }}
	>
	</script>
</svelte:head>
<svelte:window bind:innerWidth={$screenWidth} bind:innerHeight={$screenHeight} />
<Transition url={data.url} duration={500}>
	<main class="relative h-full overflow-hidden">
		<Navbar />
		{#if $page.route.id !== '/portfolio' && $screenWidth >= 640}
			<Sidebar />
		{/if}
		<slot />
	</main>
</Transition>
