<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="w-full p-2 md:w-3xl md:m-auto md:p-0">
	<nav class="my-4">
		<a href={resolve('/')}>home</a>
		<div class="float-end">
			<a href="https://bsky.app/profile/martindrlik.bsky.social">bsky</a>
			<a href="https://github.com/martindrlik">github</a>
		</div>
	</nav>

	{@render children()}
</div>
