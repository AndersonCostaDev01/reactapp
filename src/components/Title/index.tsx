import { Title as TituloEstilo } from "./styles"

export type props = {
  children: string
  fontSize?: number
}

const Title = (props: props) => <TituloEstilo fontSize={props.fontSize}>{ props.children }</TituloEstilo>

export default Title
