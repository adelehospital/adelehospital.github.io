<script>
	import { formatDate } from '$lib/utils';

	import { fade } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Podcast</title>
	<meta name="description" content="Podcast" />
</svelte:head>

<div in:fade>
	<svelte:component this={data.content} />
</div>

<br />

{#each data.podcasts as { date, link }, i}
	<section in:fade={{ delay: i * 50 }}>
		<iframe
			title="${formatDate(date)}-${link}"
			style="border-radius:12px"
			src={link + '?theme=0'}
			width="100%"
			height="152"
			frameBorder="0"
			allowfullscreen=""
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		/>
	</section>
{/each}
