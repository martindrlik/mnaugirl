<script lang="ts" module>
	function formatDate(date: string): string {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		const fmt = new Intl.DateTimeFormat('en-US', options);
		return fmt.format(Date.parse(date));
	}

	export const formatPostDate = formatDate;
</script>
