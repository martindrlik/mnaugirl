<script lang="ts" module>
	import type { Post } from './Post.svelte';
	import { terminal } from './TerminalPosts.svelte';
	import { zig } from './ZigPosts.svelte';

	export const posts: Post[] = [
		zig.enum,
		zig.stdio,
		zig.async,
		terminal.miniTricks,
		zig.tossingTheDice,
		zig.arrayList
	];
</script>
