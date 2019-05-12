import React from 'react'
import {
  Card,
  Image,
  Popup
} from 'semantic-ui-react'

// Style
import './Works.scss'

class Works extends React.Component {

  render() {

    return (
      <div className="works">
        <Card.Group doubling itemsPerRow={3} stackable>
          <Popup
            trigger={
              <Card>
              <Image src='/src/assets/BBC1.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>BAGUIO'S BEST CHOICE</Card.Header>
                <Card.Meta>2018-2019</Card.Meta>
                <Card.Description>
                  Promotional Website v1. <a href="http://www.baguiosbestchoice.com" target="_blank">www.baguiosbestchoice.com</a>  
                </Card.Description>
              </Card.Content>
            </Card>
            }
          >
            <Popup.Header>Baguio's Best Choice</Popup.Header>
            <Popup.Content>
              <p>Core Tools: Javascript, HTML, CSS, Bootstrap, JQuery</p>
            </Popup.Content>            
          </Popup>
          <Popup
            trigger={
              <Card>
              <Image src='/src/assets/POS1.PNG' wrapped ui={false} />
              <Card.Content>
                <Card.Header>BitPal POS BACKOFFICE</Card.Header>
                <Card.Meta>2018-2019</Card.Meta>
                <Card.Description>
                  Worked and collaborated as React.js Developer POS BackOffice for BitPal International.
                </Card.Description>
              </Card.Content>
            </Card>
            }
          >
            <Popup.Header>BitPal POS Backoffice</Popup.Header>
            <Popup.Content>
              <p>Core Tools: React, Redux, Javascript, Material UI, HTML, SCSS/CSS</p>
            </Popup.Content>               
          </Popup>
          <Popup
            trigger={
              <Card>
              <Image src='/src/assets/HMS1.PNG' wrapped ui={false} />
              <Card.Content>
                <Card.Header>HOSPITAL MANAGEMENT SYSTEM</Card.Header>
                <Card.Meta>2017-2018</Card.Meta>
                <Card.Description>
                Worked and collaborated as Front-End Developer for Fort-Del Pilar Station Hospital Management System.
                </Card.Description>
              </Card.Content>
            </Card>
            }
          >
             <Popup.Header>Hospital Management System</Popup.Header>
            <Popup.Content>
              <p>Core Tools: Javascript, HTML, CSS, Bootstrap, Admin LTE</p>
            </Popup.Content>          
          </Popup>
          <Popup
            trigger={
              <Card>
              <Image src='/src/assets/HMS1.PNG' wrapped ui={false} />
              <Card.Content>
                <Card.Header>ReactJS PORTFOLIO WEBSITE</Card.Header>
                <Card.Meta>2019</Card.Meta>
                <Card.Description>
                  Raphael E. Valdez Portfolio Website published under heroku. Live website can be found in .. .
                </Card.Description>
              </Card.Content>
            </Card>
            }
          >
            <Popup.Header>ReactJS Portfolio Website</Popup.Header>
            <Popup.Content>
              <p>Core Tools: React, Javascript, HTML, SCSS/CSS, Semantic-UI</p>
            </Popup.Content>             
          </Popup>
        </Card.Group>
      </div>
    )
  }
}

export default Works