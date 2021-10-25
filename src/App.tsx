import "./styles/theme.scss";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Navigation />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
