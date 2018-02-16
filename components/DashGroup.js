 import {
	Flex, 
	Box,
	List
} from 'rebass'
import PropTypes from 'prop-types'

import Dash from './Dash'
import Board from './Board'

import { colors } from './styles'

const DashGroup = (props) => {
	const { data, height } = props
	const sx = {
		dash: {

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
	}
	return (
		<Board style={sx.board} { ...props } >
			{React.Children.map(props.children, (child, i) => {
				return (<Dash m={0} p={1} width={[1, 1/2, 1/2]} style={sx.dash} >{child}</Dash>)
			})}
		</Board>
	)
}


DashGroup.propTypes = {
	height: PropTypes.string || PropTypes.number
}

export default DashGroup 