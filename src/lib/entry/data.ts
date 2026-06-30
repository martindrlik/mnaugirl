import type { Entry } from './entry';
import { TerminalEntries } from './terminal';
import { ZigEntries } from './zig';

export const terminal = new TerminalEntries();
export const zig = new ZigEntries();

export const entries: Entry[] = [
	zig.queue,
	zig.enum,
	zig.stdio,
	zig.async,
	terminal.miniTricks,
	zig.tossingTheDice,
	zig.arrayList
];
