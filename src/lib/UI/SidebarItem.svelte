<script lang="ts">
	export let text: string;
	export let href: string;
</script>

<a
	class="relative after:absolute after:left-0 after:h-1 after:w-0 after:bg-carmine after:transition-width hover:after:w-full xs:after:-bottom-6 lg:after:-bottom-8"
	{href}>{text}</a
>
