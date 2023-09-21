import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {Cookies} from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <ul className="nav-content">
        <li className="website-logo-container">
          <Link to="/" className="nav-link">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
              alt="website logo"
            />
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/" className="nav-link">
            <h1 className="nav-heading">Home</h1>
            <AiFillHome className="nav-icon" />
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/jobs" className="nav-link">
            <h1 className="nav-heading">Jobs</h1>
            <BsBriefcaseFill className="nav-icon" />
          </Link>
        </li>

        <li className="nav-button">
          <FiLogOut className="nav-icon" onClick={onClickLogout} />
          <button className="logout-btn" type="button" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
