import styled, { css } from 'styled-components'

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;
  background: rgb(255, 255, 255, 0.2);
  height: 7rem;
  overflow: hidden;
  img {
    height: 6rem;
    transform: scale(70%);
    transition: 200ms;
    &:hover {
      transform: scale(100%);
    }
  }

  span {
    /* color: white; */
    text-shadow: 1px 1px 0.125rem black;
    font-weight: 700;
  }
`
