/* Libraries */
// Universal fetch API
import fetch from 'isomorphic-unfetch'

/* Next Components */
import Link from 'next/link'

/* Custom Components */
import Layout from '../components/GlobalLayout'
import Widget from '../components/Widget'

// Renders the main app page
const Index = props => {
	return (
		<Layout	text={props.title} title={props.title}>
			<div>
				<Widget>Init Next</Widget>
			</div>
		</Layout>
	)
}

Index.getInitialProps = async function(context) {
	return {title: 'Init Next'}
}

export default Index
