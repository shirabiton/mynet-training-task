import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { ItemsProvider } from "./contexts/ItemContext/ItemsProvider";
import "./i18n";
import Routes from "./routes/Routes";
import useStyles from "./styles";
import ErrorHandler from "./utils/error/ErrorHandler";

function App() {
  useStyles();
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
