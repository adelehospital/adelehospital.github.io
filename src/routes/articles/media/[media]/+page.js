export const prerender = true;

export async function load({ fetch, params }) {
	const fetchPosts = await fetch('../../api/posts');

	const posts = await fetchPosts.json();

	return { posts, params };
}
