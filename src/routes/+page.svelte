<script lang="ts">
	import Button from '$lib/UI/Button.svelte';
</script>

<div class="relative flex h-screen items-center justify-start font-poppins font-bold">
	<div
		class="absolute -z-10 m-auto rounded-md shadow-lg xxs:top-0 xxs:bottom-[20%] xxs:left-[20%] xxs:right-0 xxs:h-[320px] xxs:w-[250px] xs:left-1/4 xs:right-0 xs:top-0 xs:bottom-1/4 xs:h-[400px] xs:w-[312px] sm:left-0 sm:right-[5%] sm:bottom-1/4 sm:top-0 sm:h-[500px] sm:w-[390px] lg:top-0 lg:left-0 lg:right-1/4 lg:bottom-0 lg:h-[640px] lg:w-[500px] 3xl:right-[10%] 3xl:h-[900px] 3xl:w-[703px]"
	>
		<img src="https://picsum.photos/500/640" alt="" />
	</div>
	<div
		class="absolute m-auto xxs:top-[55%] xxs:bottom-0 xxs:left-1/4 xxs:right-0 xxs:text-lg xs:top-[59%] xs:bottom-0 xs:left-[20%] xs:right-0 xs:text-2xl sm:top-0 sm:left-1/4 sm:right-0 sm:bottom-0 sm:h-[150px] sm:w-[500px] lg:top-24 lg:bottom-0 lg:right-0 lg:left-[40%] lg:h-[230px] lg:w-[931px]"
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
