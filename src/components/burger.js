import PropTypes from "prop-types"
import React, { useState } from "react"

const burger =  {
  'display': 'inline-block',
  'padding': '4px',
  'border': '2px solid transparent',
  'outline': 'none'

  // &:focus {
  //   'outline': 'none',
  // }
}

const burgerLayer = {
  'borderRadius': '8px',
  'width': '25px',
  'height': '3px',
  'margin': '4px 0',
  // .burger--active & {
  //   background-color: grey;
  // }
}

const navButtonStyle = {
  'fontFamily': 'Helvetica',
  'border': '0',
  'padding': '0',
  'backgroundColor': 'transparent',
  'fontSize': '1rem',
  'borderBottom': '2px solid black',
  'cursor': 'pointer',
  'outline': 'none'
};

const navListStyling = {
  'padding': '24px',
  'position': 'absolute',
  'top': '55px',
  'right': '26px',
  'backgroundColor': '#ffea00',
  'margin': '8px 0',
  'listStyle': 'none',
}

const Burger = ({ siteTitle }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  // Closes when nav list clicked
  // document.body.addEventListener('click', (e) => {
  //   setBurgerOpen(false);
  // });

  const handleClick = (e) => {
    if (burgerOpen) {
      setBurgerOpen(false);
    } else {
      setBurgerOpen(true);
    }
  };

  return (
    <div>
      <div onClick={handleClick} style={burger} tabIndex="0">
        {[...Array(3)].map((el, i) => (
          <div key={i} style={{backgroundColor: !burgerOpen ? 'lightgray' : 'black', ...burgerLayer}}></div>
        ))}
      </div>
      <ul style={{ display: burgerOpen ? 'block' :'none', ...navListStyling }}>
        <li style={{ marginBottom: '8px' }}>
          <button style={navButtonStyle}>Save emotions</button>
        </li>
      </ul>
    </div>
  );
}

Burger.propTypes = {
  siteTitle: PropTypes.string,
}

export default Burger
