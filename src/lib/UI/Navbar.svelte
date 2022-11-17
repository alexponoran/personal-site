<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import NavbarItem from './NavbarItem.svelte';
	let color: string = 'bg-white text-black';
	onMount(() => {
		page.subscribe((value) => {
			if (value.route.id === '/portfolio') {
				color = 'bg-portfolio text-white';
			} else {
				color = 'bg-white text-black';
			}
		});
	});
</script>

<div class="fixed top-0 left-0 right-0 z-10 mb-8 w-screen">
	<header
		class="flex items-center justify-between {color} pt-4 font-roboto xxs:px-2 xs:px-4 sm:px-12 md:px-24"
	>
		<div class="text-2xl font-medium sm:text-3xl md:text-4xl 2xl:text-5xl">alex</div>
		<ul
			class="flex gap-x-6 text-xl leading-navigation xxs:text-sm xs:text-lg sm:gap-x-8 2xl:text-2xl"
		>
			<NavbarItem href="/" text="Home" />
			<NavbarItem href="/my-story" text="my story" />
			<NavbarItem href="/portfolio" text="portfolio" />
		</ul>
	</header>
</div>
