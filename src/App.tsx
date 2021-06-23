import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE}>
      <Switch>
        <AuthContextProvider>
          <ModalContextProvider>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
          </ModalContextProvider>
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
