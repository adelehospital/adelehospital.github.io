<script>
	import { fade } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Adèle Hospital</title>
	<meta name="description" content="homepage" />
</svelte:head>

<section in:fade>
	<svelte:component this={data.content} />
</section>
