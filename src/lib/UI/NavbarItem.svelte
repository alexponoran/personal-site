<script lang="ts">
	export let text: string;
	export let href: string;
	export let effect: string;
</script>

<li>
	<a class="{effect} border-2 border-transparent" {href}>{text}</a>
</li>
