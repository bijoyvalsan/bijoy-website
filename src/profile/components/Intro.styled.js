import styled from 'styled-components';

const bijoyImage =`${window.location.origin}/images/bijoy.jpeg`

export const StyledContainer = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
 width: 100%;
 padding: 25px;

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
} 

.details-section {
  flex: 1;
  margin-left: 10px;
}

.details-row {
  display: flex;
  justify-content: space-around;
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