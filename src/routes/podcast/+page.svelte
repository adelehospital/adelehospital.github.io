<script>
	import { fade } from 'svelte/transition';
	import { formatDate } from '$lib/utils';

	let { data } = $props();

	let dataPromise = $state(null);

	$effect(() => {
		dataPromise = getPodcasts();
	});

	async function getPodcasts() {
		const res = await fetch('https://anchor.fm/s/4c702550/podcast/rss');

		const text = await res.text();

		const parser = new DOMParser();
		const xml = parser.parseFromString(text, 'application/xml');

		const items = Array.from(xml.querySelectorAll('item')).map((item) => ({
			title: item.querySelector('title')?.textContent,
			description: item.querySelector('description')?.textContent,
			date: item.querySelector('pubDate')?.textContent,
			enclosureUrl: item.querySelector('enclosure')?.getAttribute('url')
		}));

		return items;
	}
</script>

<svelte:head>
	<title>Podcast</title>
	<meta name="description" content="Podcast" />
</svelte:head>

<div in:fade>
	<data.content />
</div>

<br />

{#await dataPromise}
	<article aria-busy="true"></article>
{:then items}
	{#each items as item}
		<section in:fade={{ delay: i * 50 }}>
			<article>
				<h3>{@html item.title}</h3>

				<br />

				<audio controls src={item.enclosureUrl}></audio>

				<details name="podcast">
					<summary> ... </summary>
					<p>
						{@html item.description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, ' ')}
					</p>
				</details>

				<footer>
					{formatDate(Date.parse(item.date))}
				</footer>
			</article>
		</section>
	{/each}
{:catch _}
	<article>Erreur dans la récupération des épisodes...</article>
{/await}

<style>
	:global(img) {
		border-radius: 12rem;
	}

	audio {
		width: 100%;
	}

	article {
		padding: 1rem;
		margin-bottom: 1rem;
	}

	summary {
		padding: 1rem 0;
		font-size: larger;
	}
</style>
