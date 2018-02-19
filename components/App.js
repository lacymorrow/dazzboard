
// DEMO
import GoogleMapReact from 'google-map-react'
import zipcodes from 'zipcodes'

import jsonp from 'jsonp'
import assign from 'object-assign'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'

import Layout from './GlobalLayout'
import Card from './Card'
import Header from './Header'
import { colors, gradients } from './styles'
import DashGroup from './DashGroup'
import DashList from './DashList'
import DashTabs from './DashTabs'
import Dash from './Dash'
import Board from './Board'
import Code from './Code'
import Clock from './Clock'

class App extends React.Component {

	constructor ( props ) {

		super( props )
		this.state = assign(
			{},
			{
				drawerOpen: false,
				repo: {},
				zip: {}
			}
		)

	}

	componentDidMount () {

		jsonp( 'https://api.github.com/repos/jxnblk/rebass', ( err, response ) => {

			this.setState( { repo: response.data } )
			console.log( response.data )

		} ).bind( this )

		this.setState( {zip: zipcodes.lookup( 94115 ) } )

	}

	demo ( ix, k ) {

		var els = []
		for ( var i = 0; i < ix; i++ ) {

			els.push(
				<Dash key={k+i}
					title='Global Average'
					subtitle='160ms RTT'
					text='0.4mbps'
					subtext='119.06s'
					badge={{error: '+114.06s'}}>
				</Dash>
			)

		}
		return els

	}

	render () {

		const sx = {
			app: {
				width: '100%',
				maxWidth: '2800px',
				borderRadius: '4px',
				paddingTop: '5px',
				paddingBottom: '5px',
				boxShadow: '0 6px 20px 0 rgba(37, 45, 71, 0.34)',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				position: 'relative',
				zIndex: '99',
				color: colors.lighter,
				backgroundColor: colors.dashboardBgDarkest
			}
		}
		const {
			drawerOpen,
			repo
		} = this.state

		return (
			<Layout>
				<div style={sx.app}>
					<Header />
					<Board>
						<Flex width={[1, 1, 1, 1 / 4]} direction='column'>
							<Card title='Compiler Status' text='Idle' subtext='done in 0.249 sec' />
							<Card background={gradients.berry} title='Errors and Warnings' text='0' subtext='and no warnings' />
							<Card background={gradients.evening} title='Total Asset Size' text='6.23 MB' />
						</Flex>
						<Dash className='code' width={[1, 1, 1, 1 / 2]} direction='column'>
							<Code color={colors.info}>Hash: 3e01a671b7487e20e936<br />Webpack version: 3.6.0</Code>
							<Code color={colors.warn}>Note: Running dev-server does not necessarily represent accurate final assets size and performance metrics.</Code>
							<Code color={colors.success}>Project has been successfully compiled</Code>
						</Dash>

						<Dash style={{height: '215px'}} width={[1, 1, 1, 1 / 2]}>
							<GoogleMapReact
								bootstrapURLKeys={{key: 'AIzaSyAgy7hEbpa5f6db4beN2kycYR5TBu-jzro'}}
								center={{lat: this.state.zip.latitude, lng: this.state.zip.longitude}}
								zoom={11}
							/>
						</Dash>

						<Dash width={1/4} style={{marginBottom:'2px'}} >
							<Clock />
						</Dash>
						<DashGroup width={[1, 1, 1, 1 / 4]} height='285px'>
							<Dash
								title='dist/components/Script.js'
								text='0 CHUNKS, 1.08 KB'
								badge={{ success: {text: 'OK', link: '#'}}}>
							</Dash>
							<Dash
								title='/user/name/random/file/path/dist/components/Script.js'
								text='1.08 KB'
								badge={{ success: {text: 'OK', link: '#'}}}>
							</Dash>
							{ this.demo( 10, 'a' ) }
						</DashGroup>
					</Board>

					<Board>
						<DashTabs width={[1, 1, 1, 1 / 2]}>
							<DashGroup title="All Modules" text="343" subtext="100%">
								<Dash
									title='dist/components/Script.js'
									text='829 MB'
									badge={{ success: {text: 'OK', link: '#'} }}>
								</Dash>
								{ this.demo( 10, 'b' ) }
							</DashGroup>

							<DashGroup title="Treeshakeable" text="6" subtext="2%">
								<Dash
									title='/user/name/random/file/path/dist/components/Script.js'
									text='1.08 KB'
									badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
								</Dash>
								{ this.demo( 10, 'c' ) }
							</DashGroup>

							<DashList title="Non-Treeshakeable" text="343" subtext="100%">
								<Dash
									title='dist/components/Script.js'
									text='829 MB'
									badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
								</Dash>
								<Dash
									title='./node_modules/core-js/library/modules/_core.js'
									text='122 Bytes'>
								</Dash>
								{ this.demo( 10, 'd' ) }
							</DashList>

							<DashList title="Mixed Modules" text="3" subtext="10%">
								<Dash
									title='dist/components/Script.js'
									text='829 MB'
									badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
								</Dash>
								<Dash
									title='./node_modules/core-js/library/modules/_core.js'
									text='122 Bytes'>
								</Dash>
								{ this.demo( 10, 'e' ) }
							</DashList>
						</DashTabs>
						<DashGroup width={[1, 1, 1, 1 / 2]} title="File List">
							<Dash
								title='dist/components/Script.js'
								text='0 CHUNKS, 1.08 KB'
								badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
							</Dash>
							{ this.demo( 20, 'f' ) }
						</DashGroup>
					</Board>
				</div>
			</Layout>
		)

	}

}

export default App
