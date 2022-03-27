import './Header.css'
import { Avatar } from '@chakra-ui/react'
import { ReactComponent as AddIcon } from '../../assets/icons/plus.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="header">
      <div className="logo">Dev Diaries</div>
      <div className="header__right">
        {!location.pathname.includes('/add-project') && (
          <button
            onClick={() => {
              navigate('/add-project')
            }}
            className="cta cta-margin"
          >
            <AddIcon /> Add
          </button>
        )}
        <Avatar name="Arpith S" />
      </div>
    </div>
  )
}

export default Header
