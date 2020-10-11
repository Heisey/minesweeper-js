import styled from 'styled-components/macro'

const baseGridTemplateColumns = props => {
  if (props.difficulty === 'easy') {
    return 'repeat(9, 1fr)'
  } else if (props.difficulty === 'medium') {
    return 'repeat(16, 1fr)'
  } else if (props.hard === 'hard') {
    return 'repeat(16, 1fr)'
  }
}

const baseGridTemplateRows = props => {
  console.log('puppies')
  console.log(props)
  if (props.difficulty === 'easy') {
    console.log('puppies1')
    return 'repeat(9, 1fr)'
  } else if (props.difficulty === 'medium') {
    console.log('puppies2')
    return 'repeat(16, 1fr)'
  } else if (props.difficulty === 'hard') {
    console.log('puppies3')
    return 'repeat(30, 1fr)'
  }
}

export const Base = styled.div`
  margin: 0 auto;
  display: grid;
  height: fit-content;
  width: fit-content;
  align-self: center;
  grid-template-rows: ${baseGridTemplateRows};
  grid-template-columns: ${baseGridTemplateColumns};
  grid-row-gap: 2px;
  grid-column-gap: 2px;
  background-color: seagreen;
  padding: 4px;
  border-radius: 25px;
  border: 6px solid royalblue;
`