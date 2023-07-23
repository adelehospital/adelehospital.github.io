<script>
	import '@picocss/pico';
	import './styles.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app">
	<body>
		<Header />

		<main class="container">
			<slot />
		</main>

		<Footer />
	</body>
</div>
