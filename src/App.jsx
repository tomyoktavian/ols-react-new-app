import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/config';
import Layouts from './layouts';
import router from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layouts>
        <Router>
          <Switch>
            <Suspense fallback={null}>
              {router.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Suspense>
          </Switch>
        </Router>
      </Layouts>
    </ThemeProvider>
  );
}

export default App;
