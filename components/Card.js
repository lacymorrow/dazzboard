import { 
	Box,
	Text
} from 'rebass'
import PropTypes from 'prop-types'

import { colors, fontSizes } from './styles'

const Card = (props) => {
	const {background, data, title, text} = props
	const { colorDark, colorMain, dashboardBgDarker } = colors
	const { fontBodyXS, fontHeaderLG } = fontSizes
	const sx = {
		card: {
			background: background || '#EEE',
			padding: (props.children && !props.padding) ? '0' : '20px',
			flexGrow: '1',
			margin: '0 4px 4px 4px'
		},
		title: {
			color: colorDark || '#111',
			fontSize: fontBodyXS || '12px',
			lineHeight: '20px',
			letterSpacing: '0.7px',
			fontWeight: '500',
			textTransform: 'uppercase',
			paddingBottom: '7px'
		},
		data: {
			color: colorMain || '#222',
			fontSize: fontHeaderLG || '27px'
		},
		text: {
			color: colorMain || '#444',
			fontSize: fontBodyXS || '12px'
		}
	}
	return (
		<Box m={1} style={sx.card} { ...props }>
			{title && (
				<Text is='h4' style={sx.title}>{title}</Text>
			)}
			{data && (
				<Text is='h3' style={sx.data}>{data}</Text>
			)}
			{text && (
				<Text style={sx.text}>{text}</Text>
			)}
			{props.children}
		</Box>
	)
}

Card.propTypes = {
  background: PropTypes.string,
  data: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default Card 