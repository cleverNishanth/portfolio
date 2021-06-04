import React from 'react'
import Header from './components/Header'
import Level from './pages/Level'
import Player from './pages/Player'
import Start from './pages/Start'
import About from './pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Connect from './pages/Connect'
import Projects from './pages/Projects'
import Bonus from './pages/Bonus'
import ReactAudioPlayer from 'react-audio-player'
import audio from './sounds/song.mp3'

function App() {
  const song = audio
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Start />
        </Route>
        <Route exact path='/player'>
          <Player />
        </Route>
        <Route path='/menu'>
          <Header />
          <Level />
        </Route>
        <Route path='/about'>
          <Header />
          <About />
        </Route>
        <Route path='/projects'>
          <Header />
          <Projects />
        </Route>
        <Route path='/connect'>
          <Header />
          <Connect />
        </Route>
        <Route path='/bonus'>
          <Bonus />
        </Route>
        <Route path='*'>
          <Start />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
