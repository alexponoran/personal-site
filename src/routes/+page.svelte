<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/UI/Button.svelte';
	import { _ } from 'svelte-i18n';
</script>

<section
	class="relative h-screen w-screen bg-[url(src/img/homepage-bg.svg)] bg-cover font-poppins font-bold"
>
	<div class="relative h-full w-full bg-black/80">
		<h1
			class="absolute top-4 bottom-0 right-4 m-auto h-max w-max space-y-4 text-2xl text-white xs:text-3xl sm:top-24 sm:right-24 sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
		>
			<p>{$_('homePage.firstSentence')}</p>
			<p>{$_('homePage.secondSentence')}</p>
			<div class="flex h-max w-max gap-x-8 xxs:text-sm xs:text-base">
				<Button
					on:click={() => goto('/portfolio')}
					effect="hover:scale-110 hover:bg-carmine hover:border-red-600 bg-white text-black duration-300"
					effectColor="after:bg-carmine transition-all duration-300"
					>{$_('homePage.firstButton')}
				</Button>

				<Button
					on:click={() => goto('https://linkedin.com/in/alexandru-ponoran-0057b91ba/')}
					effect="hover:scale-110 bg-white text-black hover:bg-carmine hover:border-red-600 duration-300"
					effectColor="after:bg-carmine transition-all duration-300"
					>{$_('homePage.secondButton')}
				</Button>
			</div>
		</h1>
	</div>
</section>
