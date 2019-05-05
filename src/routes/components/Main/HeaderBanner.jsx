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

// Style
import './HeaderBanner.scss'

class HeaderBanner extends React.Component {

  render() {
    return (
      <div className="header-banner">
        <Container text>
          <Header
            className="header-banner-h1"
            as='h1'
            content='Raphael E. Valdez'
            inverted
            // style={{
            //   fontSize: mobile ? '2em' : '4em',
            //   fontWeight: 'normal',
            //   marginBottom: 0,
            //   marginTop: mobile ? '1.5em' : '3em',
            // }}
          />
          <Header
            className="header-banner-h2"
            as='h2'
            content='Front-End / ReactJS Developer'
            inverted
            // style={{
            //   fontSize: mobile ? '1.5em' : '1.7em',
            //   fontWeight: 'normal',
            //   marginTop: mobile ? '0.5em' : '1.5em',
            // }}
          />
          <Button color='linkedin' animated>
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