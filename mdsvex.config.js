import remarkUnwrapImages from 'remark-unwrap-images';

const config = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkUnwrapImages]
};

export default config;
