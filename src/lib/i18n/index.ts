import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
register('ro', () => import('./locales/ro.json'));
init({
	fallbackLocale: defaultLocale,
	initialLocale: browser
		? localStorage.locale === undefined
			? window.navigator.language
			: localStorage.locale
		: defaultLocale
});
