// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

      const toggleImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      const className = isDarkTheme ? 'nav-con' : 'nav-con back'
      const color = isDarkTheme ? 'l-name' : 'l-name color'

      const onClickButton = () => {
        toggleTheme()
      }

      return (
        <nav className={className}>
          <img src={imgUrl} className="logo" alt="website logo" />
          <ul className="route-container">
            <Link to="/" className="link">
              <li className={color}>Home</li>
            </Link>
            <Link to="/About" className="link">
              <li className={color}>About</li>
            </Link>
          </ul>
          <button
            className="button"
            testid="theme"
            type="button"
            onClick={onClickButton}
          >
            <img src={toggleImage} alt="theme" className="logo-l" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
