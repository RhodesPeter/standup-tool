import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Burger from "./burger"

// Should this be in a helpers file?
const getWeekDay = () => {
  const date = new Date().getDay();

  const weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  return weekdays[date];
}

const headerWrapperStyle = {
  margin: `0 auto`,
  maxWidth: 'none', // Might want to add 1100 back at some point
  padding: `1.45rem 1.0875rem`,
  display: 'flex',
  justifyContent: 'space-between'
};

const linkStyle = {
  color: '#A9A9A9',
  textDecoration: 'none'
};

const Header = ({ location }) => (
  <header style={{ background: `white`, marginBottom: `1.45rem`}}>
    <div style={headerWrapperStyle}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={linkStyle}>
          {getWeekDay()}
        </Link>
      </h1>
      <Burger location={location}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
