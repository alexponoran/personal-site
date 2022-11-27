<script lang="ts">
	export let text: string;
	export let href: string;
</script>

<li>
	<a
		class="relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-carmine after:transition-width hover:after:w-full"
		{href}>{text}</a
	>
</li>
