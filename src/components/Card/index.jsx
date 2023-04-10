import { Post } from './style'

export default function Card(props) {
  return (
    <Post>
      <img alt={props.alt} src={props.img} />
      <span style={props.color}>{props.name}</span>
    </Post>
  )
}
