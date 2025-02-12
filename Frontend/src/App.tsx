import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ItemsProvider } from './contexts/ItemContext/ItemsProvider';
import { UserProvider } from './contexts/UserContext/UserProvider';
import "./i18n";
import Routes from "./Routes";

function App() {
  return <ItemsProvider>
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  </ItemsProvider>
}

export default App;