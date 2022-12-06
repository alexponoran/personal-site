import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const darkModeStore: Writable<boolean> = writable();
