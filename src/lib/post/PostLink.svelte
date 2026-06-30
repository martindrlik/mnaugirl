<script lang="ts">
	import { formatPostDate } from '$lib/date';
	import Link from '$lib/Link.svelte';
	import Post from './Post.svelte';

	let { post }: { post: Post } = $props();
</script>

<div class="my-2.5">
	<Link style="post" href={post.href}>{post.headline}</Link>
	<span class="text-sm p-1 rounded-sm bg-amber-50"
		><time datetime="2016-01-20">{formatPostDate(post.date)}</time></span
	>
</div>
