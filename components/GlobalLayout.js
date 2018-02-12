import { Provider } from 'rebass'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Script from './Script'

import { colors, gradient } from './styles'

const sx = {
	layout: {
		color: '#222'
	}
}

const Layout = (props) => {
	let {title, ...other} = props
	return (
		<Provider
			theme={{
				font: '"Avenir Next", Helvetica, sans-serif',
				fontSizes: [12, 16, 24, 36, 48, 72]
			}}>
			<div style={sx.layout}>
				<Head>
					<title>{props.title || 'Init Next'}</title>

					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />

					<Script>
						{() => {
							// any arbitrary js
							console.log(`init-next loaded`)
						}}
					</Script>
				</Head>
				<Header {...other} />

				{props.children}

				<Footer />
			</div>

			{/* global app styles */}
			<style global jsx>{`
				body {
					background: white;
					margin: 0;
				}
				a {
					padding: 16px;
					text-decoration: none;
					color: inherit;
					letter-spacing: 2.4px;
					text-transform: uppercase;
					font-size: 12px;
					font-weight: 700;
				}
			`}</style>
		</Provider>
	)
}

export default Layout
