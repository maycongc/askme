import { HashRouter, Route } from 'react-router-dom';

import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';

function App() {
  return (
    <HashRouter>
      <AuthContextProvider>
        <ModalContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </ModalContextProvider>
      </AuthContextProvider>
    </HashRouter>
  );
}

export default App;
