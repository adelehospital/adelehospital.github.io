<script>
	import { fade } from 'svelte/transition';
	import ArticleList from '$lib/components/ArticleList.svelte';

	let { data } = $props();

	let filteredPostsList = $derived(
		data.posts.filter(
			(post) =>
				post.title.toLowerCase().indexOf(data.params.tag.toLowerCase()) !== -1 ||
				post.tags.some(
					(element) => element.toLowerCase().indexOf(data.params.tag.toLowerCase()) !== -1
				)
		)
	);
</script>

<svelte:head>
	<title>{data.params.tag}</title>
	<meta name="description" content={data.params.tag} />
</svelte:head>

<a href="/articles">
	<section in:fade>
		<small>← Revenir à la liste d'articles</small>
	</section>
</a>

<h1 in:fade><kbd>#{data.params.tag}</kbd></h1>

<br />

<ArticleList articles={filteredPostsList} />
