import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ fetch }) {
	try {
		const blog = await import('../../cms/pages/blog.md');

		const fetchPosts = await fetch('api/posts');

		const posts = await fetchPosts.json();

		return {
			content: blog.default,
			meta: blog.metadata,
			posts
		};
	} catch (e) {
		throw error(404, 'Could not find blog');
	}
}
