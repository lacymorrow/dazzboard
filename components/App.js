import jsonp from 'jsonp'
import assign from 'object-assign'
import PropTypes from 'prop-types'

import Layout from './GlobalLayout'
import { colors } from './styles'

class App extends React.Component {
  constructor () {
    super()
    this.state = assign(
      {},
      {
        drawerOpen: false,
        repo: {}
      }
    )
    this.toggle = this.toggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount () {
    jsonp('https://api.github.com/repos/jxnblk/rebass', (err, response) => {
      this.setState({ repo: response.data })
      console.log(response.data)
    }).bind(this)
  }


  render () {
    const sx = {
      dash: {
        padding: '0 1em',
        width: '100%',
        maxWidth: '2800px',
        borderRadius: '4px',
        paddingTop: '5px',
        paddingBottom: '5px',
        boxShadow: '0 6px 20px 0 rgba(37, 45, 71, 0.34)',
        color: colors.lighter,
        backgroundColor: colors.dashboardBgDarker,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: '99'
      }
    }
    const {
      drawerOpen,
      repo
    } = this.state

    return (
      <Layout>
        <div style={sx.dash}>
          HELLO, World!
          {repo.name}
        </div>
      </Layout>
    )
  }
}

export default App
 