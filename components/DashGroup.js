 import {
	Flex, 
	Box,
	List
} from 'rebass'
import PropTypes from 'prop-types'

import Dash from './Dash'

import { colors } from './styles'

const DashGroup = (props) => {
	const { data, width } = props
	const sx = {
		dash: {
			flexGrow: '1',
			height: '90px',
			flex: '1 1 0%',
			margin: '0.5rem',
			padding: '20px'
		},
		// board: {
		// 	background: colors.dashboardBgDarker,
		// 	margin: '0 0 4px 0',
		// 	padding: '0 4px 4px 4px',
		// 	alignItems: 'flex-start',
		// 	alignContent: 'space-between',
		// 	overflowX: 'hidden',
		// 	overflowY: 'auto'
		// }
	}
	return (
		<Flex m={1} w={1} h={1} style={sx.board} direction='row' wrap { ...props }>
			{React.Children.map(props.children, (child, i) => {
				return (<Dash m={0} mb={2} w={1} style={sx.dash} >{child}</Dash>)
			})}
		</Flex>
	)
}

DashGroup.propTypes = {
	width: PropTypes.string || PropTypes.number || PropTypes.object
}

export default DashGroup 