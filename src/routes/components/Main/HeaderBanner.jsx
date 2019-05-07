// Core
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
import { AnimateOnChange } from  'react-animation'

// Style
import './HeaderBanner.scss'

class HeaderBanner extends React.Component {
  static propTypes = {
    // Data
    p1: PropTypes.string,
  }
  
  render() {
    const { p1 } = this.props
    console.log(p1)
    return (
      <div className="header-banner">
        <Container text>
          <Header
            className="header-banner-h1"
            as='h1'
            content='Raphael E. Valdez'
            inverted
          />
          <Header
            className="header-banner-h2"
            as='h2'
            inverted
          >
            
            <AnimateOnChange
              animationIn="custom-animation-in 500ms ease-out forwards"
              animationOut="custom-animation-out 600ms ease-out forwards"
              durationOut={500}
            >
            {p1}
            </AnimateOnChange>
            {` Developer`}
          </Header>
          <Button 
            // onClick={this.handleTagChange}
            color='linkedin' animated>
            <Button.Content visible>
             <Icon name='linkedin' />
            </Button.Content>
            <Button.Content hidden>
              LinkedIn
            </Button.Content>
          </Button>
          <Button color='grey' animated='vertical'>
            <Button.Content visible>
             <Icon name='github' />
            </Button.Content>
            <Button.Content hidden>
              gitHub
            </Button.Content>
          </Button>
          <Button color='teal' animated>
            <Button.Content visible>
             <Icon name='github alternate' />
            </Button.Content>
            <Button.Content hidden>
              showcase
            </Button.Content>
          </Button>
        </Container>
      </div>
    )
  }
}

export default HeaderBanner