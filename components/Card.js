import { 
	Box,
	Text
} from 'rebass'
import PropTypes from 'prop-types'

import { colors, fontSizes } from './styles'

const Card = (props) => {
	const {background, title, text, subtext} = props
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
		text: {
			color: colorMain || '#222',
			fontSize: fontHeaderLG || '27px'
		},
		subtext: {
			color: colorMain || '#444',
			fontSize: fontBodyXS || '12px'
		}
	}
	return (
		<Box m={1} style={sx.card} { ...props }>
			{title && (
				<Text is='h4' style={sx.title}>{title}</Text>
			)}
			{text && (
				<Text is='h3' style={sx.text}>{text}</Text>
			)}
			{subtext && (
				<Text style={sx.subtext}>{subtext}</Text>
			)}
			{props.children}
		</Box>
	)
}

Card.propTypes = {
  background: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  subtext: PropTypes.string
}

export default Card 