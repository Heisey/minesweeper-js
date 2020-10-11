import styled from 'styled-components/macro'

export const GamePage = styled.div`
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const GamePageButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GamePageInfoBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`