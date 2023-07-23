import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load() {
	try {
		const cv = await import('../../cms/pages/cv.md');

		return {
			content: cv.default,
			meta: cv.metadata
		};
	} catch (e) {
		throw error(404, 'Could not find cv');
	}
}
