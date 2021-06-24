import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { AuthContextProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE}>
      <AuthContextProvider>
        <ModalContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
          </Switch>
        </ModalContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
