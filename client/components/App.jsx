import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <>
      <div>
        {/* <img src={`/images/${props.match.params.name}.jpg`}></img> */}

        <h1 className="home_header"><img className="header_pic" src="images/Logo.png" alt="Beatles Logo"></img><Link to='/'>    Welcome to BEATLE TUNES!!</Link></h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path='/info/:genre/:name' component={Description} />
        <Route path='/genre/:genre' component={AllArtists} />
        <Route exact path='/' component={Home} />
      </div>
    </>
  )
}
export default App
