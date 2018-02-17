import PropTypes from 'prop-types'
import { Flex } from 'rebass'


const Board = (props) => {
	const sx = {
	}
	return (
		<Flex className='board' width={1} my={1} style={sx} wrap { ...props }>
			{props.children}
		</Flex>
	)
}

export default Board