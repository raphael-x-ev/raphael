import React from 'react'
import {
  Feed,
  Grid,
} from 'semantic-ui-react'
import './About.scss'

class About extends  React.Component {

  render () {
    return (
      <div className="portfolio-about">
        <Grid columns='equal'>
          <Grid.Row stretched>
            <Grid.Column />
            <Grid.Column width={8}>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary
                    className="portfolio-about-header"
                  >
                    <Feed.Date
                      className="portfolio-about-title"
                    >I'm a Web Developer / Designer</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra
                    className="portfolio-about-content"
                    text
                  >
                    Passionate in creating modern design <a>User Interface</a> specializing in <a>Front - End Development</a> with <a>React.js</a>.
                    Building creative, minimal, and stylish designs.
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event> 
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

export default About