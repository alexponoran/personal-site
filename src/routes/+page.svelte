<script lang="ts">
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
	import { screenWidth } from '../stores/screenSize';
	import Button from '$lib/UI/Button.svelte';
	import BottomBar from '$lib/UI/BottomBar.svelte';
</script>

<section
	class="relative h-screen w-screen bg-[url(https://ap-personal-site.s3.eu-central-1.amazonaws.com/homepage-bg.webp)] bg-cover bg-no-repeat font-poppins font-bold bg-blend-normal dark:bg-portfolio dark:bg-[url(https://ap-personal-site.s3.eu-central-1.amazonaws.com/homepage-bg-dark.webp)] dark:bg-blend-normal xl:bg-contain"
>
	<div class="h-full w-full bg-white/20 dark:bg-portfolio/60" />
	<h1
		class="absolute top-0 bottom-0 right-0 m-auto h-max w-max space-y-6 rounded-md p-4 text-xl text-black dark:text-white xxs:text-base xs:text-xl sm:top-24 sm:right-0 sm:text-3xl md:left-1/3 lg:text-4xl xl:text-5xl 2xl:text-6xl"
	>
		<p>{$_('homePage.firstSentence')}</p>
		<p>{$_('homePage.secondSentence')}</p>
		<div class="h-max w-max xxs:space-y-8 sm:flex sm:gap-x-8 sm:space-y-0">
			<Button color="white" on:click={() => goto('/portfolio')} effect="default">
				{$_('homePage.firstButton')}
			</Button>

			<Button color="white" size="normal">
				<a
					class="flex h-full w-full items-center justify-center font-roboto text-base font-medium xxs:px-3 xxs:py-5 sm:px-4 sm:py-6 md:text-xl lg:px-7 lg:py-6"
					href="https://ap-personal-site.s3.eu-central-1.amazonaws.com/CV+-+Alexandru-Mihai+Ponoran.pdf"
					target="_blank"
					rel="noreferrer"
				>
					{$_('homePage.secondButton')}
				</a>
			</Button>
		</div>
	</h1>
</section>
{#if $screenWidth < 640}
	<BottomBar positioning={'fixed bottom-1 z-10 flex gap-x-16 text-black dark:text-white'} />
{/if}
