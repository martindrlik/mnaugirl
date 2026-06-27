<script lang="ts">
	import Body from '$lib/article/Body.svelte';
	import Par from '$lib/article/Par.svelte';
	import Headline from '$lib/article/Headline.svelte';
	import Code from '$lib/article/Code.svelte';

	const date = 'June 27, 2026';
</script>

<article>
	<Headline {date}>Tossing the dice</Headline>
	<Body>
		<Par>
			Whether you want to let the dice make your life choices or you're just rolling for initiative,
			sometimes you need to leave things to chance. In this post, we'll explore how to generate
			random values in Zig:
		</Par>
		<Code>
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
		</Code>
	</Body>
</article>
