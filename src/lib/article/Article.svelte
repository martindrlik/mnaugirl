<script lang="ts">
	import { formatPostDate } from '$lib/date';
	import Body from './Body.svelte';

	let { headline, date, children } = $props();
</script>

<article>
	<h1 class="text-2xl font-bold mb-2">{headline}</h1>
	<div class="mb-4"><time datetime="2016-01-20">{formatPostDate(date)}</time></div>
	<Body>
		{@render children()}
	</Body>
</article>
