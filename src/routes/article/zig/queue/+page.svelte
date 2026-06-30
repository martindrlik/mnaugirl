<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import Block from '$lib/article/code/Block.svelte';
	import { zig } from '$lib/entry/data';

	const { headline, date } = zig.queue;
</script>

<Article {headline} {date}>
	<Block
		>{`const std = @import("std");
const Io = std.Io;
const Canceled = Io.Cancelable.Canceled;
const Closed = Io.QueueClosedError.Closed;
const Group = Io.Group;
const Queue = Io.Queue;

pub fn main(init: std.process.Init) !void {
    const io = init.io;

    var buffer: [2]u8 = undefined;
    var queue: Queue(u8) = .init(&buffer);

    var group: Group = .init;
    group.async(io, sum, .{ io, &queue, 1, 2 });
    group.async(io, sum, .{ io, &queue, 3, 4 });
    try group.await(io);

    queue.close(io);

    while (true) {
        const result = queue.getOne(io) catch break;
        std.debug.print("result: {d}\\n", .{result});
    }

    // result: 3
    // result: 7
}

fn sum(io: Io, queue: *Queue(u8), a: u8, b: u8) !void {
    queue.putOne(io, a + b) catch |err| switch (err) {
        Closed => return,
        Canceled => return Canceled,
    };
}
`}</Block
	>
</Article>
