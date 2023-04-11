import { Post } from './style'

export default function Card(props) {
  return (
    <Post>
      <img alt={props.alt} src={props.img} />
      <span>{props.name}</span>
    </Post>
  )
}
