<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import type { Snippet } from 'svelte';

	interface Data {
		children: Snippet;
		href: ResolvedPathname;
		style: 'menu';
	}

	let { children, href, style }: Data = $props();
</script>

{#if style === 'menu'}
	<a class="text-black hover:underline" {href}>{@render children()}</a>
{/if}
