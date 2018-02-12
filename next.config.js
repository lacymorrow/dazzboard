module.exports = {
	link: [
	  {
	    rel: 'icon',
	    type: 'image/x-icon',
	    href: 'favicon.ico',
	  },
	],
	exportPathMap: () => {
		return {
			'/': { page: '/' }
		}
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty'
		}

		return config
	}
}
