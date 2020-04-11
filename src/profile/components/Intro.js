import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { StyledCard, StyledTypography, StyledIcon, StyledLink } from '../../components/MaterialUI'
import { StyledContainer } from './Intro.styled'

import introData from '../../data/intro.json'

const Intro = () => {
  return (
    <StyledCard>
      <StyledContainer>
        <div className='row1'>
          <div className='image-section'>
          </div>
          <div className='details-section'>
            <StyledTypography gutterBottom variant="h4">
              {introData.name}
            </StyledTypography>
            <div className="details-row">
              <StyledIcon fontSize="medium">home</StyledIcon>
              <div className="details-column">
                <StyledTypography gutterBottom variant="h6">
                  {introData.address.line1}<br />
                  {introData.address.line2}<br />
                  {introData.address.line3}
                </StyledTypography>
              </div>
            </div>
            <div className="details-row">
              <StyledIcon fontSize="medium">phone</StyledIcon>
              <div className="details-column">
                <StyledTypography gutterBottom variant="h6">
                  <StyledLink variant="h6" href={`tel:${introData.phone}`}>{introData.phone}</StyledLink>
                </StyledTypography>
              </div>
            </div>
            <div className="details-row">
              <StyledIcon fontSize="medium">email</StyledIcon>
              <div className="details-column">
                <StyledTypography gutterBottom variant="h6">
                  <StyledLink variant="h6" href={`mailto:${introData.email}`}>{introData.email}</StyledLink>
                </StyledTypography>
              </div>
            </div>
            <div className="details-row">
              <StyledLink href={introData.linkedIn}>
                <StyledIcon fontSize="medium">
                  <LinkedInIcon />
                </StyledIcon>
              </StyledLink>
              <div className="details-column">
                <StyledLink href={introData.github}>
                  <StyledIcon fontSize="medium">
                    <GitHubIcon />
                  </StyledIcon>
                </StyledLink>
              </div>
            </div>
          </div>
        </div>

        <div className='about-section'>
          <StyledTypography gutterBottom variant="body1">
            {introData.aboutMe}
          </StyledTypography>
        </div>
        <div>
          <div className="details-row">
            <img alt="react"  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
            <img alt="node js"  src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />
            <img alt="graphql"  src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" />
          </div>
        </div>
      </StyledContainer>
    </StyledCard>
  )
}

export default Intro;
