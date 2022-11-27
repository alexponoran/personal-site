<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import NavbarItem from './NavbarItem.svelte';
	import LocaleSwitcher from '$lib/i18n/LocaleSwitcher.svelte';
	import { _, locale } from 'svelte-i18n';
	let color: string = 'bg-white text-black';
	onMount(() => {
		page.subscribe((value) => {
			if (value.route.id === '/portfolio') {
				color = 'portfolio';
			} else {
				color = 'home';
			}
		});
	});
</script>

<nav class="fixed top-0 left-0 right-0 z-10 mb-8 w-screen">
	<header
		class="flex items-center justify-between {color === 'portfolio'
			? 'bg-portfolio'
			: 'bg-black'} pt-4 font-roboto text-white xxs:px-2 xs:px-4 sm:px-12 md:px-24"
	>
		<div class="text-2xl font-medium sm:text-3xl md:text-4xl 2xl:text-5xl">alex</div>
		<ul
			class="flex gap-x-6 text-xl leading-navigation xxs:text-sm xs:text-lg sm:gap-x-8 2xl:text-2xl"
		>
			<NavbarItem href="/" text={$_('navbar.home')} />
			<NavbarItem href="/my-story" text={$_('navbar.myStory')} />
			<NavbarItem href="/portfolio" text={$_('navbar.portfolio')} />
			<LocaleSwitcher
				value={$locale}
				on:locale-changed={(e) => (locale.set(e.detail), localStorage.setItem('locale', e.detail))}
			/>
		</ul>
	</header>
</nav>
