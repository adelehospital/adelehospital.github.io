import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ fetch }) {
	try {
		const article = await import('../../cms/pages/articles.md');

		const fetchPosts = await fetch('api/posts');

		const posts = await fetchPosts.json();

		return {
			content: article.default,
			meta: article.metadata,
			posts
		};
	} catch (e) {
		throw error(404, 'Could not find article');
	}
}
