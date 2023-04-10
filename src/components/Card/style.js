import styled, { css } from 'styled-components'
import { fire, water, grass } from '../../utils/color'

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;
  background: rgb(255, 255, 255, 0.2);
  img {
    height: 7rem;
    transform: scale(70%);
    transition: 200ms;
    &:hover {
      transform: scale(100%);
    }
  }

  span {
    text-shadow: 1px 3px 1rem black;
    font-weight: 700;
  }
`
