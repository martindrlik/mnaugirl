<script lang="ts">
	import { posts } from '$lib/post/Data.svelte';
	import PostLink from '$lib/post/PostLink.svelte';
</script>

<ul>
	<!-- todo {@render link('Zig: async', resolve('/zig/async'))} -->
	<!-- todo {@render link('Terminal: Mini-Tricks', resolve('/terminal/minitricks'))} -->
	{#each posts as post (post.headline)}
		<li>
			<PostLink {post} />
		</li>
	{/each}
</ul>
