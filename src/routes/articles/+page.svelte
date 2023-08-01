<script>
	import { formatDate } from '$lib/utils';

	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let data;

	let searchTerm = '';

	$: filteredPostsList = data.posts.filter(
		(post) =>
			post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
			post.tags.some((element) => element.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
	);
</script>

<svelte:head>
	<title>Articles</title>
	<meta name="description" content="Articles" />
</svelte:head>

<div in:fade>
	<svelte:component this={data.content} />
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

{#each filteredPostsList as post, i (post.slug)}
	<a href="/articles/{post.slug}" in:fade={{ delay: 50 + i * 50 }} animate:flip={{ duration: 200 }}>
		<article>
			<hgroup>
				<h3>{post.title}</h3>
				<p>{formatDate(post.date)}</p>
			</hgroup>
			{#each post.tags as tag}
				<a href="/articles/tags/{tag}"><kbd>#{tag}</kbd></a>
			{/each}
		</article>
	</a>
{/each}

{#if !filteredPostsList.length}
	<article class="no-article">Aucun article ne correspond à ces termes de recherche</article>
{/if}

<style>
	.no-article {
		text-align: center;
	}
</style>
