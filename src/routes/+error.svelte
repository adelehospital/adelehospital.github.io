<script>
	import { page } from '$app/state';
</script>

<section>
	<article>
		<h3>{page.status} {page.error.message}</h3>

		<span>🕳</span>
	</article>
</section>

<style>
	section {
		text-align: center;
	}
</style>
