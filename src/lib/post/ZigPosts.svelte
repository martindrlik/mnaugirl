<script lang="ts" module>
	import { resolve } from '$app/paths';
	import type { Post } from './Post.svelte';

	class ZigPosts {
		arrayList: Post = {
			headline: 'Zig: ArrayList',
			date: '2026-06-27',
			href: resolve('/article/zig/arraylist')
		};
		async: Post = {
			headline: 'Zig: async',
			date: '2026-06-28',
			href: resolve('/article/zig/async')
		};
		enum: Post = {
			headline: 'Zig: enum',
			date: '2026-06-29',
			href: resolve('/article/zig/enum')
		};
		queue: Post = {
			headline: 'Zig: queue',
			date: '2026-06-30',
			href: resolve('/article/zig/queue')
		};
		stdio: Post = {
			headline: 'Zig: stdio',
			date: '2026-06-28',
			href: resolve('/article/zig/stdio')
		};
		tossingTheDice: Post = {
			headline: 'Zig: Tossing the Dice',
			date: '2026-06-27',
			href: resolve('/article/zig/tossingthedice')
		};
	}

	export const zig = new ZigPosts();
</script>
