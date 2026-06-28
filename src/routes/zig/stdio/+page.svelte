<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import Block from '$lib/article/code/Block.svelte';
	import Inline from '$lib/article/code/Inline.svelte';
	import Par from '$lib/article/Par.svelte';
	import { zig } from '$lib/post/ZigPosts.svelte';

	const { headline, date } = zig.stdio;
</script>

<Article {headline} {date}>
	<Par>
		A simple example of writing to <Inline code="stdout" /> and reading from <Inline
			code="stdin"
		/>.
	</Par>
	<Block
		>{`const std = @import("std");
const builtin = @import("builtin");
const Io = std.Io;

pub fn main(init: std.process.Init) !void {
    const io = init.io;
    var buf: [40]u8 = undefined;
    var stdin = Io.File.stdin().reader(io, &buf);
    var stdout = Io.File.stdout().writer(io, &.{});
    try stdout.interface.print("Please enter a name: ", .{});
    while (true) {
        var name = try stdin.interface.takeDelimiter('\\n') orelse break;
        name = @constCast(std.mem.trimEnd(u8, name, " \\r"));
        if (name.len == 0) {
            break;
        }
        try stdout.interface.print("Hello {s}!\\n", .{name});
    }
}
`}
	</Block>
</Article>
