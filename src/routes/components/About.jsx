import React from 'react'
import {
  Feed,
  Grid,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react'
import './About.scss'

class About extends  React.Component {

  render () {
    return (
      <div className="portfolio-about">
          <Header as='h2' icon textAlign="center">
            <Image className="portfolio-about-image" circular src='/src/assets/profileImg2.jpg' />
            <Header.Content>I'm a Web Developer / Designer</Header.Content>
            <Header.Subheader className="portfolio-about-content">
              Passionate in creating modern design <a>User Interface</a> specializing in <a>Front - End Development</a> with <a>React.js</a>.
              Building creative, minimal, and stylish designs.
            </Header.Subheader>
          </Header>
      </div>
    )
  }
}

export default About