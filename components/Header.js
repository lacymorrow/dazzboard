import Link from 'next/link'

import { Flex, Box } from 'rebass'

import { colors } from './styles'

const sx = {
	a: {
		padding: '16px',
		textDecoration: 'none',
		color: 'inherit',
		letterSpacing: '2.4px',
		textTransform: 'uppercase',
		fontSize: '12px',
		fontWeight: '700'
	},
	nav: {
		padding: '0px',
		color: colors.magenta,
		backgroundColor: '#000',
		WebkitFontSmoothing: 'antialiased'
	}
}

const Header = (props) => {
	return (
		<div>
			<Flex wrap align="center" style={sx.nav} p={2}>
				<Link prefetch href="/">
					<a style={sx.a}>{props.text || 'Home'}</a>
				</Link>
				<Box ml="auto" />
				<Link href="https://github.com/lacymorrow/init-next">
					<a style={sx.a}>Github</a>
				</Link>
			</Flex>
		</div>
	)
}

export default Header
