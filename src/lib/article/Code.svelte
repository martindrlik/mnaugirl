<script lang="ts">
	let { children } = $props();
</script>

<div class="bg-amber-50 p-4 rounded-xl w-full overflow-x-scroll">
	<pre><code>{@render children()}</code></pre>
</div>
