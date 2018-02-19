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
	const { color, height, title } = props
	const sx = {
		dash: {
			width: 'auto',
			maxWidth: '100%',
			width: '100%',
			padding: '0',
			borderBottom: `2px solid ${colors.dashboardBgDarkest}`

		},
		board: {
			background: colors.dashboardBgDarkest,
			maxHeight: height || '100%',
			overflowX: 'hidden',
			overflowY: 'auto',
			padding: '0 4px 4px 4px',
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
		}
	}

	return (
		<Board className='dashlist' style={sx.board} { ...props } >
			{title && (
				<Text className='dashlist__title' width={1} is='h2' style={sx.title}>{title}</Text>
			)}
			{React.Children.map( props.children, ( child, i ) => {

				return ( <Dash style={sx.dash} >{child}</Dash> )

			} )}
		</Board>
	)

}

DashGroup.propTypes = {
}

export default DashGroup
