<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import Block from '$lib/article/code/Block.svelte';
	import ExternalLink from '$lib/ExternalLink.svelte';
	import Inline from '$lib/article/code/Inline.svelte';
	import Par from '$lib/article/Par.svelte';
	import { zig } from '$lib/post/ZigPosts.svelte';

	const { headline, date } = zig.arrayList;
</script>

<Article {headline} {date}>
	<Par>
		The <ExternalLink
			style="documentation"
			href="https://ziglang.org/documentation/0.16.0/std/#std.ArrayList">documentation</ExternalLink
		> describes it as a contiguous, growable list of items in memory. This is a wrapper around a slice
		of T values. The same allocator must be used throughout its entire lifetime. Initialize directly with
		<Inline code="empty" /> or <Inline code="initCapacity" />, and deinitialize with
		<Inline code="deinit" /> or <Inline code="toOwnedSlice" />.
	</Par>
	<Par>Here is a quick look at how to use it:</Par>
	<Block>
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
	</Block>
</Article>
