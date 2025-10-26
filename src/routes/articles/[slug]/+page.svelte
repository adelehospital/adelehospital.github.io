<script>
	import { formatDate } from '$lib/utils';

	import { fade } from 'svelte/transition';

	let { data } = $props();
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
	{#if data.meta.media}
		<a href="/articles/media/{data.meta.media}">
			<kbd class="media-kbd">@ {data.meta.media}</kbd>
		</a>
	{/if}
	{#each data.meta.tags as tag}
		<a href="/articles/tags/{tag}"><kbd>#{tag}</kbd></a>
	{/each}
</div>

<br />

<div in:fade={{ delay: 150 }}>
	<data.content />
</div>

{#if data.meta.thumbnail !== undefined}
	<img src={data.meta.thumbnail} alt={data.meta.title} />
{/if}

{#if data.meta.pdf_file !== undefined}
	<object data={data.meta.pdf_file} type="application/pdf" title={data.meta.title}></object>
{/if}

<style>
	section {
		margin-bottom: 0;
	}

	object {
		min-height: 100vh;
		width: 100%;
	}

	.media-kbd {
		background-color: var(--pico-primary-background);
	}
</style>
