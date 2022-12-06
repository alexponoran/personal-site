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
	class="grid h-max w-full rounded-md lg:grid lg:h-max lg:grid-cols-2 lg:place-items-start"
>
	<h1 class="sr-only">{articleHeader}</h1>
	<div
		style={`background-image: url(${src})`}
		class="w-full bg-contain bg-center bg-no-repeat xxs:h-[20vh] xs:h-[30vh] sm:h-[40vh] lg:h-full"
		aria-label={alt}
		role="img"
	/>
	<div
		class="h-max w-full space-y-4 font-montserrat text-black dark:text-white lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl"
	>
		<p class="items-center px-4 md:px-16">
			{$_(`myStoryPage.description.text${paragraph[ind]}`)}
		</p>
		<p class="items-center px-4 md:px-16">
			{$_(`myStoryPage.description.text${paragraph[ind + 1]}`)}
		</p>
		<p class="items-center px-4 md:px-16">
			{$_(`myStoryPage.description.text${paragraph[ind + 2]}`)}
		</p>
	</div>
</article>
