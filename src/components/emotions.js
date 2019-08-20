import PropTypes from "prop-types"
import React from "react"
import Emotion from "./emotion"

const emotionsStyle = {
  'alignItems': 'center',
  'display': 'flex',
  'justifyContent': 'center',
  'margin': '0 auto',
  'minHeight': 'calc(100vh - 250px)',
  'fontSize': '100px',
  'flexWrap': 'wrap'
};

const Emotions = ({ emojis }) => (
  <div style={ emotionsStyle }>
    { emojis.map((opt, i) => <Emotion emoji={opt} key={i}/>) }
  </div>
);

Emotions.propTypes = {
  emojis: PropTypes.array,
}

export default Emotions
