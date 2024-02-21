import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import {GlobalStyle} from "./styles/GlobalStyle";
import Cadastro from "./pages/Cadastro";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes >
        </Router>
    );
}

export default App;
