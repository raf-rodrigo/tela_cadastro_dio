import {Header} from "../../components/Header";
import {Container, ContainerInput, CriarConta, Text, Title, Button, TextClicar, TextConta} from "./styles";
import {MdLock, MdMail} from "react-icons/md";
import Input from "../../components/Input";
import {FaUser} from "react-icons/fa";

function Cadastro(){
    return(
        <>
            <Header/>
            <Container>
                <div>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </div>
                <div>
                    <ContainerInput>
                        <form>
                            <Text>Comece agora grátis</Text>
                            <CriarConta>Crie sua conta e make the change._</CriarConta>
                            <Input placeholder="Nome Completo" leftIcon={<FaUser/>} name="nome completo"/>
                            <Input placeholder="E-mail" leftIcon={<MdMail/>} name="email"/>
                            <Input placeholder="password" leftIcon={<MdLock/>} name="Password"/>
                            <Button>Criar minha conta</Button>
                        </form>
                        <TextClicar>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextClicar>
                        <TextConta>Já tenho conta.<span> Fazer login</span></TextConta>
                    </ContainerInput>
                </div>
            </Container>
        </>
    );
}

export default Cadastro;