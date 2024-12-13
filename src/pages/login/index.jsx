import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, TextContent, Title, TitleHightLight } from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHightLight>
              Implemente <br />
            </TitleHightLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            
          />
        </div>
        <div>
          <Input placeholder="email"/>
        </div>
      </Container>
    </>
  );
};

export { Login };