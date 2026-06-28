<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Data {
		children: Snippet;
		href: string;
		style: 'documentation' | 'social';
	}

	let { children, href, style }: Data = $props();
</script>

{#if style === 'documentation'}
	<a rel="external" class=" text-blue-800 hover:underline hover:text-black" {href}
		>{@render children()}</a
	>
{:else if style === 'social'}
	<a rel="external" class="text-black hover:underline" {href}>{@render children()}</a>
{/if}
