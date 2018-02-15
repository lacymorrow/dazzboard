import Link from 'next/link'

import { Flex, Box } from 'rebass'

import { colors } from './styles'
import Icon from './Icon'


const Header = (props) => {
	const sx = {
		a: {
			color: colors.magenta,
			padding: '16px',
			textDecoration: 'none',
			letterSpacing: '2.4px',
			textTransform: 'uppercase',
			fontSize: '12px',
			fontWeight: '700'
		},
		nav: {
			padding: '0px',
		}
	}
	return (
		<Flex wrap align="center" style={sx.nav} p={2} width={1}>
			<Link prefetch href="/">
				<a style={sx.a}><Icon icon="project"/> {props.title || 'Home'}</a>
			</Link>
			<Link href="#">
				<a style={sx.a}><Icon icon="version"/>1.0.0</a>
			</Link>
			<Link href="https://github.com/lacymorrow/init-next">
				<a style={sx.a}><Icon icon="team"/>Team</a>
			</Link>
			<Box ml="auto" />
			<Box align={'right'}>
				<Link href="https://github.com/lacymorrow/init-next">
					<a style={sx.a}><Icon icon="snippets"/>Snippets</a>
				</Link>
			</Box>
		</Flex>
	)
}

export default Header
