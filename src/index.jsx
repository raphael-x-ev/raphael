// Core
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import App from './routes/App'

// ReactDOM.render(
//   <App />, document.getElementById("root")
// )

const renderPortfolio = (Component) => {
  ReactDOM.render(
    <Router
      basename="/react"
    >
      <Component />
    </Router>,
    document.getElementById("root"),
  )
}

renderPortfolio(App)