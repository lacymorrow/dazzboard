/* App Entry Point */
import App from '../components/App'

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
