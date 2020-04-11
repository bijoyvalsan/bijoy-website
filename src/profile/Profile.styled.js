import styled from 'styled-components'
import { animated } from 'react-spring'

import { device } from '../util';

export const StyledContainer = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAnimatedCard = styled(animated.div)`
  background-color: #fff;
  width: 100vh;
  height: 100vh;
  max-width: 600px;
  max-height: 600px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    
  @media ${device.mobileL} { 
    max-width: 320px;
    max-height: 600px;
  }

  @media ${device.mobileM} { 
    max-width: 300px;
    max-height: 600px;
  }

  @media ${device.mobileS} { 
    max-width: 300px;
    max-height: 500px;
  }
`;