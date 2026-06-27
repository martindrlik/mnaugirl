<script lang="ts">
	import Body from '$lib/article/Body.svelte';
	import Code from '$lib/article/Code.svelte';
	import CodeInline from '$lib/article/CodeInline.svelte';
	import Headline from '$lib/article/Headline.svelte';
	import Par from '$lib/article/Par.svelte';
	import SubArticle from '$lib/article/SubArticle.svelte';

	const date = 'June 27, 2026';
</script>

<article>
	<Headline {date}>Terminal: Mini-Tricks</Headline>
	<Body>
		<SubArticle>
			<Par>
				If you are working on a shared project and just want to see your own timeline, run this:
			</Par>
			<Code>git log --author="$(git config user.email)"</Code>
			<Par
				>How it works: The <CodeInline code="$(...)" /> syntax tells Zsh to run <CodeInline
					code="git config user.email"
				/>
				first, and then it plugs your email address right into the <CodeInline code="--author" /> flag.
			</Par>
		</SubArticle>

		<SubArticle>
			<Par>
				You might already know this little trick, but it's too good to skip! When my repo gets
				messy, I use this to delete every local branch except the one I am currently on:</Par
			>
			<Code>git branch -D $(git branch | grep -v \*)</Code>
			<Par>
				Git flags your current branch with a star. We filter it out to avoid cluttering your output
				with errors.
			</Par>
		</SubArticle>
		<SubArticle>
			<Par>Want to see what you type most?</Par>
			<Code>history | fc -ln 0 | sort | uniq -c | sort -nr | head</Code>
			<Par>
				Why check this? If you spot a command you’re typing a dozen times a day, it might be a
				perfect candidate for a quick alias! It’s totally optional, of course, but it’s a fun way to
				see if you can make your life a little easier.
			</Par>
		</SubArticle>
	</Body>
</article>
