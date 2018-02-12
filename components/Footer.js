import { NavLink } from 'rebass'
import { gradients } from './styles'


const Footer = () => (
	<NavLink f={12} href="http://lacymorrow.com" style={{
			backgroundImage: gradients.sunset
		}}>
		Made by Lacy Morrow
	</NavLink>
)

export default Footer
