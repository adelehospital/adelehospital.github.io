<script>
	import { fade } from 'svelte/transition';
	import ArticleList from '$lib/components/ArticleList.svelte';

	let { data } = $props();

	let searchTerm = $state('');

	let filteredPostsList = $derived(
		data.posts.filter(
			(post) =>
				post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
				post.tags.some(
					(element) => element.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
				) ||
				(typeof post.media.name !== 'undefined' &&
					post.media.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
		)
	);
</script>

<svelte:head>
	<title>Articles</title>
	<meta name="description" content="Articles" />
</svelte:head>

<div in:fade>
	<data.content />
</div>

<br />

<div in:fade={{ delay: 50 }}>
	<input
		type="search"
		placeholder="Rechercher des articles"
		aria-label="Rechercher des articles"
		bind:value={searchTerm}
	/>
</div>

<br />

<ArticleList articles={filteredPostsList} />

<style>
	.no-article {
		text-align: center;
		padding: 1rem;
	}
</style>
