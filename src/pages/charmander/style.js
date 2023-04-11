import styled from 'styled-components'
import { fire, electr } from '../../utils/color'
export const Main = styled.div`
  background: linear-gradient(0deg, ${fire}, ${electr});
  height: 100vh;
`
export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  text-shadow: 0 0 0.125rem black;
`
