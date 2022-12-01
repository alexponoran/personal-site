<script lang="ts">
	export let text: string;
	export let href: string;
	export let effect: string;
</script>

<a
	class="relative after:absolute after:left-0 after:h-1 after:w-0 {effect} after:transition-width hover:after:w-full xs:after:-bottom-2 lg:after:-bottom-4"
	{href}>{text}</a
>
