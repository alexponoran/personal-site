<script lang="ts">
	import type { ButtonType } from './button.type.js';
	export { className as class };
	export let type: ButtonType = 'button';
	export let color = 'transparent';
	export let size = 'normal';
	export let effect = 'default';
	export let specialProperties = '';

	let className = '';
	let classes = [''];

	switch (color) {
		case 'transparent':
			classes.push('border-2', 'border-portfolio', 'hover:text-white', 'hover:border-white');
			break;
		case 'portfolio':
			classes.push(
				'border-2',
				'dark:border-white',
				'hover:text-white',
				'hover:border-carmine',
				'dark:bg-transparent',
				'bg-white',
				'border-portfolio'
			);
			break;
		case 'back':
			classes.push(
				'border-2',
				'dark:border-white',
				'dark:bg-portfolio',
				'dark:text-white',
				'text-black',
				'bg-white',
				'active:text-white',
				'hover:text-white',
				'border-portfolio'
			);
			break;
		case 'white':
			classes.push(
				'text-black',
				'border-2',
				'bg-white',
				'border-black',
				'dark:text-white',
				'dark:border-white',
				'dark:bg-portfolio'
			);
			break;
	}

	switch (size) {
		case 'normal':
			classes.push(
				'font-medium font-roboto xxs:px-3 xxs:py-5 sm:px-4 sm:py-6 lg:px-7 lg:py-6 md:text-xl text-base h-16 w-44 md:w-56 lg:w-64'
			);
			break;
		case 'small':
			classes.push(
				'font-medium font-roboto w-fit h-max xxs:px-5 xxs:py-3 md:px-7 md:py-4 text-xs xs:text-sm lg:text-base'
			);
			break;
		case 'tiny':
			classes.push('xxs:p-1 md:p-3');
			break;
	}

	switch (effect) {
		case 'default':
			classes.push(
				'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:m-auto after:-z-10 after:h-0 after:w-0 after:transition-width-height hover:after:h-full hover:after:w-full after:bg-blue-300 z-10 after:rounded-md dark:after:bg-slate-500'
			);
			break;
		case 'default-red':
			classes.push(
				'after:absolute after:top-0 after:left-0 after:-z-10 after:h-0 after:w-0 after:transition-width-height hover:after:h-full hover:after:w-full after:bg-carmine dark:after:bg-carmine-dark z-10'
			);
			break;
		case 'scale':
			classes.push('hover:scale-105 duration-300');
			break;
		case 'scale-red':
			classes.push(
				'hover:scale-105 hover:bg-carmine dark:hover:bg-carmine-dark dark:hover:border-carmine-dark hover:border-carmine duration-300'
			);
			break;
	}

	classes.push(className);
	const classesString = classes.filter(Boolean).join(' ');
</script>

<button
	on:click
	{type}
	class="{classesString} {specialProperties} relative flex items-center justify-center rounded-md leading-none"
>
	<slot />
</button>
