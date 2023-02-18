import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Um copo de café com um frase 'Coffe Delivery'" />
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Fortaleza, CE
        </span>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
