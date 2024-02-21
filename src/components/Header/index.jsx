import {BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper} from "./styles";
import logo from "../../assets/dio.svg";
import {Button} from "../Button";

const Header = ({autenticado}) => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img  src={logo} alt="Logo da Dio" width={80}/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...'/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/80365201?v=4"/>
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button title="Entrar"/>
                            <Button title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
}

export { Header }