<script lang="ts">
	export let text: string;
	export let href: string;
	export let effect: string = '';
	export let transitionDelay: number | undefined = undefined;
	import { fly } from 'svelte/transition';
</script>

<li in:fly={{ x: 100, duration: 200, delay: transitionDelay }}>
	<a class="{effect} border-2 border-transparent" {href}>{text}</a>
</li>
