import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { HomeContextProvider } from './contexts/HomeContext';

import GlobalStyles from './styles/global';

function App(): JSX.Element {
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE}>
      <GlobalStyles />
      <HomeContextProvider>
        <AuthContextProvider>
          <ModalContextProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/:id" component={Room} />
            </Switch>
          </ModalContextProvider>
        </AuthContextProvider>
      </HomeContextProvider>
    </BrowserRouter>
  );
}

export default App;
