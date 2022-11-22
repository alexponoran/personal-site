import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';

export const load: LayoutLoad = async ({ url }) => {
	if (browser) {
		locale.set(localStorage.locale ? localStorage.locale : window.navigator.language);
	}
	await waitLocale();
	return { url: url.pathname };
};
