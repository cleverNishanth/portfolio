import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import audio from './sounds/song.mp3'
import ReactAudioPlayer from 'react-audio-player'

render(
  <React.StrictMode>
    {/* <ReactAudioPlayer
      src={audio}
      autoPlay
      autoPlay
      loop
      className=''
      controls
    /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
