import { P } from "./styles"

export type props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({children , tipo = 'principal', fontSize}: props) => <P tipo={tipo} fontSize={fontSize}>{ children }</P>

export default Paragrafo
