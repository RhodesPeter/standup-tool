import PropTypes from "prop-types"
import React, { useState } from "react"

const iconStyle = {
  'textAlign': 'center',
  'width': '100px',
  'height': '100px',
  'margin': '16px',
  'position': 'relative',
  'userSelect': 'none',
  'outline': 'none',
  'lineHeight': '110px',
  'backgroundColor': 'transparent',
  'border': '0'
};

const dotStyle = {
  'backgroundColor': 'black',
  'position': 'absolute',
  'top': '-10px',
  'left': 'calc(50% + 20px)',
  'width': '8px',
  'height': '8px',
  'borderRadius': '50%'
  //
  // @for $i from 2 through 15 {
  //   &:nth-of-type(#{$i}) {
  //     top: (-20px * $i) - (-10px);
  //   }
  // }
}

const tickStyle = {
  'fontSize': '24px',
  'position': 'relative',
  'lineHeight': '24px',
  // 'top': '-70px',
  // 'left': 'calc(50% - 10px)'
  // @for $i from 2 through 15 {
  //   &:nth-of-type(#{$i}) {
  //     top: (-20px * $i) + -50px;
  //   }
  // }
}

const Dot = () => (
  <div key={new Date().getTime()} style={dotStyle}></div>
);

const Tick = () => (
  <div key={new Date().getTime()} style={tickStyle}>✔︎</div>
);

const Emotion = ({ emoji }) => {
  const [ticks, setTicks] = useState([]);
  const [dots, setDots] = useState([]);

  const handleClick = (e) => {
    if (e.altKey === false) {
      setTicks(ticks.concat(Tick()))
    } else {
      setDots(dots.concat(Dot()))
    }
  };

  return (
    <button onClick={handleClick} style={iconStyle} tabIndex="0">
      <div style={{ position: 'absolute', top: '-24px' }}>
        { ticks }
        { dots }
      </div>
      { emoji }
    </button>
  )
};

Emotion.propTypes = {
  siteTitle: PropTypes.string,
}

export default Emotion
