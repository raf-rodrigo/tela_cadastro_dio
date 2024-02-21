import {Column, Container, Title, TitleHighlight} from "./styles";
import {Card} from "../../components/Card";
import UserInfo from "../../components/UserInfo";

function Feed(){
    return(
        <>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo nome="Rafael" image="https://avatars.githubusercontent.com/u/80365201?v=4" percentual={25}></UserInfo>
                    <UserInfo nome="Rafael" image="https://avatars.githubusercontent.com/u/80365201?v=4" percentual={65}></UserInfo>
                    <UserInfo nome="Rafael" image="https://avatars.githubusercontent.com/u/80365201?v=4" percentual={98}></UserInfo>
                    <UserInfo nome="Rafael" image="https://avatars.githubusercontent.com/u/80365201?v=4" percentual={10}></UserInfo>
                    <UserInfo nome="Rafael" image="https://avatars.githubusercontent.com/u/80365201?v=4" percentual={60}></UserInfo>
                </Column>
            </Container>
        </>
    );
}

export default Feed;