import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const screenWidth: Writable<number> = writable();
export const screenHeight: Writable<number> = writable();
