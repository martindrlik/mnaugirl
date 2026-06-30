<script lang="ts">
	import Container from '$lib/Container.svelte';
	import MainMenu from '$lib/MainMenu.svelte';

	let { children } = $props();
</script>

<Container>
	<MainMenu withHomeLink />
	{@render children()}
</Container>
