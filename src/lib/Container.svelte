<script lang="ts">
	let { children } = $props();
</script>

<div class="w-full p-2 md:w-3xl md:m-auto md:p-0">
	{@render children()}
</div>
