<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import Block from '$lib/article/code/Block.svelte';
	import { zig } from '$lib/entry/data';

	const { headline, date } = zig.async;
</script>

<Article {headline} {date}>
	<Block
		>{`const std = @import("std");
const Cancelable = Io.Cancelable;
const Duration = Io.Duration;
const Io = std.Io;
const Timestamp = Io.Timestamp;

pub fn main(init: std.process.Init) !void {
    const io = init.io;
    var task1 = io.async(work, .{ io, 1, 2 });
    var task2 = io.async(work, .{ io, 3, 4 });
    const start = Timestamp.now(io, .awake);
    try io.sleep(.fromSeconds(1), .awake);
    const result1 = try task1.await(io);
    const result2 = try task2.await(io);
    std.debug.print("elapsed {}\\n", .{start.untilNow(io, .awake).toSeconds()});
    std.debug.print("total sum {d}\\n", .{result1 + result2});

    // work(1, 2) finished
    // work(3, 4) finished
    // elapsed 1 second(s)
    // total sum 10
}

fn work(io: Io, a: u8, b: u8) Cancelable!u8 {
    defer {
        std.debug.print("work({d}, {d}) finished\\n", .{ a, b });
    }
    try io.sleep(.fromSeconds(1), .awake);
    return a + b;
}
`}
	</Block>
</Article>
