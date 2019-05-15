// Core
import React from 'react'
import {
  Responsive,
  Visibility,
  Segment,
} from 'semantic-ui-react'

// Components
import Main from './components/Main'
import About from './components/About'
import Navigation from './components/Navigation'

// Style
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="src-app">
        <Responsive>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              className="src-app-main-background"
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >        
              <Main />
            </Segment >
            <About />
            <Navigation />
          </Visibility>

        </Responsive>    
      </div>
    )
  }
}

export default App