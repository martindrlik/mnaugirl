import { resolve } from '$app/paths';
import type { Entry } from './entry';

export class ZigEntries {
	arrayList: Entry = {
		headline: 'Zig: ArrayList',
		date: '2026-06-27',
		href: resolve('/article/zig/arraylist')
	};
	async: Entry = {
		headline: 'Zig: async',
		date: '2026-06-28',
		href: resolve('/article/zig/async')
	};
	enum: Entry = {
		headline: 'Zig: enum',
		date: '2026-06-29',
		href: resolve('/article/zig/enum')
	};
	queue: Entry = {
		headline: 'Zig: queue',
		date: '2026-06-30',
		href: resolve('/article/zig/queue')
	};
	stdio: Entry = {
		headline: 'Zig: stdio',
		date: '2026-06-28',
		href: resolve('/article/zig/stdio')
	};
	tossingTheDice: Entry = {
		headline: 'Zig: Tossing the Dice',
		date: '2026-06-27',
		href: resolve('/article/zig/tossingthedice')
	};
}
