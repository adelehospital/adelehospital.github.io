import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
	try {
		const post = await import(`../../../cms/blog/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, 'Could not find ${params.slug}');
	}
}
