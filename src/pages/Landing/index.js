// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Landing ?????????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useState } from 'react'

// ???????????????????????? File Modules ??????????????????????????
// ?? Components
import MenuButton from '../../components/MenuButton'

// ?? Styles
import './Landing.scss'

const Landing = (props) => {

  const { handleShowGame, selectDifficulty } = props

  const [primaryGameMenu, primaryGameMenuHandler] = useState(true)
  const [scoreMenu, scoreMenuHandler] = useState(false)
  const [difficultyGameMenu, difficultyGameMenuHandler] = useState(false)

  // ?? State Handlers
  const handlePrimaryGameMenu = () => {
    primaryGameMenuHandler(false)

    setTimeout(() => {
      difficultyGameMenuHandler(true)
    }, 300)
  }

  const handleHardGame = () => {
    handleShowGame()
    selectDifficulty('hard')
  }

  const handleMediumGame = () => {
    handleShowGame()
    selectDifficulty('medium')
  }

  const handleEasyGame = () => {
    handleShowGame()
    selectDifficulty('easy')
  }

  const handleScoreMenu = () => {
    handleShowGame()
    scoreMenuHandler(true)
  }


  // ?? Class Name Handlers
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
          clickHandler={handleScoreMenu}
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

export default Landing