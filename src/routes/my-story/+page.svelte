<script lang="ts">
	import ImageAndText from '$lib/MyStory/ImageAndText.svelte';
	import TableOfContents from '$lib/MyStory/TableOfContents.svelte';
	import { imagesData } from '$lib/MyStory/imagesData';
	import { index } from '../../stores/isVisible';
</script>

<div class="relative flex h-screen w-screen items-end justify-end overflow-hidden bg-carmine">
	<div
		class="overflow-auto rounded-md bg-white xxs:h-[93%] xxs:w-[90%] sm:h-[92%] sm:w-[92%] lg:w-[95%]"
	>
		<TableOfContents />
		{#each imagesData as image, ind}
			{#if $index === ind}
				<ImageAndText ind={$index} src={image.src} alt={image.alt} />
			{/if}
		{/each}
	</div>
</div>
