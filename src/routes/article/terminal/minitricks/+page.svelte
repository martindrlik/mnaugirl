<script lang="ts">
	import Article from '$lib/article/Article.svelte';
	import Block from '$lib/article/code/Block.svelte';
	import Inline from '$lib/article/code/Inline.svelte';
	import Par from '$lib/article/Par.svelte';
	import SubArticle from '$lib/article/SubArticle.svelte';
	import { terminal } from '$lib/post/TerminalPosts.svelte';

	const { headline, date } = terminal.miniTricks;
</script>

<Article {headline} {date}>
	<SubArticle>
		<Par>
			If you are working on a shared project and just want to see your own timeline, run this:
		</Par>
		<Block>git log --author="$(git config user.email)"</Block>
		<Par
			>How it works: The <Inline code="$(...)" /> syntax tells Zsh to run <Inline
				code="git config user.email"
			/>
			first, and then it plugs your email address right into the <Inline code="--author" /> flag.
		</Par>
	</SubArticle>

	<SubArticle>
		<Par>
			You might already know this little trick, but it's too good to skip! When my repo gets messy,
			I use this to delete every local branch except the one I am currently on:</Par
		>
		<Block>git branch -D $(git branch | grep -v \*)</Block>
		<Par>
			Git flags your current branch with a star. We filter it out to avoid cluttering your output
			with errors.
		</Par>
	</SubArticle>
	<SubArticle>
		<Par>Want to see what you type most?</Par>
		<Block>history | fc -ln 0 | sort | uniq -c | sort -nr | head</Block>
		<Par>
			Why check this? If you spot a command you’re typing a dozen times a day, it might be a perfect
			candidate for a quick alias! It’s totally optional, of course, but it’s a fun way to see if
			you can make your life a little easier.
		</Par>
	</SubArticle>
</Article>
