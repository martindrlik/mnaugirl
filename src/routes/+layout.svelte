<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import ExternalLink from '$lib/ExternalLink.svelte';
	import Link from '$lib/Link.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Martina Drlík</title>
</svelte:head>

<div class="w-full p-2 md:w-3xl md:m-auto md:p-0">
	<nav class="my-4 text-xl">
		<Link style="menu" href={resolve('/')}>home</Link>
		<div class="float-end">
			<ExternalLink style="social" href="https://bsky.app/profile/martindrlik.bsky.social"
				>bsky</ExternalLink
			>
			<ExternalLink style="social" href="https://github.com/martindrlik">github</ExternalLink>
		</div>
	</nav>

	{@render children()}
</div>
