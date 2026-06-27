<script lang="ts">
	import { resolve } from '$app/paths';
	import { type ResolvedPathname } from '$app/types';
</script>

<ul>
	{#snippet link(text: string, href: ResolvedPathname)}
		<li><a class="text-blue-800 hover:underline hover:text-black text-2xl" {href}>{text}</a></li>
	{/snippet}
	{@render link('Zig: Tossing the dice', resolve('/zig/tossingthedice'))}
	{@render link('Zig: ArrayList', resolve('/zig/arraylist'))}
</ul>
