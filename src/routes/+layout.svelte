<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Container from '$lib/Container.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Martina Drlík</title>
</svelte:head>

<Container>
	{@render children()}
</Container>
