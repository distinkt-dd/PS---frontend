import postcssPxToRem from 'postcss-pxtorem'

export default ({ env }) => {
	const plugins = []

	plugins.push(
		postcssPxToRem({ rootValue: 16, mediaQuery: true, propsList: ['*'] }),
	)

	return {
		plugins,
	}
}
