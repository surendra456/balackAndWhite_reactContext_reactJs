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

      const img = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

      return (
        <>
          <Navbar />
          <div className={classNam}>
            <img src={img} alt="about" className="img" />
            <h1 className={mainHead}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
