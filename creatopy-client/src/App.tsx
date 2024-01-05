import { StyledApp } from "./components/styles/App.styled";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <StyledApp className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </StyledApp>
  );
}

export default App;
