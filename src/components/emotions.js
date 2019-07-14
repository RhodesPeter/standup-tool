import PropTypes from "prop-types"
import React from "react"

const options = ['💀', '😷', '😪', '😐', '🙂', '😃', '😜', '🦄'];

const emotionsStyle = {
  'alignItems': 'center',
  'display': 'flex',
  'justifyContent': 'center',
  'margin': '0 auto',
  'minHeight': 'calc(100vh - 220px)',
  'fontSize': '100px',
  'flexWrap': 'wrap'
};

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

const Emotions = ({ siteTitle }) => (
  <div style={ emotionsStyle }>
    { options.map((opt, i) => <button style={iconStyle} key={i} tabIndex="0">{opt}</button>) }
  </div>
);

Emotions.propTypes = {
  siteTitle: PropTypes.string,
}

export default Emotions
