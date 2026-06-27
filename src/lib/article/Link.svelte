<script lang="ts">
	let { href, children } = $props();
</script>

<a class="text-blue-800 hover:underline hover:text-black" {href}>{@render children()}</a>
