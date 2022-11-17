<script lang="ts">
	import { ArrowRight } from 'carbon-icons-svelte';
	import { ArrowLeft } from 'carbon-icons-svelte';
</script>

<div class="absolute bottom-10 left-0 right-0 flex justify-center gap-x-8">
	<div class="rounded-full bg-[#242328] p-2 transition-colors hover:text-carmine">
		<span><ArrowLeft size={24} /></span>
	</div>
	<div class="rounded-full bg-[#242328] p-2 transition-colors hover:text-carmine">
		<span><ArrowRight size={24} /></span>
	</div>
</div>
