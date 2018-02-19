/* App Entry Point */
import App from '../components/App'

// Renders the main app page
class Index extends React.Component {

	static async getInitialProps ( context ) {

		return {title: 'Init Next'}

	}

	render () {

		return (
			<App />
		)

	}

}

export default Index
