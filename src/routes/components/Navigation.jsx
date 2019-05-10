// Core
import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
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
    this.setState({ activeItem: 'Skills'})
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSkillMenuClick = () => {
    const { history } = this.props

    history.push('/developer/skills')
    this.setState({ activeItem: 'Skills'})
  }

  handleTimelineMenuClick = () => {
    const { history } = this.props

    history.push('/developer/timeline')
    this.setState({ activeItem: 'Timeline'})
  }

  handleWorkMenuClick = () => {
    const { history } = this.props

    history.push('/developer/works')
    this.setState({ activeItem: 'Works'})
  }

  render() {
    const { activeItem } = this.state
    return (
      <div className="navigation">
        <Grid columns='equal'>
          <Grid.Row stretched>
            <Grid.Column />
            <Grid.Column width={10}>
            <Menu pointing secondary>
              <Menu.Item
              className="navigation-header"
              active={activeItem === 'Skills'}
              onClick={this.handleSkillMenuClick}
              >
                Skills
              </Menu.Item>
              <Menu.Item
                className="navigation-header"
                active={activeItem === 'Timeline'}
                onClick={this.handleTimelineMenuClick}
              >
                Timeline
              </Menu.Item>
              <Menu.Item
                className="navigation-header"
                active={activeItem === 'Works'}
                onClick={this.handleWorkMenuClick}
              >
                Works
              </Menu.Item>
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