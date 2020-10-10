// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Landing ?????????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useState } from 'react'
import { connect } from 'react-redux'

// ???????????????????????? File Modules ??????????????????????????
// ?? redux
import { actions } from '../../redux'

// ?? Components
import MenuButton from '../../components/MenuButton'

// ?? Styles
import './Landing.scss'

const Landing = (props) => {

  const { handleShowGame } = props


  const { generateParams } = props

  // ~~ contained component state
  const [primaryGameMenu, primaryGameMenuHandler] = useState(true)
  const [difficultyGameMenu, difficultyGameMenuHandler] = useState(false)

  // ~~ State Handlers
  const handlePrimaryGameMenu = () => {
    primaryGameMenuHandler(false)

    setTimeout(() => {
      difficultyGameMenuHandler(true)
    }, 300)
  }

  const handleHardGame = () => {
    handleShowGame()
    generateParams('hard')
  }

  const handleMediumGame = () => {
    handleShowGame()
    generateParams('medium')
  }

  const handleEasyGame = () => {
    handleShowGame()
    generateParams('easy')
  }

  // ~~ Class Name Handlers
  const gameClassNameHandler = () => {
    let name = 'Landing__game--'
    if (primaryGameMenu) {
      return name + 'begin'
    } else {
      return name + 'end'
    }
  }

  const scoreClassNameHandler = () => {
    let name = 'Landing__score--'
    if (primaryGameMenu) {
      return name + 'begin'
    } else {
      return name + 'end'
    }
  }

  

  return (
    <div className="Landing">
      <div className={`Landing__game ${gameClassNameHandler()}`}>
        <MenuButton 
          clickHandler={handlePrimaryGameMenu}
          text='start'
        />
      </div>

      <div className={`Landing__score ${scoreClassNameHandler()}`}>
        <MenuButton 
          text='scores'
          clickHandler={() => 'need to do something'}
        />
      </div>
      
      {difficultyGameMenu && (
        <div className='Landing__gameDifficulty'>
          <div className={`Landing__gameDifficulty--easy${difficultyGameMenu ? 'End' : 'Start'}`}>
            <MenuButton 
              text='easy'
              clickHandler={handleEasyGame}
            />
          </div>
          <div className={`Landing__gameDifficulty--medium${difficultyGameMenu ? 'End' : 'Start'}`}>
            <MenuButton 
              text='medium'
              clickHandler={handleMediumGame}
            />
          </div>
          <div className={`Landing__gameDifficulty--hard${difficultyGameMenu ? 'End' : 'Start'}`}>
            <MenuButton 
              text='hard'
              clickHandler={handleHardGame}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(null, {
  generateParams: actions.generateParams
})(Landing)