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
	const { data, color, height, title, text, subtext } = props
	const sx = {
		dash: {
			// flex: '1 1 250px',
			width: 'auto',
			maxWidth: '100%',
			width: '100%',
			flexDirection: 'row',
			padding: '0',
			borderBottom: `2px solid ${colors.dashboardBgDarkest}`

		},
		board: {
			overflowX: 'hidden',
			background: colors.dashboardBgDarkest,
			// margin: '0 0 4px 0',
			padding: '0 4px 4px 4px',
			justifyContent: 'space-between',
			alignItems: 'space-between',
			maxHeight: height || '455px'
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
