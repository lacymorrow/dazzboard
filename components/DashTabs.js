import {
	Flex,
	Box,
	List,
	Text,
	Tabs,
	TabItem
} from 'rebass'
import assign from 'object-assign'
import PropTypes from 'prop-types'

import Dash from './Dash'
import Board from './Board'

import { colors, fontSizes, pallate } from './styles'

class DashTabs extends React.Component {

	constructor (props) {

		super(props)
		this.state = assign(
			{},
			{
				activeTab: 0
			}
		)
		this.changeTab = this.changeTab.bind( this )
	}

	changeTab ( i ) {

		this.setState( { activeTab: i } )

	}

	render () {

		const { height, width } = this.props
		const sx = {
			dash: {
				background: colors.dashboardBgDarker,
				margin: '0 4px 4px 0',
				height: '100%'
			},
			board: {
				background: colors.dashboardBgDarker,
				position: 'relative',
				margin: '0',
				padding: '0',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				flexDirection: 'column'
			},
			tabs: {
				background: colors.dashboardBgDarker,
				border: '0'
			},
			tabItem: {
				fontSize: fontSizes.fontBodyXS,
				padding: '8px',
				margin: '0',
				marginRight: 'auto'
			},
			tabContainer: {
				height: height || '175px'
			},
			title: {
				color: colors.colorMain,
				fontSize: fontSizes.fontHeaderSM,
				textTransform: 'uppercase',
				fontWeight: '500'
			},
			text: {
				color: colors.lighter
			},
			subtext: {
				fontWeight: '500'
			}
		}

		return (

			<Board width={width} style={sx.board} { ...this.props } >
				<Tabs mb={2} width={1} style={sx.tabs}>
					{React.Children.map( this.props.children, ( child, i ) => {

						const tabItemColor = child.props.color || pallate[i % pallate.length] || colors.colorData1
						return (
							<TabItem
								onClick={ () => this.changeTab( i ) }
								active={this.state.activeTab === i}
								width={1}
								style={{ ...sx.tabItem, color: tabItemColor }} >
								{child.props.title && ( <Text is='h4' width={1} style={sx.title}>{child.props.title}</Text> )}
								{child.props.text && ( <Text width={1} style={sx.text}>{child.props.text}</Text> )}
								{child.props.subtext && ( <Text width={1} style={sx.subtext}>{child.props.subtext}</Text> )}
							</TabItem>
						)

					} )}
				</Tabs>
				<Box className='tabContainer' height={'200px'} style={sx.tabContainer}>
					{React.Children.map( this.props.children, ( child, i ) => {

						return ( <Dash className='dashtab' width={1} style={{ ...sx.dash, display: ( this.state.activeTab === i ) ? 'flex' : 'none' }} >
							{child}
						</Dash> )

					} )}
				</Box>
			</Board>
		)

	}

}

DashTabs.propTypes = {
	height: PropTypes.string || PropTypes.number
}

export default DashTabs
