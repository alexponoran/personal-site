<script lang="ts">
	import { browser } from '$app/environment';
	import { _, locale } from 'svelte-i18n';
	let value: string = 'en';
	if (browser) {
		value = localStorage.getItem('locale') || 'en';
	}
	const switchLocale = () => {
		locale.set(value);
		localStorage.setItem('locale', value);
	};
</script>

<li class="mx-4 flex justify-center">
	<select
		class="rounded-md border-2 bg-transparent text-center font-roboto text-lg outline-none lg:text-xl"
		bind:value
		on:change={switchLocale}
	>
		<option value="en">EN</option>
		<option value="ro">RO</option>
	</select>
</li>
