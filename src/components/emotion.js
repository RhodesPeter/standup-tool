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
  'width': '8px',
  'height': '8px',
  'borderRadius': '50%',
  'marginTop': '15px'
}

const tickStyle = {
  'fontSize': '24px',
  'position': 'relative',
  'lineHeight': '24px',
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
      <div style={{ position: 'absolute', bottom: '100px', left: '50%' }}>
        { ticks }
      </div>
      <div style={{ position: 'absolute', bottom: '100px', left: 'calc(50% + 30px)' }}>
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
