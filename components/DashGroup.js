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
			flex: '1 1 250px',
			width: 'auto',
			maxWidth: '100%'
		},
		board: {
			overflowX: 'hidden',
			margin: '0 0 4px 0',
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
			margin: '4px',
			paddingBottom: '4px'
		}
	}

	return (
		<Board className='dashgroup' style={sx.board} { ...props } >
			{title && (
				<Text className='dashgroup__title' width={1} is='h2' style={sx.title}>{title}</Text>
			)}
			{React.Children.map( props.children, ( child, i ) => {

				return ( <Dash width={[1, 1 / 2, 1 / 2]} style={sx.dash} >{child}</Dash> )

			} )}
		</Board>
	)

}

DashGroup.propTypes = {
}

export default DashGroup
