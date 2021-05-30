import React from 'react'
import { a } from '@react-spring/web'
import { Wrapper } from 'styles/OverlayStyles'

const Overlay = ({ fill }) => {
  return (
    <Wrapper>
    <div className="overlay">
      
      <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <text fill="#A0A4D9" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={52} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={257.909} children={'the wolf \u2014'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={270.909} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={48} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={321.909} children="Behold the sign and " />
          <tspan x={40} y={372.909} children="the very Hallowed " />
          <tspan x={40} y={423.909} children="Names of God full of " />
          <tspan x={40} y={474.909} children="power. Obey the " />
          <tspan x={40} y={525.909} children="power of this our " />
          <tspan x={40} y={576.909} children="pentacle;" />
        </text>
      </a.svg>
    </div>
    </Wrapper>
  )
}

export default Overlay