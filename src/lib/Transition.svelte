<script lang="ts">
	import { fade } from 'svelte/transition';
	export let url: string;
	export let duration: number = 500;
</script>

{#key url}
	<div in:fade={{ duration: 300, delay: duration }} out:fade={{ duration: 300, delay: 150 }}>
		<slot />
	</div>
{/key}
