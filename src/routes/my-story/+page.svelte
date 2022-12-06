<script lang="ts">
	import ImageAndText from '$lib/MyStory/ImageAndText.svelte';
	import TableOfContents from '$lib/MyStory/TableOfContents.svelte';
	import BottomBar from '$lib/UI/BottomBar.svelte';
	import { imagesData } from '$lib/MyStory/imagesData';
	import { index } from '../../stores/isVisible';
	import { darkModeStore } from '../../stores/darkMode';
	import { screenWidth } from '../../stores/screenSize';
</script>

<div
	class="relative flex h-screen w-screen items-end justify-end overflow-hidden bg-carmine dark:bg-carmine-dark"
>
	<div
		class="h-[92%] overflow-auto rounded-md bg-white dark:bg-portfolio xxs:w-[90%] sm:w-[92%] lg:w-[95%]"
	>
		<TableOfContents />
		{#each imagesData as image, ind}
			{#if $index === ind}
				<ImageAndText
					ind={$index}
					src={$darkModeStore ? image.srcDark : image.src}
					alt={image.alt}
					articleHeader={image.textHeader}
					paragraph={image.paragraphs}
				/>
			{/if}
		{/each}
	</div>
</div>
{#if $screenWidth < 640}
	<BottomBar positioning={'fixed bottom-1 z-10 flex flex-col gap-y-8 text-white dark:text-white'} />
{/if}
