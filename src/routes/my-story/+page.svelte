<script lang="ts">
	import ImageAndText from '$lib/MyStory/ImageAndText.svelte';
	import TableOfContents from '$lib/MyStory/TableOfContents.svelte';
	import BottomBar from '$lib/UI/BottomBar.svelte';
	import { imagesData } from '$lib/MyStory/imagesData';
	import { index } from '../../stores/isVisible';
	import { darkModeStore } from '../../stores/darkMode';
	import { screenWidth } from '../../stores/screenSize';
</script>

<div class="h-full w-full overflow-y-hidden bg-white dark:bg-portfolio">
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
<div class="fixed top-0 left-0 min-h-screen w-8 bg-carmine dark:bg-carmine-dark lg:w-20" />
{#if $screenWidth < 640}
	<BottomBar positioning={'fixed bottom-1 z-10 flex flex-col gap-y-8 text-white dark:text-white'} />
{/if}
