import PropTypes from 'prop-types'

const Icon = (props) => {
	const { icon } = props
	const sx = {
		marginRight: '0.5rem',
		verticalAlign: 'middle'
	}
	return (
		<img style={sx} src={`/static/icon/${icon || 'repo'}.svg`} />
	)
}

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon