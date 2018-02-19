import PropTypes from 'prop-types'
import { Flex } from 'rebass'

const Board = ( props ) => {

	const sx = {
		margin: '4px 0',
		alignItems: 'flex-start',
		flexFlow: 'column wrap',
		maxHeight: props.height || '355px'
	}
	return (
		<Flex className='board' width={1} style={sx} wrap { ...props }>
			{props.children}
		</Flex>
	)

}

export default Board
