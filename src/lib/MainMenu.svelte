<script lang="ts">
	import { resolve } from '$app/paths';
	import ExternalLink from './ExternalLink.svelte';
	import Link from './Link.svelte';

	interface Data {
		withHomeLink?: boolean;
	}
	const { withHomeLink }: Data = $props();
</script>

<nav class="my-4 text-xl h-4">
	{#if withHomeLink}
		<Link style="menu" href={resolve('/')}>home</Link>
	{/if}
	<div class="float-end">
		<ExternalLink style="social" href="https://bsky.app/profile/martindrlik.bsky.social"
			>bsky</ExternalLink
		>
		<ExternalLink style="social" href="https://github.com/martindrlik">github</ExternalLink>
	</div>
</nav>
