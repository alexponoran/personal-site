import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import portfolioData from '$lib/Portfolio/portfolioData';

export const isVisible: Writable<boolean[]> = writable(new Array(portfolioData.length).fill(false));
