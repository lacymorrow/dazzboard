const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
	.prepare()
	.then(() => {
		const port = 3000
		const server = express()

		// // Sometimes routes attempt a non-existent favicon lookup
		// server.get('/favicon.ico', (req, res) => {
		//   return handle(req, res)
		// })

		// Handle all redirects
		const redirects = [
		  // { from: '/old-link', to: '/new-link'},
		  // { from: '/old-link2', to: '/new-link2', 301, 'get' }
		]

		redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
		  server[method](from, (req, res) => {
		    res.redirect(type, to)
		  })
		})

		server.get('/repo/:repo', (req, res) => {
			const actualPage = '/'
			const queryParams = { repo: req.params.repo }
			app.render(req, res, actualPage, queryParams)
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})
		server.listen(port, err => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	})
	.catch(ex => {
		console.error(ex.stack)
		process.exit(1)
	})
