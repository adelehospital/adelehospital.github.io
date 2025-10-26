import { json } from '@sveltejs/kit';

export const prerender = true;

async function getPosts() {
	let mediaObj = {};

	const media = import.meta.glob('/src/cms/media/*.md', { eager: true });

	for (const path in media) {
		const file = media[path];

		if (file && typeof file === 'object' && 'metadata' in file) {
			mediaObj[file.metadata.name] = { ...file.metadata };
		}
	}

	let posts = [];

	const paths = import.meta.glob('/src/cms/articles/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			let metadata;

			if (typeof file.metadata.media !== 'undefined') {
				metadata = { ...file.metadata, media: mediaObj[file.metadata.media] };
			} else {
				metadata = file.metadata;
			}
			posts.push({ ...metadata, slug });
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();

	return json(posts);
}
