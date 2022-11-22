<script lang="ts">
	import Button from '$lib/UI/Button.svelte';
	import { _ } from 'svelte-i18n';
</script>

<section
	class="relative h-screen w-screen bg-[url(src/img/homepage-bg.svg)] bg-cover font-poppins font-bold"
>
	<div class="relative h-full w-full">
		<h1
			class="absolute top-4 bottom-0 right-4 m-auto h-max w-max space-y-4 text-2xl text-carmine xs:text-3xl sm:top-24 sm:right-24 sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
		>
			<p>{$_('homePage.firstSentence')}</p>
			<p>{$_('homePage.secondSentence')}</p>
			<div class="flex h-max w-max gap-x-8 xxs:text-sm xs:text-base">
				<Button>{$_('homePage.firstButton')}</Button>
				<Button>{$_('homePage.secondButton')}</Button>
			</div>
		</h1>
	</div>
</section>
