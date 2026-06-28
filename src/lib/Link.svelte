<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import type { Snippet } from 'svelte';

	interface Data {
		children: Snippet;
		href: ResolvedPathname;
		style: 'menu' | 'post';
	}

	let { children, href, style }: Data = $props();
</script>

{#if style === 'menu'}
	<a class="text-black hover:underline" {href}>{@render children()}</a>
{:else if style === 'post'}
	<a class="text-blue-800 hover:underline hover:text-black text-xl" {href}>{@render children()}</a>
{/if}
