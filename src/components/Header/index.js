import './index.css'
import logo from '../../assets/icons/logo.svg'
import hamburger from '../../assets/icons/hamburger.svg'

const Header = ({ openMenu }) => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} />
      <img className="menu-icon" src={hamburger} onClick={openMenu} />
    </div>
  )
}

export default Header
