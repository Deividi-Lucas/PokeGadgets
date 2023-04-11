import { NavBar, Titulo } from './style'

export default function Header({ title }) {
  return (
    <NavBar>
      <Titulo>{title}</Titulo>
    </NavBar>
  )
}
