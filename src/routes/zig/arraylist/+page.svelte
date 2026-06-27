<script lang="ts">
	import Body from '$lib/article/Body.svelte';
	import Par from '$lib/article/Par.svelte';
	import Code from '$lib/article/Code.svelte';
	import CodeInline from '$lib/article/CodeInline.svelte';
	import Headline from '$lib/article/Headline.svelte';
	import Link from '$lib/article/Link.svelte';

	const date = 'June 27, 2026';
</script>

<article>
	<Headline {date}>Zig: ArrayList</Headline>
	<Body>
		<Par>
			The <Link href="https://ziglang.org/documentation/0.16.0/std/#std.ArrayList"
				>documentation</Link
			> describes it as a contiguous, growable list of items in memory. This is a wrapper around a slice
			of T values. The same allocator must be used throughout its entire lifetime. Initialize directly
			with <CodeInline code="empty" /> or <CodeInline code="initCapacity" />, and deinitialize with
			<CodeInline code="deinit" /> or <CodeInline code="toOwnedSlice" />.
		</Par>
		<Par>Here is a quick look at how to use it:</Par>
		<Code>
			{`const std = @import("std");
const Allocator = std.mem.Allocator;
const ArrayList = std.ArrayList;

pub fn main(init: std.process.Init) !void {
    try showroom(init.gpa);
}

fn showroom(gpa: Allocator) !void {
    var list: ArrayList(u8) = .empty;
    defer list.deinit(gpa);
    try list.append(gpa, 1);
    try list.append(gpa, 2);
    try list.append(gpa, 3);
    for (list.items) |u| {
        std.debug.print("value: {d}\\n", .{u});
    }
    while (true) {
        const u = list.pop() orelse break;
        std.debug.print("popped value: {d}\\n", .{u});
    }
}
`}
		</Code>
	</Body>
</article>
