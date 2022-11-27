<script lang="ts">
	import type { ButtonType } from './button.type.js';

	export let type: ButtonType = 'button';
	export let color = 'transparent';
	export let size = 'normal';
	export let effect =
		'after:absolute after:top-0 after:left-0 after:-z-10 after:h-0 after:w-0 after:transition-width-height hover:after:h-full hover:after:w-full';
	export let effectColor = 'after:bg-blue-400';
	let className = '';
	export { className as class };

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
			classes.push('p-3');
			break;
	}
	classes.push(className);
	const classesString = classes.filter(Boolean).join(' ');
</script>

<button
	on:click
	{type}
	class="{classesString} relative flex items-center rounded-md leading-none {effect} {effectColor}"
>
	<slot />
</button>
