import {
	Flex,
	Box,
	List,
	Text,
	Tabs,
	TabItem
} from 'rebass'
import PropTypes from 'prop-types'

import Dash from './Dash'
import Board from './Board'

import { colors, fontSizes } from './styles'

const DashGroup = ( props ) => {

	const nested = props.children[0] && props.children[0].type.displayName == 'DashGroup'
	const { data, color, height, title, text, subtext } = props
	const sx = {
		dash: {
			flex: '1 1 250px',
			margin: '0 4px 4px 0'
		},
		board: {
			background: colors.dashboardBgDarker,
			margin: '0 0 4px 0',
			padding: '0 4px 4px 4px',
			overflowX: 'hidden',
			overflowY: 'auto',
			justifyContent: 'space-between',
			alignItems: 'space-between',
			maxHeight: height || '455px'
		},
		nestedDash: {
			position: 'relative'

		},
		nestedBoard: {
			position: 'absolute'
		},
		title: {
			color: colors.colorMain,
			fontSize: fontSizes.fontHeaderSM,
			borderBottom: `1px solid ${color || colors.colorSuccess}`,
			textTransform: 'uppercase',
			fontWeight: '700',
			margin: '4px'
		},
		text: {
			color: colors.lighter
		},
		subtext: {
			color: color || colors.colorMain

		}
	}

	if ( nested ) {

		return ( <Dash style={sx.nestedDash} { ...props } >

			{React.Children.map( props.children, ( child, i ) => {

				return ( <Board m={0} style={sx.nestedBoard} >{child}</Board> )

			} )}
			<Tabs>
				<TabItem active>
					BeeAAAAAAAAAAAAAAAAAAAAAp
				</TabItem>
				<TabItem>
					Boop
				</TabItem>
				<TabItem>
					Bop
				</TabItem>
			</Tabs>
			{title && (
				<Text is='h2' width={1} style={sx.title}>{title}</Text>
			)}
			{text && (
				<Text is='h2' width={1} style={sx.text}>{text}</Text>
			)}
			{subtext && (
				<Text is='h2' width={1} style={sx.subtext}>{subtext}</Text>
			)}
		</Dash> )

	}

	return (
		<Board style={sx.board} { ...props } >
			{title && (
				<Text is='h2' width={1} style={sx.title}>{title}</Text>
			)}
			{React.Children.map( props.children, ( child, i ) => {

				return ( <Dash m={0} width={[1, 1 / 2, 1 / 2]} style={sx.dash} >{child}</Dash> )

			} )}
		</Board>
	)

}

DashGroup.propTypes = {
	height: PropTypes.string || PropTypes.number
}

export default DashGroup
