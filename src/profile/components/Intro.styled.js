import styled from 'styled-components';
import { device } from '../../util';

export const StyledContainer = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
 width: 100%;
 padding: 25px;
 overflow-y: auto;

 .row1 {
  display: flex;
  flex: 1;
  .image-section {
      background-size: 275px 400px;
      width: 50%;
      height: 325px;
      background-repeat: no-repeat;
      img {
        width: 100%;
        height: 325px;
      }
  }
  @media ${device.mobileL} { 
    flex-direction: column;
    .image-section {
      width: 100%;
      min-width: 250px;
      margin-bottom: 10px;
      height: 300px;
      img {
        width: 100%;
        height: 300px;
      }
    }
  }
} 

.details-section {
  flex: 1;
  margin-left: 10px;
  .details-row {
    display: flex;
    justify-content: space-around;
  }
  .details-column {
    flex: 1;
    padding-left: 10px;
  }
}

 .about-section {
   margin-top: 10px;
   flex: 1;
 }
 .skill-image-section {
  flex: 1;
  display: flex;
  justify-content: space-around;
  img {
    width: 100px;
  }
  @media ${device.mobileL} { 
    img {
      width: 50px;
    }
  }
 }
`;