<script>
	import { formatDate } from '$lib/utils';

	import { fade } from 'svelte/transition';

	export let data;

	$: filteredPostsList = data.posts.filter(
		(post) =>
			post.title.toLowerCase().indexOf(data.params.tag.toLowerCase()) !== -1 ||
			post.tags.some(
				(element) => element.toLowerCase().indexOf(data.params.tag.toLowerCase()) !== -1
			)
	);
</script>

<svelte:head>
	<title>{data.params.tag}</title>
	<meta name="description" content={data.params.tag} />
</svelte:head>

<h1 in:fade><kbd>#{data.params.tag}</kbd></h1>

<br />

{#each filteredPostsList as { slug, title, date, tags }, i}
	<a href="/articles/{slug}">
		<article in:fade={{ delay: i * 50 }}>
			<hgroup>
				<h3>{title}</h3>
				<p>{formatDate(date)}</p>
			</hgroup>
			{#each tags as tag}
				<a href="/articles/tags/{tag}"><kbd>#{tag}</kbd></a>
			{/each}
		</article>
	</a>
{/each}
