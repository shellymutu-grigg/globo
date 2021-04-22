import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Import components
import Globe from './Globe'

class App extends React.Component {
  render () {
    return (
      <>
        <div className='app'>
          <main>
            <Route exact path="/">
              <Redirect to="/welcome"/>
            </Route>
            <Route path="/welcome" component={Globe}/>
          </main>
        </div>
      </>
    )
  }
}

export default connect()(App)
