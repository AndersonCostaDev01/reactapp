import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Title from "../../components/Title";
import { BotaoTema, Descrição, SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Anderson Costa</Title>
      <Paragrafo tipo="secundario" fontSize={16}>AndersonCostaDev01</Paragrafo>
      <Descrição tipo="principal" fontSize={12}>
        Developer Front-end
      </Descrição>
      <BotaoTema>trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar;
