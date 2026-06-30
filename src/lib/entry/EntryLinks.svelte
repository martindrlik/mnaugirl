<script lang="ts">
	import { entries } from './data';
	import EntryLink from './EntryLink.svelte';
</script>

<ul>
	{#each entries as entry (entry.headline)}
		<li>
			<EntryLink {entry} />
		</li>
	{/each}
</ul>
