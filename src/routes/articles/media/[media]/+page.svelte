<script>
	import ArticleList from '$lib/components/ArticleList.svelte';
	import { fade } from 'svelte/transition';

	let { data } = $props();

	let filteredPostsList = $derived(
		data.posts.filter((post) => post.media?.name === data.params.media)
	);
</script>

<svelte:head>
	<title>{data.params.media.name}</title>
	<meta name="description" content={data.params.media} />
</svelte:head>

<a href="/articles">
	<section in:fade>
		<small>← Revenir à la liste d'articles</small>
	</section>
</a>

<h1 in:fade><kbd class="media-kbd">@{data.params.media}</kbd></h1>

<br />

<ArticleList articles={filteredPostsList} />

<style>
	.media-kbd {
		background-color: var(--pico-primary-background);
	}
</style>
