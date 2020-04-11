import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import styled from 'styled-components'

export const StyledCard = styled(Card)`
background-color: #fff;
width: 100vh;
max-width: 600px;
height: 100vh;
max-height: 600px;
`;

export const StyledTypography = styled(Typography)`
 color: rgb(0,0,0) !important;
 font-weight: 400 !important;
 text-transform:capitalize;
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