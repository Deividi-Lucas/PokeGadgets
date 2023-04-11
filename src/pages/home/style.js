import styled from 'styled-components'
import { water, fire } from '../../utils/color'

export const Main = styled.div`
  background: linear-gradient(${water}, ${fire});
  height: 100vh;
  overflow-y: scroll;
`

export const Components = styled.div`
  margin: 1rem 0;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`
