import { Provider } from 'rebass'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Script from './Script'

import { colors, gradient } from './styles'

const sx = {
	app: {
		margin: '0',
		padding: '40px',
		width: '100%',
		minHeight: '100vh',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundImage: 'linear-gradient(180deg, #f476b7 0%, #8041ee 100%)'
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
			<div>
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
				<div style={sx.app}>
					{props.children}
				</div>
			</div>

			{/* global app styles */}
			<style global jsx>{`
				* {
				  box-sizing: border-box;
				}

				html {
					text-rendering: optimizeLegibility;
				}
				
				a {
				  text-decoration: none;
				}

				a:active,
				a:hover {
				  outline: 0;
				}

				h1,
				h2,
				h3,
				h4,
				h5,
				h6,
				p {
				  padding: 0;
				  margin: 0;
				}

				ul {
				  padding: 0;
				  list-style-type: none;
				}

				body {
					margin: 0;
				}

				::-webkit-scrollbar {
					width: 16px;
					background: var(--dashboard-bg-main);
				}

				::-webkit-scrollbar-thumb {
					border: 5px solid transparent;
					background-clip: padding-box;
					padding: 2px;
					border-radius: 8px;
					box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
				}

				::-webkit-scrollbar-thumb :hover {
					box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
				}
			`}</style>
		</Provider>
	)
}

export default Layout
