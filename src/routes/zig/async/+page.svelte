<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import Block from '$lib/article/code/Block.svelte';
	import Inline from '$lib/article/code/Inline.svelte';
	import Par from '$lib/article/Par.svelte';
	import ExternalLink from '$lib/ExternalLink.svelte';
	import { zig } from '$lib/post/ZigPosts.svelte';

	const { headline, date } = zig.async;
</script>

<Article {headline} {date}>
	<Par>
		The <ExternalLink
			style="documentation"
			href="https://ziglang.org/documentation/0.16.0/std/#std.ArrayList">documentation</ExternalLink
		> describes <Inline code="async" /> as it calls <Inline code="function" /> with <Inline
			code="args"
		/>, such that the return value of the function is not guaranteed to be available until <Inline
			code="await"
		/> is called. <Inline code="function" /> may be called immediately, before <Inline
			code="async"
		/> returns. This has weaker guarantees than concurrent, making more portable and reusable.
	</Par>
	<Par
		>When this function returns, it is guaranteed that <Inline code="function" /> has already been called
		and completed, or it has successfully been assigned a unit of concurrency.</Par
	>
	<Par>Let's dive in with some example:</Par>
	<Block
		>{`const std = @import("std");
const Io = std.Io;

pub fn main(init: std.process.Init) !void {
    showroom(init.io);
}

pub fn showroom(io: Io) void {
    var task1 = io.async(sum, .{ 1, 2 });
    defer _ = task1.cancel(io);
    var task2 = io.async(sum, .{ 3, 4 });
    defer _ = task2.cancel(io);

    std.debug.print("other work\\n", .{});

    const result1 = task1.await(io);
    const result2 = task2.await(io);

    std.debug.print("total sum = {}\\n", .{result1 + result2});
}

fn sum(a: usize, b: usize) usize {
    defer std.debug.print("sum({d}, {d}) is done\\n", .{ a, b });
    return a + b;
}
`}
	</Block>
</Article>
