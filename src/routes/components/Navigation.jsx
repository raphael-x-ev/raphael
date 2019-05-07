// Core
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Menu,
  Segment,
} from 'semantic-ui-react'
import { withRouter, Switch, Route } from 'react-router-dom';

// Components
import Skills from './Navigation/Skills'
import Timeline from './Navigation/Timeline'
import Works from './Navigation/Works'

// Style
import './Navigation.scss'

class Navigation extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  }

  static defaultProps = {
    history: {},
  }

  state = { activeItem: 'home' }

  componentDidMount() {
    const { history } = this.props

    history.push('/developer/skills')
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSkillMenuClick = () => {
    const { history } = this.props

    history.push('/developer/skills')
  }

  handleTimelineMenuClick = () => {
    const { history } = this.props

    history.push('/developer/timeline')
  }

  handleWorkMenuClick = () => {
    const { history } = this.props

    history.push('/developer/works')
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Grid columns='equal'>
          <Grid.Row stretched>
            <Grid.Column />
            <Grid.Column width={8}>
            <Menu pointing secondary>
              <Menu.Item
              name='Skills'
              active={activeItem === 'Skills'}
              onClick={this.handleSkillMenuClick}
            />
              <Menu.Item
                name='Timeline'
                active={activeItem === 'Timeline'}
                onClick={this.handleTimelineMenuClick}
              />
              <Menu.Item
                name='Works'
                active={activeItem === 'Works'}
                onClick={this.handleWorkMenuClick}
              />
              {/* <Menu.Menu position='right'>
                <Menu.Items
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu> */}
            </Menu>
            <Switch>
              <Route path="/developer/skills">
                <Skills />
              </Route>
              <Route path="/developer/timeline">
                <Timeline />
              </Route>
              <Route  path="/developer/works">
                <Works />
              </Route>
            </Switch>            
            {/* <Segment>
              <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Segment> */}
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Grid.Column />
            </Grid.Column>
            <Grid.Column textAlign="center" width={6}>
            
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

export default withRouter(Navigation)