import styled from 'styled-components/macro'

export const NeonSign = styled.div`
  /* background-color: rgba(255, 255, 255, 0.2); */
  position: absolute;
  height: 400px;
  width: 400px;
  z-index: 215;
  bottom: 8%;
  right: 18%;
  perspective: 800px;
  perspective-origin: 50% 50px;
  transform: scale(0.5);
  z-index: 209;
`

export const Board = styled.div`
  position: relative;
  width: 200px;
  transform-style: preserve-3d;
  margin: 0 auto;
  transform-origin: 0 100px;
  transform: rotateY(-15deg);
  z-index:3;
  pointer-events: none;
`

export const BoardFront = styled.div`
  position: absolute;
  box-shadow: inset 0 0 15px #000000;
  text-align: center;
  line-height: 200px;
  background-color: #d3d3d3;
  width: 400px;
  height: 180px;
  font-size: 5.5em;
  color: #00f9ff;
  position: relative;
  animation: highlight 2s infinite linear;
  top: 0;
  left: 0;

  &::before {
  content: "";
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  /* border made of light bulbs */
  box-shadow:
    /* Top Row Lights */
    -184px 15px 0 0 white, -185px 15px 0 -1px white, -186px 16px 0 -2px white, -187px 16px 0 -2px white, -187px 16px 3px -2px grey,
    -153px 15px 0 0 white, -154px 15px 0 -1px white, -155px 16px 0 -2px white, -156px 16px 0 -2px white, -156px 16px 3px -2px grey, 
    -122px 15px 0 0 white, -121px 15px 0 -1px white, -120px 16px 0 -2px white, -119px 16px 0 -2px white, -119px 16px 3px -2px grey, 
    -91px 15px 0 0 white, -90px 15px 0 -1px white, -89px 16px 0 -2px white, -88px 16px 0 -2px white, -88px 16px 3px -2px grey, 
    -60px 15px 0 0 white, -59px 15px 0 -1px white, -58px 16px 0 -2px white, -57px 16px 0 -2px white, -57px 16px 3px -2px grey, 
    -29px 15px 0 0 white, -28px 15px 0 -1px white, -27px 16px 0 -2px white, -26px 16px 0 -2px white, -26px 16px 3px -2px grey,
    2px 15px 0 0 white, 3px 15px 0 -1px white, 4px 16px 0 -2px white, 5px 16px 0 -2px white, 5px 16px 3px -2px grey, 
    39px 15px 0 0 white, 38px 15px 0 -1px white, 37px 16px 0 -2px white, 36px 16px 0 -2px white, 36px 16px 3px -2px grey, 
    70px 15px 0 0 white, 69px 15px 0 -1px white, 68px 16px 0 -2px white, 67px 16px 0 -2px white, 67px 16px 3px -2px grey, 
    101px 15px 0 0 white, 100px 15px 0 -1px white, 99px 16px 0 -2px white, 98px 16px 0 -2px white, 98px 16px 3px -2px grey, 
    132px 15px 0 0 white, 131px 15px 0 -1px white, 130px 16px 0 -2px white, 129px 16px 0 -2px white, 129px 16px 3px -2px grey, 
    163px 15px 0 0 white, 162px 15px 0 -1px white, 161px 16px 0 -2px white, 160px 16px 0 -2px white, 160px 16px 3px -2px grey,
  
    /* Right Row */
    163px 43px 0 0 white, 162px 43px 0 -1px white, 161px 44px 0 -2px white, 160px 44px 0 -2px white, 160px 44px 3px -2px grey, 
    163px 71px 0 0 white, 162px 71px 0 -1px white, 161px 72px 0 -2px white, 160px 72px 0 -2px white, 160px 72px 3px -2px grey, 
    163px 99px 0 0 white, 162px 99px 0 -1px white, 161px 100px 0 -2px white, 160px 100px 0 -2px white, 160px 100px 3px -2px grey, 
    163px 127px 0 0 white, 162px 127px 0 -1px white, 161px 128px 0 -2px white, 160px 128px 0 -2px white, 160px 128px 3px -2px grey,

    /* Bottom Row */
    163px 155px 0 0 white, 162px 155px 0 -1px white, 161px 156px 0 -2px white, 160px 156px 0 -2px white, 160px 156px 3px -2px grey,
    132px 155px 0 0 white, 131px 155px 0 -1px white, 130px 156px 0 -2px white, 129px 156px 0 -2px white, 129px 156px 3px -2px grey, 
    101px 155px 0 0 white, 100px 155px 0 -1px white, 99px 156px 0 -2px white, 98px 156px 0 -2px white, 98px 156px 3px -2px grey, 
    70px 155px 0 0 white, 69px 155px 0 -1px white, 68px 156px 0 -2px white, 67px 156px 0 -2px white, 67px 156px 3px -2px grey, 
    39px 155px 0 0 white, 38px 155px 0 -1px white, 37px 156px 0 -2px white, 36px 156px 0 -2px white, 36px 156px 3px -2px grey, 
    2px 155px 0 0 white, 1px 155px 0 -1px white, 0 156px 0 -2px white, -1px 156px 0 -2px white, -1px 156px 3px -2px grey, 
    -29px 155px 0 0 white, -28px 155px 0 -1px white, -27px 156px 0 -2px white, -26px 156px 0 -2px white, -26px 156px 3px -2px grey, 
    -60px 155px 0 0 white, -59px 155px 0 -1px white, -58px 156px 0 -2px white, -57px 156px 0 -2px white, -57px 156px 3px -2px grey, 
    -91px 155px 0 0 white, -90px 155px 0 -1px white, -89px 156px 0 -2px white, -88px 156px 0 -2px white, -88px 156px 3px -2px grey, 
    -122px 155px 0 0 white, -121px 155px 0 -1px white, -120px 156px 0 -2px white, -119px 156px 0 -2px white, -119px 156px 3px -2px grey, 
    -153px 155px 0 0 white, -154px 155px 0 -1px white, -155px 156px 0 -2px white, -156px 156px 0 -2px white, -156px 156px 3px -2px grey, 
    -184px 155px 0 0 white, -185px 155px 0 -1px white, -186px 156px 0 -2px white, -187px 156px 0 -2px white, -187px 156px 3px -2px grey, 

    /* Left Row */
    -184px 127px 0 0 white, -185px 127px 0 -1px white, -186px 128px 0 -2px white, -187px 128px 0 -2px white, -187px 128px 3px -2px grey, 
    -184px 99px 0 0 white, -185px 99px 0 -1px white, -186px 100px 0 -2px white, -187px 100px 0 -2px white, -187px 100px 3px -2px grey, 
    -184px 71px 0 0 white, -185px 71px 0 -1px white, -186px 72px 0 -2px white, -187px 72px 0 -2px white, -187px 72px 3px -2px grey, 
    -184px 43px 0 0 white, -185px 43px 0 -1px white, -186px 44px 0 -2px white, -187px 44px 0 -2px white, -187px 44px 3px -2px grey;
  }
`

export const BoardFrontRightSide = styled.div`
  position: absolute;
  top: -21.5%;
  right: 142%;
  transform: rotateY(45deg) translateX(850px);
  transform-origin: center top;
  width: 50px;
  height: 321px;
  background-color: #bab8b8;
`

const leg = styled.div`
  position: absolute;
  box-shadow: inset 0 0 15px #000000;
  background-color: grey;
`

export const Legs = styled.div`
  width: 200px;
  transform-style: preserve-3d;
  margin: 0 auto;
  transform-origin: 0 100px;
  transform: rotateY(-15deg);
`

export const LeftLegSide = styled(leg)`
  transform: rotateY(135deg) translateZ(-200px) ;
  transform-origin: center left;
  width: 20px;
  height: 200px;
`

export const LeftLegFront = styled(leg)`
  transform: translateZ(-30px) rotateX(180deg) translateY(0px) translateX(200px);
  width: 30px;
  height: 200px;
`