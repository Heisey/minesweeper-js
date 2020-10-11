import styled from 'styled-components/macro'

const baseBackgroundColor = props => {
  if (props.clicked) {
    return 'burlywood'
  } else if (props.exploded) {
    return 'red'
  } else {
    return 'purple'
  }
}

const baseBorderTopColor = props => {
  if (props.clicked) {
    return 'rgb(143, 117, 84)'
  } else if (props.exploded) {
    return 'rgb(167, 3, 3)'
  } else {
    return 'rgb(184, 1, 184)'
  }
}

const baseBorderBottomColor = props => {
  if (props.clicked) {
    return 'rgb(248, 227, 200)'
  } else if (props.exploded) {
    return 'rgb(250, 77, 77)'
  } else {
    return 'rgb(46, 1, 46)'
  }
}

const baseBorderRightColor = props => {
  if (props.clicked) {
    return 'rgb(248, 227, 200)'
  } else if (props.exploded) {
    return 'rgb(250, 77, 77)'
  } else {
    return 'rgb(46, 1, 46)'
  }
}

const baseBorderLeftColor = props => {
  if (props.clicked) {
    return 'rgb(143, 117, 84)'
  } else if (props.exploded) {
    return 'rgb(167, 3, 3)'
  } else {
    return 'rgb(184, 1, 184)'
  }
}

const baseColor = props => {
  if (props.flagged) {
    return 'white'
  } 
  
  switch (props.number) {
    case 1:
      return 'black'
    case 2:
      return 'red'
    case 3:
      return 'orange'
    case 4: 
      return 'yellow'
    case 5:
      return 'green'
    case 6:
      return 'blue'
    case 7:
      return 'indigo'
    case 8:
      return 'violet'
    default: 
      return 'black'
  }
}

export const Base = styled.div`
  background-color: ${baseBackgroundColor};
  border-radius: 6px;
  border: 3px solid;
  border-bottom-color: ${baseBorderBottomColor};
  border-right-color: ${baseBorderRightColor};
  border-left-color: ${baseBorderLeftColor};
  border-top-color: ${baseBorderTopColor};
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  cursor: default;
  transition: all 0.3s ease-in-out;
  color: ${baseColor};

  &:hover {
    background-color: rgb(236, 6, 236);
  }
`

export const Flagged = styled