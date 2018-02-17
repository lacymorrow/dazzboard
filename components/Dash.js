import {
	Flex,
	Box,
	Button,
	Text
} from 'rebass'
import PropTypes from 'prop-types'

import { colors, fontSizes } from './styles'

const Dash = ( props ) => {

	const { background, width, badge, title, subtitle, text, subtext } = props
	const { light, lighter, colorDark, colorMain, colorError, colorSuccess, dashboardBgMain } = colors
	const { fontBodyXS, fontBodySM, fontHeaderXS } = fontSizes
	const sx = {
		dash: {
			color: colorMain,
			background: background || dashboardBgMain || '#EEE',
			padding: ( props.children && !props.padding ) ? '0' : '15px',
			position: 'relative',
			// flexFlox: ''
		},
		badgeError: {
			backgroundColor: colorError,
			color: colorMain,
			borderRadius: '2px',
			fontSize: fontHeaderXS,
			fontWeight: '700'
		},
		badgeSuccess: {
			backgroundColor: colorSuccess,
			color: colorDark,
			borderRadius: '2px',
			fontSize: fontHeaderXS,
			fontWeight: '300'
		},
		title: {
			fontSize: props.subtitle ? fontBodyXS : fontBodySM,
			textTransform: props.subtitle ? 'uppercase' : 'none',
			color: props.subtitle ? colorMain : lighter,
			fontWeight: '500',
			paddingBottom: '10px'
		},
		subtitle: {
			color: light
		},
		text: {
			color: light || '#222',
			fontSize: fontBodySM,
			fontWeight: '400',
			marginBottom: '10px'
		},
		subtext: {
			color: colorMain || '#444',
			fontSize: fontBodyXS,
			fontWeight: '500'
		}
	}
	return (
		<Box className='dash' m={0} mb={1} width={width || 1} style={sx.dash} { ...props }>
			<Flex wrap>
				{title && ( <Text is='h4' width={1} style={sx.title}>{title}   { subtitle && (
					<span style={sx.subtitle}>{subtitle}</span>
				)}</Text> )}

				{text && ( <Text is='h5' style={sx.text}>{text}   { subtext && (
					<span style={sx.subtext}>{subtext}</span>
				)}</Text> )}

				{badge && (
					<Box style={{marginLeft: 'auto'}}>
						{badge.success && (
							<Button ml={1} mb={1} style={sx.badgeSuccess}>{badge.success.text || badge.success}</Button>
						)}
						{badge.error && (
							<Button ml={1} mb={1} style={sx.badgeError}>{badge.error.text || badge.error}</Button>
						)}
					</Box>
				)}

				{props.children && (
					<Flex width={1}>{props.children}</Flex>
				)}
			</Flex>
		</Box>
	)

}

Dash.propTypes = {
	background: PropTypes.string,
	badge: PropTypes.object,
	text: PropTypes.string,
	title: PropTypes.string,
	subtext: PropTypes.string
}

export default Dash
