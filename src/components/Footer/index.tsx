import facebook from './assets/facebook.png'
import google from './assets/google.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'
import { FooterStyled, ListStyled, ItemStyled, DivStyled } from './styles'


export default function Footer() {
    return (
        <FooterStyled>
            <DivStyled>
                <ListStyled>
                    <ItemStyled>
                        <a href='/#'><img src={facebook} alt='Logo do Facebook'></img></a>
                    </ItemStyled>
                    <ItemStyled>
                        <a href='/#'><img src={google} alt='Logo do Facebook'></img></a>
                    </ItemStyled>
                    <ItemStyled>
                        <a href='/#'><img src={instagram} alt='Logo do Facebook'></img></a>
                    </ItemStyled>
                    <ItemStyled>
                        <a href='/#'><img src={whatsapp} alt='Logo do Facebook'></img></a>
                    </ItemStyled>
                </ListStyled>
                <p> Desenvolvido por Guilbert </p>
            </DivStyled>
        </FooterStyled>
    )
}