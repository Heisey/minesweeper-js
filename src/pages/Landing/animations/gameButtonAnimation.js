import { keyframes } from 'styled-components'

export default keyframes`
  0% {
    z-index: 201; 
    bottom: 45%;
    /* opacity: 1; */
  }

  80% {
    bottom: 0;

  }

  100% {
    z-index: 199; 
    display: none;
  }
`
