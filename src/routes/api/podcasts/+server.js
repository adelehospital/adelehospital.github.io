import { json } from '@sveltejs/kit';

export const prerender = true;

async function getPodcasts() {
	let podcasts = [];

	const paths = import.meta.glob('/src/cms/podcast/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			const podcast = { ...metadata, slug };
			podcasts.push(podcast);
		}
	}

	podcasts = podcasts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return podcasts;
}

export async function GET() {
	const podcasts = await getPodcasts();

	return json(podcasts);
}
