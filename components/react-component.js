export default class extends React.Component {
    static async getInitialProps ({state}) {
        return {state}
    }

    constructor (props) {
        super(props)
        this.state = props.state
    }

    render() {
        return (
            <div>Hello, {this.props.children || ' World'}</div>
        )
    }
}