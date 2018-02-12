import { Heading,  Text } from 'rebass'

const Widget = (props) => (
	<div>
		<Heading center>{props.children}</Heading>
		<Text center>Starter</Text>
	</div>
)

export default Widget
