import './Header.css'
import { Avatar } from '@chakra-ui/react'
import { ReactComponent as AddIcon } from '../../assets/icons/plus.svg'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Dev Diaries</div>
      </Link>
      <div className="header__right">
        {location.pathname === '/' && (
          <button
            onClick={() => {
              navigate('/add-project')
            }}
            className="cta cta-margin"
          >
            <AddIcon /> Add
          </button>
        )}
        <Link to="/profile">
          <Avatar name="Sudhanva Kote" />
        </Link>
      </div>
    </div>
  )
}

export default Header
