import React, { useState } from 'react'
import { useSprings  } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import Intro from './components/Intro';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import { to, from } from './helper';
import { StyledContainer, StyledAnimatedCard } from './Profile.styled'

const PageInfo = [Intro, Skills, WorkHistory].reverse();

const pageCount = PageInfo.length;
const Profile = () => {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(pageCount, i => ({ ...to(i), from: from(i) }))
  const bind = useDrag(({ args: [index], down, movement: [mx], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index);
    set(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; 
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1 // Active up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === pageCount) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
    
  return props.map(({ x, y }, i) => {
    const Page = PageInfo[i];
    return (
      <StyledContainer key={i} style={{ x, y }}>
        <StyledAnimatedCard {...bind(i)}>
          <Page />
        </StyledAnimatedCard>
      </StyledContainer>
    )
  })
}

export default Profile;
