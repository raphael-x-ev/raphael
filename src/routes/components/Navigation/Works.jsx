import React from 'react'
import {
  Card,
  Image,
  Placeholder,
} from 'semantic-ui-react'

// Style
import './Works.scss'

class Works extends React.Component {

  render() {

    return (
      <div>
        <Card.Group doubling itemsPerRow={3} stackable>
          <Card>
            <Image src='/src/assets/BBC1.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>BAGUIO'S BEST CHOICE</Card.Header>
              <Card.Meta>Core Tools: Javascript, HTML, CSS, Bootstrap, JQuery</Card.Meta>
              <Card.Description>
                Promotional Website v1. <a href="http://www.baguiosbestchoice.com" target="_blank">www.baguiosbestchoice.com</a>  
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/src/assets/POS1.PNG' wrapped ui={false} />
            <Card.Content>
              <Card.Header>BitPal POS BACKOFFICE</Card.Header>
              <Card.Meta>Core Tools: React, Redux, Javascript, Material UI, HTML, SCSS/CSS</Card.Meta>
              <Card.Description>
                Worked and collaborated as React.js Developer POS BackOffice for BitPal International.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/src/assets/HMS1.PNG' wrapped ui={false} />
            <Card.Content>
              <Card.Header>HOSPITAL MANAGEMENT SYSTEM</Card.Header>
              <Card.Meta>Core Tools: Javascript, HTML, CSS, Bootstrap, Admin LTE</Card.Meta>
              <Card.Description>
              Worked and collaborated as Front-End Developer for Fort-Del Pilar Station Hospital Management System.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/src/assets/HMS1.PNG' wrapped ui={false} />
            <Card.Content>
              <Card.Header>React.js PORTFOLIO WEBSITE</Card.Header>
              <Card.Meta>Core Tools: React, Javascript, HTML, SCSS/CSS, Semantic-UI</Card.Meta>
              <Card.Description>
                Raphael E. Valdez Portfolio Website published under heroku. Live website can be found in .. .
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}

export default Works