import styled from 'styled-components';
import { device } from '../../util';

const bijoyImage =`${window.location.origin}/images/bijoy.jpeg`

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
      background-image: url(${bijoyImage});
      background-size: 275px 400px;
      width: 50%;
      height: 350px;
      background-repeat: no-repeat;
  }
  @media ${device.mobileL} { 
    flex-direction: column;
    .image-section {
      width: 100%;
      min-width: 250px;
      margin-bottom: 10px;
      height: 300px;
      content: ' ';
    }
  }
} 

.details-section {
  flex: 1;
  margin-left: 10px;
}

.details-row {
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
  
  @media ${device.mobileM} { 
    img {
      width: 50px;
    }
  }
  
  @media ${device.mobileS} { 
    img {
      width: 50px;
    }
  }
}
.details-column {
  flex: 1;
  padding-left: 10px;
}
 .about-section {
   margin-top: 10px;
   flex: 1;
 }
`;