<script lang="ts">
	let { post } = $props();
</script>

<a class="text-blue-800 hover:underline hover:text-black text-2xl" href={post.href}
	>{post.headline}</a
>
