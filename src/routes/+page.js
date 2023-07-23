import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load() {
	try {
		const home = await import('../cms/pages/home.md');

		return {
			content: home.default,
			meta: home.metadata
		};
	} catch (e) {
		throw error(404, 'Could not find home');
	}
}
