<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { screenWidth } from '../../stores/screenSize';
	import NavbarItem from './NavbarItem.svelte';
	import LocaleSwitcher from '$lib/i18n/LocaleSwitcher.svelte';
	import { _ } from 'svelte-i18n';
	let color: string = 'bg-white text-black';
	let effect: string =
		'relative after:transition-width hover:after:w-full after:absolute after:-bottom-[6px] after:left-0 after:h-1 after:w-0 after:bg-portfolio';
	onMount(() => {
		page.subscribe((value) => {
			if (value.route.id === '/portfolio') {
				color = 'bg-portfolio';
				$screenWidth >= 1024
					? (effect =
							'relative after:transition-width hover:after:w-full after:absolute after:-bottom-[6px] after:left-0 after:h-1 after:w-0 after:bg-white')
					: '';
			} else if (value.route.id === '/') {
				color = 'bg-white';
				$screenWidth >= 1024
					? (effect =
							'relative after:transition-width hover:after:w-full after:absolute after:-bottom-[6px] after:left-0 after:h-1 after:w-0 after:bg-portfolio')
					: '';
			} else if (value.route.id === '/my-story') {
				color = 'bg-carmine';
				$screenWidth >= 1024
					? (effect =
							'relative after:transition-width hover:after:w-full after:absolute after:-bottom-[6px] after:left-0 after:h-1 after:w-0 after:bg-white')
					: '';
			}
		});
	});
</script>

<nav class="fixed top-0 left-0 right-0 z-10 mb-8 w-screen">
	<header
		class="flex items-center justify-between {color === 'bg-portfolio'
			? 'text-white'
			: ''} {color === 'bg-white' ? 'text-black' : ''} {color === 'bg-carmine'
			? 'text-white bg-carmine'
			: ''} pt-4 font-roboto xxs:px-2 xs:px-4 sm:px-12 md:px-24"
	>
		<div class="text-2xl font-medium sm:text-3xl md:text-4xl 2xl:text-5xl">alex</div>
		<ul
			class="flex gap-x-6 text-xl leading-navigation xxs:text-sm xs:text-lg sm:gap-x-8 2xl:text-2xl"
		>
			<NavbarItem {effect} href="/" text={$_('navbar.home')} />
			<NavbarItem {effect} href="/my-story" text={$_('navbar.myStory')} />
			<NavbarItem {effect} href="/portfolio" text={$_('navbar.portfolio')} />
			<LocaleSwitcher />
		</ul>
	</header>
</nav>
