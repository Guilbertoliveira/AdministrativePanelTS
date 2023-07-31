import logo from './assets/logo.png';
import profile from './assets/perfil.png';
import { StylizedHeader, ContainerStyled, LinkStylized } from './styles';

export default function Header() {
  return (
    <StylizedHeader>
      <img src={logo} alt="logo empresa Voll"></img>
      <ContainerStyled>
        <img src={profile} alt="imagem de perfil do usuário"></img>
        <LinkStylized href="#">Sair</LinkStylized>
      </ContainerStyled>
    </StylizedHeader>
  );
}
