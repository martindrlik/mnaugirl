<script lang="ts">
	import Par from '$lib/article/Par.svelte';
	import Article from '$lib/article/Article.svelte';
	import Block from '$lib/article/code/Block.svelte';
	import { zig } from '$lib/entry/data';

	const { headline, date } = zig.tossingTheDice;
</script>

<Article {headline} {date}>
	<Par>
		Whether you want to let the dice make your life choices or you're just rolling for initiative,
		sometimes you need to leave things to chance. In this post, we'll explore how to generate random
		values in Zig:
	</Par>
	<Block>
		{`const std = @import("std");

pub fn main(init: std.process.Init) !void {
    std.debug.print("tossing the dice: {d}\\n", .{roll(init.io)});
}

pub fn roll(io: std.Io) u8 {
    const rand_impl: std.Random.IoSource = .{ .io = io };
    const rand = rand_impl.interface();
    return rand.intRangeAtMost(u8, 1, 6);
}
`}
	</Block>
</Article>
