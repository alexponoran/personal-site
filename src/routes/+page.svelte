<script lang="ts">
	import Button from '$lib/UI/Button.svelte';
</script>

<div class="relative flex h-screen items-center justify-start font-poppins font-bold">
	<div
		class="absolute -z-10 m-auto rounded-md shadow-lg xxs:top-0 xxs:bottom-0 xxs:left-0 xxs:right-0 xxs:h-[480px] xxs:w-[270px] xs:left-0 xs:right-0 xs:top-0 xs:bottom-0 xs:h-[640px] xs:w-[360px] sm:left-0 sm:right-0 sm:bottom-0 sm:top-0 sm:h-[333px] sm:w-[592px] md:top-0 md:left-0 md:right-0 md:bottom-0 md:h-[396px] md:w-[704px] lg:h-[513px] lg:w-[912px] 2xl:h-[768px] 2xl:w-[1366px] 3xl:right-[10%]"
	>
		<!-- TODO: Add alt to image -->
		<img class="h-full w-full rounded-md" src="https://picsum.photos/500/640" alt="" />
	</div>
	<div
		class="absolute m-auto w-full xxs:top-1/2 xxs:bottom-0 xxs:left-1/4 xxs:right-0 xxs:text-lg xs:top-2/3 xs:bottom-0 xs:left-1/4 xs:right-0 xs:text-2xl sm:top-1/4 sm:left-1/4 sm:right-0 sm:bottom-0 sm:h-[150px] lg:top-24 lg:bottom-0 lg:right-0 lg:left-1/3"
	>
		<div class="font-semibold sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 2xl:leading-[90px]">
			<p>Hello! My name is Alex.</p>
			<p>I'm a frontend developer.</p>
		</div>

		<div class="flex gap-x-8 xxs:text-sm xs:text-base">
			<Button>Portfolio</Button>
			<Button>Contact me</Button>
		</div>
	</div>
</div>
