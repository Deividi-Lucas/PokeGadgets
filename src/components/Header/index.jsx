import { NavBar, Titulo } from './style'

export default function Header({ title, status }) {
  return (
    <NavBar>
      <Titulo>{title}</Titulo>
    </NavBar>
  )
}
