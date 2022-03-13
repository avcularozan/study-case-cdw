import './index.css'
import close from '../../assets/icons/close.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import youtube from '../../assets/icons/youtube.svg'

const Menu = ({ closeMenu }) => {
  return (
    <div className="menu-container menu">
      <div>
        <div style={{ paddingRight: '5em' }}>
          <img className="close-icon" src={close} onClick={closeMenu} />
        </div>
        <div className='item-container'>
          <div className="menu-items">
            <p>Home</p>
            <p>About Us</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
          <div className="social">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={youtube} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
