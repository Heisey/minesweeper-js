// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Landing ?????????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// ???????????????????????? File Modules ??????????????????????????
// ?? redux
import { actions } from '../../redux'

// ?? Components
import { Buttons } from '../../components'

// ?? Styles
import styles from './styles'

const Landing = (props) => {

  // ~~ Redux Props
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
    // generateParams('hard')
  }
  
  const handleMediumGame = () => {
    // generateParams('medium')
  }
  
  const handleEasyGame = () => {
    // generateParams('easy')
  }
  
  return (
    <styles.Landing>
      <styles.LandingGameMenuButton
        end={`${primaryGameMenu}`}
      >
        <Buttons.Main 
          text='PLAY'
          clickHandler={handlePrimaryGameMenu}
        />
      </styles.LandingGameMenuButton>
    
      <styles.LandingScoreMenuButton
        end={`${primaryGameMenu}`}
      >
        <Buttons.Main 
          text="scores"
        />
      </styles.LandingScoreMenuButton>

      {difficultyGameMenu && (
        <>
          <styles.LandingGameMenuEasyButton>
            <Link
              to='/game/easy'
            >
              <Buttons.Main 
                text='easy'
                clickHandler={handleEasyGame}
              />
            </Link>
          </styles.LandingGameMenuEasyButton>

          <styles.LandingGameMenuMediumButton>
            <Link
              to='/game/medium'
            >
              <Buttons.Main
                text='medium'
                clickHandler={handleMediumGame}
              />
            </Link>
          </styles.LandingGameMenuMediumButton>

          <styles.LandingGameMenuHardButton
            end={`${primaryGameMenu}`}
          >
            <Link
              to='/game/hard'
            >
              <Buttons.Main
                text='hard'
                clickHandler={handleHardGame} 
              />
            </Link>
          </styles.LandingGameMenuHardButton>
        </>
      )}
    </styles.Landing>
  )
}

export default connect(null, {
  generateParams: actions.generateParams
})(Landing)