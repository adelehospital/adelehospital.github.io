<script>
	import { formatDate } from '$lib/utils';

	import { fade } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<a href="/articles">
	<section in:fade>
		<small>← Revenir à la liste d'articles</small>
	</section>
</a>

<br />

<hgroup in:fade={{ delay: 50 }}>
	<h1>{data.meta.title}</h1>
	<p>Publié le {formatDate(data.meta.date)}</p>
</hgroup>

<div in:fade={{ delay: 100 }}>
	{#each data.meta.tags as tag}
		<a href="/articles/tags/{tag}"><kbd>#{tag}</kbd></a>
	{/each}
</div>

<br />

<div in:fade={{ delay: 150 }}>
	<svelte:component this={data.content} />
</div>

<style>
	section {
		margin-bottom: 0;
	}
</style>
