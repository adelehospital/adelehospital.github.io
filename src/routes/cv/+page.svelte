<script>
	import { fade } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" content="CV" />
</svelte:head>

<section in:fade>
	<svelte:component this={data.content} />
</section>
