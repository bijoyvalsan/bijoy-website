import React from 'react';
import { StyledCard, StyledTypography } from '../../components/MaterialUI'
import { StyledContainer, StyledWorkHistoryCard } from './WorkHistory.styled';

import workHistoryData from '../../data/workHistory.json'

const { workHistory, workHistoryTitle } = workHistoryData;

const WorkHistoryCard = ({ workHistoryData }) => {
  const data = { ...workHistoryData };
  const logo = data.logo;
  delete data.logo;
  const infoKeys = Object.keys(data);
  return (
    <StyledWorkHistoryCard>
      {logo && logo !== "" && <div className="logo" style={{ backgroundImage: `url(${logo})` }}>
      </div>}
      {infoKeys.map(item => (
        <React.Fragment>
          <StyledTypography gutterBottom variant="h6">
            {item}
          </StyledTypography>
          <StyledTypography gutterBottom variant="body2">
            {data[item]}
          </StyledTypography>
        </React.Fragment>))}

    </StyledWorkHistoryCard>
  )
};

const WorkHistory = () => {
  return (
    <StyledCard>
      <StyledContainer>
        <div className="work-history-title">
          <StyledTypography gutterBottom variant="h5">
            {workHistoryTitle}
          </StyledTypography>
        </div>
        <div className="work-history-card-holder">
          {workHistory.map((item) => (
            <WorkHistoryCard workHistoryData={item} />
          ))}
        </div>

      </StyledContainer>
    </StyledCard>
  )
}

export default WorkHistory;
