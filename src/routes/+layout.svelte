<script>
	import '@picocss/pico';
	import './styles.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main class="container">
		{@render children?.()}
	</main>

	<Footer />
</div>
