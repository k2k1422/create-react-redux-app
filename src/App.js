import React from 'react';
import './App.css';
import { createBrowserHistory as createHistory } from "history"
import { ConnectedRouter } from "connected-react-router"
import { Provider } from "react-redux"
import configureStore from "./store"
import { ThemeProvider } from '@material-ui/styles'
import theme from "./theme"

import Routes from "./Routes"

const history = createHistory()
const store = configureStore(history)

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
