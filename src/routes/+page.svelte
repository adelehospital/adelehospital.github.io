<script>
	import { fade } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Adèle Hospital</title>
	<meta name="description" content="Journaliste presse écrite et radio localisée à Paris. Mes sujets de prédilection sont l’agriculture, la gestion des déchets, la biodiversité et la santé environnementale." />
</svelte:head>

<section in:fade>
	<img
		src="/images/adele.webp"
		alt="Adèle Hospital portant un chapeau de paille et un haut blanc, assise face à un champ de blé avec une forêt en arrière plan, le tout sous un beau ciel bleu."
	/>

	<svelte:component this={data.content} />
</section>

<style>
	img {
		height: 40vh;
		margin-bottom: 1rem;
		border-radius: 8px;
	}

	section {
		text-align: center;
	}
</style>
