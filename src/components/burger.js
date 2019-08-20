import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "gatsby";
// import sendEmotionsToDB from '../services/send-emotions-to-db';

const burger =  {
  'display': 'inline-block',
  'padding': '4px',
  'border': '2px solid transparent',
  'outline': 'none',
}

const burgerLayer = {
  'borderRadius': '8px',
  'width': '25px',
  'height': '3px',
  'margin': '4px 0'
}

const navButtonStyle = {
  'fontFamily': 'Helvetica',
  'border': '0',
  'padding': '0',
  'backgroundColor': 'transparent',
  'fontSize': '1rem',
  'borderBottom': '2px solid black',
  'cursor': 'pointer',
  'outline': 'none',
  'textDecoration': 'none',
  'color': 'black',
  'lineHeight': '1rem',
};

const navListStyling = {
  'padding': '24px',
  'position': 'absolute',
  'top': '55px',
  'right': '26px',
  'backgroundColor': '#ffea00',
  'margin': '8px 0',
  'listStyle': 'none',
  'zIndex': '1'
}

const Burger = ({ location }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleClick = (e) => {
    if (burgerOpen) {
      setBurgerOpen(false);
    } else {
      setBurgerOpen(true);
    }
  };

  // <li style={{ marginBottom: '24px' }}>
  //   <button onClick={sendEmotionsToDB} style={navButtonStyle}>Save emotions</button>
  // </li>

  const links = [
    { link: '/', text: 'Standard emotions', style: { marginBottom: '8px' } },
    { link: '/explorify', text: 'Explorify emotions', style: { marginBottom: '8px' }},
    { link: '/weather', text: 'Weather emotions', style: { marginBottom: '8px' }},
    { link: '/random', text: 'Random emotions', style: { marginBottom: '0' }}
  ]

  return (
    <div>
      <div onClick={handleClick} style={burger} tabIndex="0">
        {[...Array(3)].map((el, i) => (
          <div key={i} style={{backgroundColor: !burgerOpen ? 'lightgray' : 'black', ...burgerLayer}}></div>
        ))}
      </div>
      <ul style={{ display: burgerOpen ? 'block' :'none', ...navListStyling }}>
        {links.map(link => (
          <li key={link.text} style={link.style}>
            <Link style={navButtonStyle} to={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Burger.propTypes = {
  siteTitle: PropTypes.string,
}

export default Burger
