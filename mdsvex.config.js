import rehypeUnwrapImages from 'rehype-unwrap-images';

const config = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	rehypePlugins: [rehypeUnwrapImages]
};

export default config;
