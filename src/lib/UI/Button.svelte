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
			classes.push('border-2', 'border-white', 'hover:text-white', 'hover:border-carmine');
			break;
		case 'back':
			classes.push('border-2', 'border-portfolio', 'rounded-md', 'bg-portfolio');
			break;
		case 'white':
			classes.push('text-black', 'border-2', 'bg-white', 'border-black');
			break;
	}

	switch (size) {
		case 'normal':
			classes.push('font-medium font-roboto xxs:p-2 sm:px-4 sm:py-2 lg:px-7 lg:py-4');
			break;
		case 'small':
			classes.push(
				'font-medium font-roboto md:px-4 md:py-3 lg:px-7 lg:py-4 xs:px-3 xs:py-1 xxs:px-2 xxs:py-1 text-xs xs:text-sm lg:text-base'
			);
			break;
		case 'tiny':
			classes.push('xxs:p-1 md:p-3');
			break;
	}

	switch (effect) {
		case 'default':
			classes.push(
				'after:absolute after:top-0 after:left-0 after:-z-10 after:h-0 after:w-0 after:transition-width-height hover:after:h-full hover:after:w-full after:bg-blue-300 z-10'
			);
			break;
		case 'default-red':
			classes.push(
				'after:absolute after:top-0 after:left-0 after:-z-10 after:h-0 after:w-0 after:transition-width-height hover:after:h-full hover:after:w-full after:bg-carmine z-10'
			);
			break;
		case 'scale':
			classes.push('hover:scale-105 duration-300');
			break;
		case 'scale-red':
			classes.push('hover:scale-105 hover:bg-carmine hover:border-carmine duration-300');
			break;
	}

	classes.push(className);
	const classesString = classes.filter(Boolean).join(' ');
</script>

<button
	on:click
	{type}
	class="{classesString} {specialProperties} relative flex items-center rounded-md leading-none"
>
	<slot />
</button>
