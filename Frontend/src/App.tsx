import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ItemsProvider } from "./contexts/ItemContext/ItemsProvider";
import "./i18n";
import Routes from "./Routes";
import ErrorHandler from "./utils/error/errorBaoundary";

function App() {
  return (
    <CookiesProvider>
      <ItemsProvider>
        <BrowserRouter>
          <ErrorHandler>
            <Routes />
          </ErrorHandler>
        </BrowserRouter>
      </ItemsProvider>
    </CookiesProvider>
  );
}

export default App;
