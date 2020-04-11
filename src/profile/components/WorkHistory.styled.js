import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 25px;
  overflow-y: auto;

 .work-history-title{
 }

 .work-history-card-holder {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
 }
 `;

export const StyledWorkHistoryCard = styled(Card)`
 min-width : 250px;
 margin: 5px;
 padding: 5px;
 
 .logo {
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
  background-size: contain;
  background-position: center;
  margin: 10px auto;
 }

 .row {
  display: flex;
  justify-content: space-between;
 }

 .columnn {
  flex: 1;
 }

`;

