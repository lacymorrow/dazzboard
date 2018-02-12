import { NavLink } from 'rebass'
import { gradient } from './styles'


const Footer = () => (
	<NavLink f={12} href="http://lacymorrow.com" style={{
			backgroundImage: `${gradient(120, 'magenta', 'violet')}`
		}}>
		Made by Lacy Morrow
	</NavLink>
)

export default Footer
