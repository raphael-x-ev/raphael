import React from 'react'
import {
  Progress,
  Segment,
  Grid,
  Image,
  Icon,
} from 'semantic-ui-react'
// Style
import './Skills.scss'
import ProgressBar from 'react-customizable-progressbar'

class Skills extends React.Component {

  render() {
    return (
      <div className="skills">    
      <Grid columns={3} doubling stackable>
        <Grid.Row className="skills-group">
          <Grid.Column>
            <ProgressBar
              className="skills-circle"
              radius={100}
              progress={90}
              strokeWidth={16}
              strokeColor="#5d9cec"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#5d9cec"
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  React.js
                  <Icon loading color="blue">
                   <i className="fab fa-react"></i>
                  </Icon>
                </div>
              </ProgressBar>   
            </Grid.Column>
            <Grid.Column>
            <ProgressBar
              className="skills-circle"
              radius={100}
              progress={85}
              strokeWidth={14}
              strokeColor="#e6e600"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#e6e600"              
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  Javascript(ES6)
                  <Icon color="yellow">
                   <i className="fab fa-js"></i>
                  </Icon>
                </div>
              </ProgressBar>   
            </Grid.Column>
            <Grid.Column>
            <ProgressBar
              className="skills-circle"
              radius={100}
              progress={95}
              strokeWidth={16}
              strokeColor="#ff1ac6"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#ff1ac6"  
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  CSS/SCSS
                  <Icon color="pink">
                   <i className="fab fa-sass"></i>
                  </Icon>
                </div>
              </ProgressBar>   
            </Grid.Column>
            <Grid.Column>
            <ProgressBar
             className="skills-circle"
              radius={100}
              progress={65}
              strokeWidth={16}
              strokeColor="#00e68a"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#00e68a" 
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  UI Design
                <Icon color="green" name="pencil" />
                </div>
              </ProgressBar>   
            </Grid.Column>
            <Grid.Column>
            <ProgressBar
             className="skills-circle"
              radius={100}
              progress={70}
              strokeWidth={16}
              strokeColor="#33ffff"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#33ffff" 
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  SQL
                <Icon color="teal" name="database" />
                </div>
              </ProgressBar>   
            </Grid.Column>
            <Grid.Column>
            <ProgressBar
             className="skills-circle"
              radius={100}
              progress={95}
              strokeWidth={16}
              strokeColor="#ff661a"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#ff661a" 
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  HTML
                <Icon color="orange" name="html5" />
                </div>
              </ProgressBar>   
            </Grid.Column>
            <Grid.Column>
            <ProgressBar
             className="skills-circle"
              radius={100}
              progress={70}
              strokeWidth={16}
              strokeColor="#cc33ff"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#cc33ff" 
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  Redux
                  <Icon loading color="pink">
                    <img src="https://redux.js.org/img/redux.svg" />
                  </Icon>
                </div>
              </ProgressBar>   
            </Grid.Column>
            <Grid.Column>
            <ProgressBar
             className="skills-circle"
              radius={100}
              progress={75}
              strokeWidth={16}
              strokeColor="#1a8cff"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#1a8cff" 
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  Webpack
                  <Icon color="blue">
                    <img src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg" />
                  </Icon>
                </div>
              </ProgressBar>   
            </Grid.Column>
            <Grid.Column>
            <ProgressBar
             className="skills-circle"
              radius={100}
              progress={60}
              strokeWidth={16}
              strokeColor="#ff1a1a"
              strokeWidth={14}
              trackStrokeWidth={8}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="#ff1a1a" 
              initialAnimation={true}
              transition="0.5s ease 0.5s"
              trackTransition="0s ease"
            >
                <div className="skills-progress">
                  Java
                  <Icon color="red">
                   <i className="fab fa-java"></i>
                  </Icon>
                </div>
              </ProgressBar>   
            </Grid.Column>
        </Grid.Row>
      </Grid>        
      </div>
    )
  }
}

export default Skills