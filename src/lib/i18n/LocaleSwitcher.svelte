<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let value: string | null | undefined = 'en';
	const dispatch = createEventDispatcher();

	const switchLocale = (e: Event) =>
		dispatch('locale-changed', (e.target as HTMLSelectElement).value);
</script>

<div class="mx-4 flex justify-center">
	<select
		class="rounded-md border-2 bg-black font-poppins outline-none"
		{value}
		on:change|preventDefault={switchLocale}
	>
		<option value="en">EN</option>
		<option value="ro">RO</option>
	</select>
</div>
