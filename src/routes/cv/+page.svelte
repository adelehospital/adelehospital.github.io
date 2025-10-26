<script>
	import { fade } from 'svelte/transition';

	let { data } = $props();
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" content="CV" />
</svelte:head>

<section in:fade>
	<data.content />
</section>
