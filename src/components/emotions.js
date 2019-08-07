import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery } from "gatsby"
import Emotion from "./emotion"

const options = ['💀', '😷', '😪', '😐', '🙂', '😃', '😜', '🦄'];

const emotionsStyle = {
  'alignItems': 'center',
  'display': 'flex',
  'justifyContent': 'center',
  'margin': '0 auto',
  'minHeight': 'calc(100vh - 250px)',
  'fontSize': '100px',
  'flexWrap': 'wrap'
};

const Emotions = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
    gcms {
      emotionses {
        savedEmojis
      }
    }
  }
  `);

  return (
    <div style={ emotionsStyle }>
      { options.map((opt, i) => <Emotion emoji={opt} key={i}/>) }
      { console.log(data) }
    </div>
  );
};

Emotions.propTypes = {
  siteTitle: PropTypes.string,
}

export default Emotions
