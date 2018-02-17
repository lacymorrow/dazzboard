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
	const { color, title, text, subtext } = props
	const sx = {
		dash: {
			flex: '1 1 250px',
			margin: '0 4px 4px 0'
		},
		board: {
			background: colors.dashboardBgDarkest,
			margin: '0 0 4px 0',
			padding: '0 4px 4px 4px',
			overflowX: 'hidden',
			overflowY: 'auto',
			justifyContent: 'space-between',
			alignItems: 'space-between'
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
		}
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
