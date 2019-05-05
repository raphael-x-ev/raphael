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
    // selectedSaleId: null,
    // selectedCategoryId: null,
    // isFilterMenuOpen: false,
    // isSelected: false,
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <div
        className="main-profile"
      >
        <Grid columns='equal'>
          <Grid.Row stretched>
            <Grid.Column />
            <Grid.Column width={8}>
                <Image
                  className="main-profile-image"
                  src='/src/assets/profileImg2.jpg'
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
              <HeaderBanner />
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