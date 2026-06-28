<script lang="ts" module>
	import { resolve } from '$app/paths';
	import type { Post } from './Post.svelte';

	class TerminalPosts {
		miniTricks: Post = {
			headline: 'Terminal: Mini-Tricks',
			date: '2026-06-27',
			href: resolve('/terminal/minitricks')
		};
	}

	export const terminal = new TerminalPosts();
</script>
