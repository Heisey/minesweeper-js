import styled from 'styled-components/macro'

export const SkyScraper = styled.div`
  position: absolute;
  top: 23%;
  right: -50%;
  width: 200px;
  height: 600px;
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

export const FrontTopRightLeg = styled.div`
  position: absolute;
  width: 10px;
  height: 65px;
  background-color: #B8ABB0;
  transform: rotate(17.5deg);
  top: 50%;
  right: 37%;
  z-index: 105;
`

export const FrontTopLeftLeg = styled.div`
  position: absolute;
  width: 10px;
  height: 65px;
  background-color: #B8ABB0;
  transform: rotate(-17.5deg);
  top: 50%;
  left: 37%;
  z-index: 105;
`

export const BackTopRightLeg = styled.div`
  position: absolute;
  width: 10px;
  height: 95px;
  background-color: #B8ABB0;
  transform: rotate(-37.5deg);
  top: 48%;
  left: 30%;
  z-index: 105;
`

export const BackTopLeftLeg = styled.div`
  position: absolute;
  width: 10px;
  height: 95px;
  background-color: #B8ABB0;
  transform: rotate(37.5deg);
  top: 48%;
  right: 30%;
  z-index: 105;
`

export const CenterSpire = styled.div`
  position: absolute;
  width: 35px;
  height: 50%;
  background-color: black;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 100;

  &::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-color: #E05939;
    clip-path: polygon(32% 94%, 69% 90%, 100% 100%, 0 100%, 0 95%);
    z-index: 105;
    left: -2px;
    bottom: -2px;
  }

  &::after {
    content: '';
    position: absolute;
    width: calc(100% + 2px);
    height: 50px;
    background-color: #B8ABB0;
    left: -1px;
    top: 18%;
    z-index: 110;
  }
`

export const BaseUpperTower = styled.div`
  position: absolute;
  height: 10px;
  width: 90%;
  background-color: #B8ABB0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  top: 49%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 105;
`

export const RoofUpperTower = styled.div`
  position: absolute;
  height: 50px;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #B8ABB0;
  clip-path: polygon(
    0 100%,
    40% 50%,
    40% 40%,
    30% 40%,
    30% 30%,

    70% 30%,
    70% 40%,
    61% 40%,
    61% 50%,
    100% 100%
  );
  top: 33.5%;
  z-index: 105;
`

export const UpperTower = styled.div`
  position: absolute;
  background-color: black;
  width: 80%;
  height: 8%;
  top: 41.8%;
  left: 50%;
  transform: translateX(-50%);
`

export const ObservationDeck = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  top: 44.5%;
  background-color: #B8ABB0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 105;
`