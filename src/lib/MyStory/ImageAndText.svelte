<script lang="ts">
	import { fly } from 'svelte/transition';
	import { _ } from 'svelte-i18n';
	export let ind: number;
	export let src: string;
	export let alt: string;
	export let articleHeader: string;
	export let paragraph: number[];
</script>

<article
	in:fly={{ y: 1000, duration: 400, delay: 250 }}
	class="grid min-h-screen w-full gap-x-8 overflow-y-scroll px-16 lg:grid-cols-2 lg:place-items-center"
>
	<h1 class="sr-only">{articleHeader}</h1>
	<div
		style={`background-image: url(${src})`}
		class="w-full bg-contain bg-center bg-no-repeat xxs:h-[30vh] sm:h-[40vh] lg:h-full"
		aria-label={alt}
		role="img"
	/>
	<div
		class="my-4 h-max w-full space-y-4 font-montserrat text-black dark:text-white lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl"
	>
		<p class="items-center">
			{$_(`myStoryPage.description.text${paragraph[ind]}`)}
		</p>
		<p class="items-center">
			{$_(`myStoryPage.description.text${paragraph[ind + 1]}`)}
		</p>
		<p class="items-center">
			{$_(`myStoryPage.description.text${paragraph[ind + 2]}`)}
		</p>
	</div>
</article>
