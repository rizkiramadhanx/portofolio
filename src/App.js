import "./App.css";
import Content from "./Components/Content";
import Exprience from "./Components/Exprerience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Header />
      <hr className="border-1" />
      <Main />
      <hr className="border-1" />
      <Content />
      <hr className="border-1" />
      <Exprience />
      <hr className="border-1" />
      <Footer />
    </div>
  );
}

export default App;
