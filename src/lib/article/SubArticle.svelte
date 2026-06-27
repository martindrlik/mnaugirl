<script lang="ts">
	let { children } = $props();
</script>

<article class="not-first:mt-8 first:mt-0">{@render children()}</article>
