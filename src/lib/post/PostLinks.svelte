<script lang="ts">
	import { posts } from './Data.svelte';
	import PostLink from './PostLink.svelte';
</script>

<ul>
	{#each posts as post (post.headline)}
		<li>
			<PostLink {post} />
		</li>
	{/each}
</ul>
