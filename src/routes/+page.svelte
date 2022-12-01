<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/UI/Button.svelte';
	import { _ } from 'svelte-i18n';
</script>

<section
	class="relative h-screen w-screen bg-white/20 bg-[url(https://ap-personal-site.s3.eu-central-1.amazonaws.com/homepage-bg.webp)] bg-cover bg-no-repeat font-poppins font-bold bg-blend-overlay xl:bg-contain"
>
	<h1
		class="absolute top-0 bottom-0 right-0 m-auto h-max w-max space-y-4 rounded-md p-4 text-2xl text-black xs:text-3xl sm:top-24 sm:right-24 sm:text-4xl md:left-1/3 lg:text-5xl xl:text-6xl 2xl:text-7xl"
	>
		<p>{$_('homePage.firstSentence')}</p>
		<p>{$_('homePage.secondSentence')}</p>
		<div class="flex h-max w-max gap-x-8 xxs:text-sm xs:text-base">
			<Button color="white" on:click={() => goto('/portfolio')} effect="default"
				>{$_('homePage.firstButton')}
			</Button>

			<Button
				color="white"
				on:click={() => goto('https://linkedin.com/in/alexandru-ponoran-0057b91ba/')}
				effect="default"
				>{$_('homePage.secondButton')}
			</Button>
		</div>
	</h1>
</section>
