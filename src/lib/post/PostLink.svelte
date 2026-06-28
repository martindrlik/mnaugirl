<script lang="ts">
	import Link from '$lib/Link.svelte';

	let { post } = $props();
</script>

<div class="my-2.5">
	<Link style="post" href={post.href}>{post.headline}</Link>
</div>
