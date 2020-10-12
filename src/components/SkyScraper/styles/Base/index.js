import styled from 'styled-components/macro'

export const SkyScraper = styled.div`
  position: absolute;
  top: 23%;
  right: -50%;
  width: 200px;
  height: 600px;
  /* background-color: rgba(255, 255, 255, 0.2); */
`

export const BackBottomLeftLeg = styled.div`
  position: absolute;
  width: 10px;
  height: 175px;
  background-color: #B8ABB0;
  transform: rotate(30deg);
  bottom: 9.2%;
  left: 20%;
  z-index: 95;
`

export const FrontBottomLeftLeg = styled.div`
  position: absolute;
  width: 10px;
  height: 183px;
  background-color: #B8ABB0;
  transform: rotate(7.5deg);
  bottom: 5.4%;
  left: 35%;
  z-index: 105;
`

export const BackBottomRightLeg = styled.div`
  position: absolute;
  width: 10px;
  height: 192px;
  background-color: #B8ABB0;
  transform: rotate(-22.5deg);
  bottom: 4.5%;
  right: 22%;
  z-index: 95;
`

export const FrontBottomRightLeg = styled.div`
  position: absolute;
  width: 10px;
  height: 215px;
  background-color: #B8ABB0;
  transform: rotate(-7.5deg);
  bottom: 0;
  right: 35%;
  z-index: 105;
`

export const CenterSpire = styled.div`
  position: absolute;
  width: 35px;
  height: 60%;
  background-color: black;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 100;

  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-color: #E05939;
    clip-path: polygon(32% 94%, 69% 90%, 100% 100%, 0 100%, 0 93.8%);
    z-index: 105;
    left: -2px;
    bottom: -2px;
  }
`

export const TempBar = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  top: 0;
  background-color: blue;
`