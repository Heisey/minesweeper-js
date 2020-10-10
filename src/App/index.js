
// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Main App ????????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useState } from 'react';
import { connect } from 'react-redux'

// ???????????????????????? File Modules ??????????????????????????
// ?? Pages
import GamePage from '../pages/GamePage';
import Landing from '../pages/Landing'
import { Score } from '../components'

// ?? Utils
import { gameLogic } from '../lib'

// ?? Styles
import './App.scss'

const App = (props) => {

  const [showGame, showGameHandler] = useState(false)
  const [showLanding, showLandingHandler] = useState(true)

  const handleShowGame = () => {
    showGameHandler(true)
    showLandingHandler(false)
  }

  const handleShowLanding = () => {
    showGameHandler(false)
    showLandingHandler(true)
  }
  return (
    <div className='App'>
      <h1 className="App__title">
        <span className="App__title--first">MARS</span>SWEEPER
      </h1>
      {showLanding && ( 
        <div className='App__landing'>
          <Landing 
            handleShowGame={handleShowGame}
          />
        </div>
      )}
      {showGame && (
        <div className='App__game'>
          <GamePage 
            handleShowLanding={handleShowLanding}
          />
        </div>)
      }

      
    </div>
  )
}

export default App