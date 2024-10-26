import styled from "styled-components"

type BotaoPromps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button <BotaoPromps> `
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(porps) => porps.fontSize || '16px'};
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

const Test = () => {
  return (
    <div>
      <Botao fontSize="28px" principal>Clique aqui</Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo as="a" href="#" principal fontSize="50px">
        <span>
          Não clique aqui
        </span>
      </BotaoPerigo>
    </div>
  )
}

export default Test
