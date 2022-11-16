<script>
	import '../app.css';
	import Navbar from '$lib/UI/Navbar.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	import { page } from '$app/stores';
</script>

<main class="relative h-full overflow-hidden">
	<Navbar />
	{#if $page.route.id !== '/portfolio'}
		<Sidebar />
	{/if}
	<slot />
</main>
