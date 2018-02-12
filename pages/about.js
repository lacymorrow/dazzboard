import Layout from '../components/GlobalLayout'

export default class extends React.Component {
	static async getInitialProps({ req }) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
		return { userAgent }
	}

	render() {
		return (
			<Layout>
				<pre>Your userAgent</pre>
				<p>{this.props.userAgent}</p>
			</Layout>
		)
	}
}
