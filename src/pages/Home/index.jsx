import {Container, TextContent, Title, TitleHighlight} from "./styles";
import {useNavigate} from "react-router-dom";
import {Button} from "../../components/Button";
import bannerImage from "../../assets/banner.png";
import {Header} from "../../components/Header";
function Home(){
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/Login');
    }
    return(
        <>
            <Header/>
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente <br/>
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secundary" onClick={handleClickSignIn}/>
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal do site."/>
                </div>
            </Container>
        </>
    );
}

export default Home;