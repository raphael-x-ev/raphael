import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

// Components
import HeaderBanner from './Main/HeaderBanner'

// Style
import './Main.scss'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class Main extends React.Component {
  state = {
    p1: '< Front-End />'
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  handleTagChange = (clickEvent) => {
    const { p1 } = this.state
    if (p1 === '< Front-End />') {
      this.setState({ p1: 'React.js'})
    } else {
      this.setState({ p1: '< Front-End />'})
    }
  }

  render() {
    const { children } = this.props
    const { fixed, p1 } = this.state

    return (
      <div
        className="main-profile"
      >
        <Grid columns='equal'>
          <Grid.Row stretched>
            <Grid.Column />
            <Grid.Column width={8}>
                <Image
                  onClick={this.handleTagChange}
                  className="main-profile-image"
                  src='/src/assets/Rafp.png'
                  size='small'
                  circular
                />
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Grid.Column />
            </Grid.Column>
            <Grid.Column textAlign="center" width={6}>
              <HeaderBanner
                p1={p1}
              />
            </Grid.Column>
            <Grid.Column>
            <Grid.Column />
            </Grid.Column>
          </Grid.Row>
        </Grid>        
      </div>  
    )  
  }
}

export default Main