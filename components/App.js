import jsonp from 'jsonp'
import assign from 'object-assign'
import PropTypes from 'prop-types'
import {
  config,
  Flex, Box,
  Banner,
  Block,
  Button,
  Close,
  Container,
  Drawer,
  Heading,
  NavItem,
  Panel,
  PanelHeader,
  SectionHeader,
  Footer,
  Space,
  Text,
} from 'rebass'

import Layout from './GlobalLayout'

class App extends React.Component {
  constructor () {
    super()
    this.state = assign(
      {},
      config,
      {
        drawerOpen: false,
        repo: {}
      }
    )
    this.toggle = this.toggle.bind(this)
    this.updateContext = this.updateContext.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  static childContextTypes = {
    rebass: PropTypes.object
  }

  getChildContext () {
    return {
      rebass: this.state
    }
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  updateContext (state) {
    this.setState(state)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount () {
    jsonp('https://api.github.com/repos/jxnblk/rebass?callback=callback', (err, response) => {
      this.setState({ repo: response.data })
    }).bind(this)
  }

  render () {
    const {
      color,
      backgroundColor,
      drawerOpen,
      overlayOpen
    } = this.state

    return (
      <Layout style={{
          backgroundColor
        }}>
        HELLO, World!
      </Layout>
    )
  }
}

export default App
 