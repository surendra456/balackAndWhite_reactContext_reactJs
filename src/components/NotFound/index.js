// Write your code here

// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const classNam = isDarkTheme
        ? 'home-container'
        : 'home-container background'
      const mainHead = isDarkTheme ? 'h-head ' : 'h-head color-h'
      const mainp = isDarkTheme ? 'n-p' : 'n-p color-h'

      return (
        <>
          <Navbar />
          <div className={classNam}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="img"
            />
            <h1 className={mainHead}>Lost Your way?</h1>
            <p className={mainp}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
