import styled from 'styled-components'

export const NavBar = styled.header`
  display: flex;
  /* position: fixed; */
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.6);
`
export const Titulo = styled.h1`
  color: magenta;
  text-shadow: 1px 3px 1rem black;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #68a090;
  }
`
