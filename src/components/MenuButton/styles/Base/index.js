import styled from 'styled-components/macro'

export const Base = styled.div`
  background-color: limegreen;
  width: 300px;
  height: 150px;
  transform: translatey(10%) rotateX(30deg);
  box-shadow:
  0px 5px 0 3px #333;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    box-shadow: 
    0px 2px 0 1px #333;;
    background-color: palevioletred;
  }
`