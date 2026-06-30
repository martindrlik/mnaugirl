<script lang="ts">
	import { formatPostDate } from '$lib/date';
	import Link from '$lib/Link.svelte';
	import type { Entry } from './entry';

	let { entry }: { entry: Entry } = $props();
</script>

<div class="my-2.5">
	<Link style="post" href={entry.href}>{entry.headline}</Link>
	<span class="text-sm p-1 rounded-sm bg-amber-50"
		><time datetime="2016-01-20">{formatPostDate(entry.date)}</time></span
	>
</div>
