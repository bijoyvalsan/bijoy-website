import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

import { device } from '../util';

export const StyledCard = styled(Card)`
background-color: #fff;
width: 100vh;
height: 100vh;
max-width: 600px;
max-height: 600px;

@media ${device.mobileL} { 
  max-width: 320px;
  max-height: 585px;
}

@media ${device.mobileM} { 
  max-width: 300px;
  max-height: 585px;
}
`;

export const StyledTypography = styled(Typography)`
 color: rgb(0,0,0) !important;
 font-weight: 400 !important;
 text-transform:capitalize;
 @media ${device.mobileL} { 
  .MuiTypography-h6 {
    font-size: 1rem;
  }
  &.MuiTypography-body1 {
    font-size: .9rem;
  }
  &.MuiTypography-h6 {
    font-size: 1rem;
  }
  &.MuiTypography-h4 {
    font-size: 2rem;
  }
  &.MuiTypography-body2 {
    font-size: 0.8rem;
  }
}
`;

export const StyledIcon = styled(Icon)`
 margin-top: 3px;
 color: #666 !important;
 font-weight: 400 !important;
`;

export const StyledLink = styled(Link)`
 color: rgb(0,0,0) !important;
 font-weight: 400 !important;
`;