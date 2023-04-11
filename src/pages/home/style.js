import styled from 'styled-components'
import { color } from '../../utils/color'

export const Main = styled.div`
  background: linear-gradient(${color.water}, ${color.fire});
  height: 100vh;
  overflow-y: scroll;
`

export const Components = styled.div`
  margin: 1rem 0;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  a {
    color: ${color.ice};
    text-decoration: none;
    border-radius: 1rem;
    height: min-content;
    &:hover {
      color: ${color.poison};
    }
  }
`
