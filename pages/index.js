/* Libraries */
// Universal fetch API
import fetch from 'isomorphic-unfetch'

/* Next Components */
import Link from 'next/link'

/* Custom Components */
import App from '../components/App'
import Layout from '../components/GlobalLayout'
import Widget from '../components/Widget'

// Renders the main app page
const Index = () => {
	return (
		<App />
	)
}

Index.getInitialProps = async function(context) {
	return {title: 'Init Next'}
}

export default Index
