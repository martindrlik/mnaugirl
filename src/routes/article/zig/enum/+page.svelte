<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import Block from '$lib/article/code/Block.svelte';
	import { zig } from '$lib/entry/data';

	const { headline, date } = zig.enum;
</script>

<Article {headline} {date}>
	<Block
		>{`const std = @import("std");
const fieldNames = std.meta.fieldNames;
const stringToEnum = std.meta.stringToEnum;
const print = std.debug.print;

const Style = enum {
    menu,
    primary,
    secondary,

    pub fn describe(self: Style) []const u8 {
        return switch (self) {
            .menu => "menu style",
            .primary => "primary style",
            .secondary => "secondary style",
        };
    }
};

pub fn main(_: std.process.Init) !void {
    print("describe: {s}\\n", .{Style.primary.describe()});

    for (fieldNames(Style)) |name| print("fieldName: {s}\\n", .{name});

    print("from string: {}\\n", .{stringToEnum(Style, "primary") orelse unreachable});
}
`}</Block
	>
</Article>
