import styled from 'styled-components/macro'

export const NeonSign = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  height: 600px;
  width: 800px;
  z-index: 215;
  bottom: 0;
  right: 20%;
  perspective: 800px;
  perspective-origin: 50% 50px;
`

export const Board = styled.div`
background-color: blue;
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
  
    163px 43px 0 0 white, 162px 43px 0 -1px white, 161px 44px 0 -2px white, 160px 44px 0 -2px white, 160px 44px 3px -2px grey, 
    163px 71px 0 0 white, 162px 71px 0 -1px white, 161px 72px 0 -2px white, 160px 72px 0 -2px white, 160px 72px 3px -2px grey, 
    163px 99px 0 0 white, 162px 99px 0 -1px white, 161px 100px 0 -2px white, 160px 100px 0 -2px white, 160px 100px 3px -2px grey, 
    163px 127px 0 0 white, 162px 127px 0 -1px white, 161px 128px 0 -2px white, 160px 128px 0 -2px white, 160px 128px 3px -2px grey, 
    163px 155px 0 0 white, 162px 155px 0 -1px white, 161px 156px 0 -2px white, 160px 156px 0 -2px white, 160px 156px 3px -2px grey,

    480px 165px 0 0 white, 479px 165px 0 -1px white, 478px 166px 0 -2px white, 477px 166px 0 -2px white, 477px 166px 3px -2px grey, 
    450px 165px 0 0 white, 449px 165px 0 -1px white, 448px 166px 0 -2px white, 447px 166px 0 -2px white, 447px 166px 3px -2px grey, 
    420px 165px 0 0 white, 419px 165px 0 -1px white, 418px 166px 0 -2px white, 417px 166px 0 -2px white, 417px 166px 3px -2px grey, 
    390px 165px 0 0 white, 389px 165px 0 -1px white, 388px 166px 0 -2px white, 387px 166px 0 -2px white, 387px 166px 3px -2px grey, 
    360px 165px 0 0 white, 359px 165px 0 -1px white, 358px 166px 0 -2px white, 357px 166px 0 -2px white, 357px 166px 3px -2px grey, 
    330px 165px 0 0 white, 329px 165px 0 -1px white, 328px 166px 0 -2px white, 327px 166px 0 -2px white, 327px 166px 3px -2px grey, 
    300px 165px 0 0 white, 299px 165px 0 -1px white, 298px 166px 0 -2px white, 297px 166px 0 -2px white, 297px 166px 3px -2px grey, 
    270px 165px 0 0 white, 269px 165px 0 -1px white, 268px 166px 0 -2px white, 267px 166px 0 -2px white, 267px 166px 3px -2px grey, 
    240px 165px 0 0 white, 239px 165px 0 -1px white, 238px 166px 0 -2px white, 237px 166px 0 -2px white, 237px 166px 3px -2px grey, 
    210px 165px 0 0 white, 209px 165px 0 -1px white, 208px 166px 0 -2px white, 207px 166px 0 -2px white, 207px 166px 3px -2px grey, 
    /* 180px 165px 0 0 white, 179px 165px 0 -1px white, 178px 166px 0 -2px white, 177px 166px 0 -2px white, 177px 166px 3px -2px grey,  */
    /* 150px 165px 0 0 white, 149px 165px 0 -1px white, 148px 166px 0 -2px white, 147px 166px 0 -2px white, 147px 166px 3px -2px grey,  */
    120px 165px 0 0 white, 119px 165px 0 -1px white, 118px 166px 0 -2px white, 117px 166px 0 -2px white, 117px 166px 3px -2px grey, 
    90px 165px 0 0 white, 89px 165px 0 -1px white, 88px 166px 0 -2px white, 87px 166px 0 -2px white, 87px 166px 3px -2px grey, 
    60px 165px 0 0 white, 59px 165px 0 -1px white, 58px 166px 0 -2px white, 57px 166px 0 -2px white, 57px 166px 3px -2px grey, 
    30px 165px 0 0 white, 29px 165px 0 -1px white, 28px 166px 0 -2px white, 27px 166px 0 -2px white, 27px 166px 3px -2px grey, 
    0px 165px 0 0 white, -1px 165px 0 -1px white, -2px 166px 0 -2px white, -3px 166px 0 -2px white, -3px 166px 3px -2px grey, 
    -30px 165px 0 0 white, -31px 165px 0 -1px white, -32px 166px 0 -2px white, -33px 166px 0 -2px white, -33px 166px 3px -2px grey,

    -30px 135px 0 0 white, -31px 135px 0 -1px white, -32px 136px 0 -2px white, -33px 136px 0 -2px white, -33px 136px 3px -2px grey, 
    -30px 105px 0 0 white, -31px 105px 0 -1px white, -32px 106px 0 -2px white, -33px 106px 0 -2px white, -33px 106px 3px -2px grey, 
    /* -30px 75px 0 0 white, -31px 75px 0 -1px white, -32px 76px 0 -2px white, -33px 76px 0 -2px white, -33px 76px 3px -2px grey,  */
    -30px 45px 0 0 white, -31px 45px 0 -1px white, -32px 46px 0 -2px white, -33px 46px 0 -2px white, -33px 46px 3px -2px grey;
}
`