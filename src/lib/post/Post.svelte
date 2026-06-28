<script lang="ts" module>
	import type { ResolvedPathname } from '$app/types';

	export interface Post {
		headline: string;
		date: string;
		href: ResolvedPathname;
	}
</script>
