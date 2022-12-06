<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';
	import { screenWidth } from '../../stores/screenSize';
	import NavbarItem from './NavbarItem.svelte';
	import LocaleSwitcher from '$lib/i18n/LocaleSwitcher.svelte';
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';
	import Button from './Button.svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
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
							'relative after:transition-width hover:after:w-full after:absolute after:-bottom-[6px] after:left-0 after:h-1 after:w-0 after:bg-portfolio dark:after:bg-white')
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
	let showMenu = false;
	const toggleMenu = function () {
		showMenu = !showMenu;
	};
</script>

<nav class="fixed top-0 left-0 right-0 z-50 mb-8 w-screen">
	<header
		class="flex items-center justify-between {color === 'bg-portfolio'
			? 'text-black dark:text-white'
			: ''} {color === 'bg-white' ? 'text-black dark:text-white' : ''} {color === 'bg-carmine'
			? 'bg-carmine text-white dark:bg-carmine-dark'
			: ''} pt-4 font-roboto xxs:px-2 xs:px-4 sm:px-12 md:px-24"
	>
		<div class="text-2xl font-medium sm:text-3xl md:text-4xl 2xl:text-5xl">alex</div>
		<ul
			class="flex items-center text-xl leading-navigation xxs:text-sm xs:text-lg sm:gap-x-8 2xl:text-2xl"
		>
			<li class="hidden lg:flex">
				<ul class="lg:flex lg:gap-x-6">
					<NavbarItem {effect} href="/" text={$_('navbar.home')} />
					<NavbarItem {effect} href="/my-story" text={$_('navbar.myStory')} />
					<NavbarItem {effect} href="/portfolio" text={$_('navbar.portfolio')} />
				</ul>
			</li>
			<ThemeSwitcher />
			<LocaleSwitcher />
			<li>
				<Button
					on:click={toggleMenu}
					class="inline-flex w-16 border-none bg-transparent {$page.route.id === '/my-story'
						? 'text-white'
						: 'text-portfolio'} dark:text-white lg:hidden"
					color="white"
					size="tiny"
				>
					<Menu size={32} />
					<span class="sr-only">Open main menu</span>
					<ul
						class="absolute top-16 right-0 w-max space-y-8 rounded-md border-2 bg-white p-2 text-2xl text-black transition-opacity dark:bg-portfolio dark:text-white {showMenu
							? 'opacity-100'
							: 'pointer-events-none opacity-0'}"
					>
						<NavbarItem effect="" href="/" text={$_('navbar.home')} />
						<NavbarItem effect="" href="/my-story" text={$_('navbar.myStory')} />
						<NavbarItem effect="" href="/portfolio" text={$_('navbar.portfolio')} />
					</ul>
				</Button>
			</li>
		</ul>
	</header>
</nav>
