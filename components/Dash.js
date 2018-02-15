import { 
	Flex,
	Box,
	Button,
	Text
} from 'rebass'
import PropTypes from 'prop-types'

import { colors, fontSizes } from './styles'

const Dash = (props) => {
	const { background, badge, data, title, text } = props
	const { light, lighter, colorDark, colorMain, colorError, colorSuccess, dashboardBgDarker, dashboardBgMain } = colors
	const { fontBodyXS, fontBodySM, fontHeaderLG, fontHeaderXS } = fontSizes
	const sx = {
		dash: {
			color: colorMain,
			background: background || dashboardBgMain || '#EEE',
			padding: (props.children && !props.padding) ? '0' : '15px',
			position: 'relative',
			margin: '0 0 4px 0'
		},
		badgeError: {
			backgroundColor: colorError,
			color: colorDark,
			borderRadius: '2px',
			fontSize: fontHeaderXS,
			fontWeight: 300
		},
		badgeSuccess: {
			backgroundColor: colorSuccess,
			color: colorDark,
			borderRadius: '2px',
			fontSize: fontHeaderXS,
			fontWeight: 300
		},
		title: {
			color: lighter || '#111',
			fontSize: fontBodySM || '14px',
			paddingBottom: '10px',
			width: '100%'
		},
		data: {
			color: light || '#222',
			fontSize: fontBodySM || '14px',
			fontWeight: '400',
			marginBottom: '10px'
		},
		text: {
			color: colorMain || '#444',
			fontSize: fontBodyXS || '12px'
		}
	}
	return (
		<Box m={1} style={sx.dash} { ...props }>
			<Flex direction='column'>
				{title && ( <Text is='h4' style={sx.title}>{title}</Text> )}
				{data && ( <Text is='h5' style={sx.data}>{data}</Text> )}
				{badge && (
					<Box w={1} mt={-4} style={{textAlign:'right'}}>
						{badge.success && ( 
								<Button style={sx.badgeSuccess}>{badge.success.text || badge.success}</Button>
						)}
						{badge.error && ( 
								<Button ml={1} style={sx.badgeError}>{badge.error.text || badge.error}</Button>
						)}
					</Box>
				)}
				{text && ( <Text style={sx.text}>{text}</Text> )}
				{props.children}
			</Flex>
		</Box>
	)
}

Dash.propTypes = {
  background: PropTypes.string,
  badge: PropTypes.object,
  data: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default Dash 