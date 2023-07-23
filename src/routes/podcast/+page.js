import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ fetch }) {
	try {
		const podcast = await import('../../cms/pages/podcast.md');

		const response = await fetch('api/podcasts');

		const podcasts = await response.json();

		return {
			content: podcast.default,
			meta: podcast.metadata,
			podcasts
		};
	} catch (e) {
		throw error(404, 'Could not find podcast');
	}
}
