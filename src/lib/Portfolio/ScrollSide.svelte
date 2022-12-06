<script lang="ts">
	let scroll: number = 0;
</script>

<div
	class="fixed bottom-0 flex h-max w-max flex-col items-center gap-y-5 stroke-black dark:stroke-white xxs:top-[90%] xxs:left-0 xs:top-3/4 sm:left-6"
>
	<p class=" -rotate-90 font-roboto text-black dark:text-white xxs:text-xs sm:text-base">Scroll</p>
	<svg width={2} height={40}>
		<line x1="0" y1="0" x2="0" y2="40" stroke-width="1" />
	</svg>
</div>
