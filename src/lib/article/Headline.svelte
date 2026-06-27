<script lang="ts">
	let { children, date } = $props();
</script>

<h1 class="text-2xl font-bold mb-2">{@render children()}</h1>
<div class="mb-4">{date}</div>
