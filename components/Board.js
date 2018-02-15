import PropTypes from 'prop-types'
import { Flex } from 'rebass'


const Board = (props) => {
	const { height } = props
	const sx = {
		maxHeight: height || '455px'
	}
	return (
		<Flex w={1} style={sx}>
			{props.children}
		</Flex>
	)
}

Board.propTypes = {
  height: PropTypes.string || PropTypes.number
}

export default Board