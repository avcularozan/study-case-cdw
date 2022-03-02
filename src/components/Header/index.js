import './index.css'
import logo from '../../assets/icons/logo.svg'
import hamburger from '../../assets/icons/hamburger.svg'

const Header = () => {
  return (
    <div className="container">
      <img className="logo" src={logo} />
      <img className="menu-icon" src={hamburger} />
    </div>
  )
}

export default Header
