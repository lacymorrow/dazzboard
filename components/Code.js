import PropTypes from 'prop-types'

import { Text } from 'rebass'

import { colors } from './styles'

const Code = (props) => {
	const { color } = props
	const sx = {
		color: color || colors.colorData1,
		fontFamily: '"Source Code Pro", monospace',
		padding: '8px',
		width: '100%'
	}
	return (
		<Text w={1} style={sx} >{props.children}</Text>
	)
}

Code.propTypes = {
	color: PropTypes.string
}

export default Code
