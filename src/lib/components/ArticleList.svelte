<script>
	import { formatDate } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let { articles } = $props();
</script>

{#if !articles.length}
	<article class="no-article">Aucun article ne correspond à ces termes de recherche</article>
{:else}
	{#each articles as post, i (post.slug)}
		<a
			href="/articles/{post.slug}"
			in:fade={{ delay: 50 + i * 50 }}
			animate:flip={{ duration: 200 }}
		>
			<article>
				<div class="title">
					{#if post.media?.thumbnail}
						<a href="/articles/media/{post.media.name}">
							<img src={post.media.thumbnail} alt={post.media.name} class="avatar" />
						</a>
					{/if}
					<hgroup>
						<h3>{post.title}</h3>
						<p>{formatDate(post.date)}</p>
					</hgroup>
				</div>
				{#if post?.media?.name || post.tags.length > 0}
					<footer>
						{#if post.media?.name}
							<a href="/articles/media/{post.media.name}">
								<kbd class="media-kbd">@ {post.media.name}</kbd>
							</a>
						{/if}
						{#each post.tags as tag}
							<a href="/articles/tags/{tag}"><kbd>#{tag}</kbd></a>
						{/each}
					</footer>
				{/if}
			</article>
		</a>
	{/each}
{/if}

<style>
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.5rem;
	}

	.avatar {
		background-color: #eff1f4;
		vertical-align: middle;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		padding: 0.5rem;
	}

	.no-article {
		padding: 1rem;
	}

	article {
		margin: 1rem;
	}

	hgroup {
		padding: 0.5rem;
		margin-bottom: 0;
	}

	.media-kbd {
		background-color: var(--pico-primary-background);
	}
</style>
