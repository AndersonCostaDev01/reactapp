import Title from "../../components/Title";
import Paragrafo from "../../components/Paragrafo";
import { GithubSection } from "./styles";

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam vel, tempora atque illo nam, eveniet harum sint suscipit magnam blanditiis, aliquam reprehenderit consectetur dolorum deleniti culpa! Ipsam quibusdam necessitatibus minus.</Paragrafo>
    <GithubSection>
    <img src="https://github-readme-stats.vercel.app/api?username=AndersonCostaDev01&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AndersonCostaDev01&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSection>
  </section>
)

export default Sobre
