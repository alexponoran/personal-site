<script lang="ts">
	import SidebarItem from './SidebarItem.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { screenWidth } from '../../stores/screenSize';
	let color: string;
	let effect: string;
	onMount(() => {
		page.subscribe((value) => {
			if (value.route.id === '/my-story') {
				color = 'text-white';
				effect = 'after:bg-white';
			} else if (value.route.id === '/') {
				color = 'text-black';
				effect = 'after:bg-portfolio';
			}
		});
	});
</script>

<aside
	class="absolute z-10 my-auto flex h-4 rotate-[270deg] space-x-8 font-roboto leading-navigation {color} xxs:top-1/2 xxs:bottom-1/2 xxs:-ml-28 xxs:w-64 lg:w-72 lg:text-xl xl:text-2xl"
>
	<SidebarItem {effect} text="Github" href="https://github.com/alexponoran" />
	<SidebarItem
		{effect}
		text="Linkedin"
		href="https://linkedin.com/in/alexandru-ponoran-0057b91ba/"
	/>
	<SidebarItem {effect} text="Facebook" href="https://www.facebook.com/alexandru.ponoran/" />
</aside>
