import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ fetch }) {
	try {
		const podcast = await import('../../cms/pages/podcast.md');

		return {
			content: podcast.default,
			meta: podcast.metadata
		};
	} catch (e) {
		throw error(404, 'Could not find podcast');
	}
}
