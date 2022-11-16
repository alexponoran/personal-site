<script lang="ts">
	export let text: string;
	export let href: string;
</script>

<li>
	<a
		class="relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:bg-blue-400 after:transition-width hover:after:w-full"
		{href}>{text}</a
	>
</li>
