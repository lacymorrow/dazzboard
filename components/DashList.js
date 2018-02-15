import {
	Flex, 
	Box,
	List
} from 'rebass'
import PropTypes from 'prop-types'

import Dash from './Dash'
import Board from './Board'

import { colors } from './styles'

const DashList = (props) => {
	const { data, width } = props
	const sx = {
		dash: {
			// flexGrow: '1'
			// flexShrink: '1',

		},
		board: {
			flexWrap: 'wrap',
			background: colors.dashboardBgDarker,
			margin: '0 0 4px 0',
			padding: '0 4px 4px 4px',
			overflowX: 'hidden',
			overflowY: 'auto'
		},
	}
	return (
		<Board style={sx.board} { ...props } >
			{React.Children.map(props.children, (child, i) => {
				return (<Dash m={0} mb={2} style={sx.dash} >{child}</Dash>)
			})}
		</Board>
	)
}

DashList.propTypes = {
	width: PropTypes.string || PropTypes.number || PropTypes.object
}

export default DashList 