<script lang="ts" module>
	import { resolve } from '$app/paths';
	import type { ResolvedPathname } from '$app/types';

	interface Post {
		headline: string;
		date: string;
		href: ResolvedPathname;
	}

	export const zig: { arrayList: Post; tossingTheDice: Post; async: Post } = {
		arrayList: {
			headline: 'Zig: ArrayList',
			date: '2026-06-27',
			href: resolve('/zig/arraylist')
		},
		tossingTheDice: {
			headline: 'Zig: Tossing the Dice',
			date: '2026-06-27',
			href: resolve('/zig/tossingthedice')
		},
		async: {
			headline: 'Zig: async',
			date: '2026-06-28',
			href: resolve('/zig/async')
		}
	};
	export const zigAll: Post[] = [/* todo zig.async,*/ zig.tossingTheDice, zig.arrayList];

	export const terminal: { miniTricks: Post } = {
		miniTricks: {
			headline: 'Terminal: Mini-Tricks',
			date: '2026-06-27',
			href: resolve('/terminal/minitricks')
		}
	};
	export const terminalAll: Post[] = [terminal.miniTricks];

	export const posts: Post[] = [...terminalAll, ...zigAll];
</script>
