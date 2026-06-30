import type { ResolvedPathname } from '$app/types';

export interface Entry {
	headline: string;
	date: string;
	href: ResolvedPathname;
}
