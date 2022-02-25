import React, { Suspense } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/config';
import Layouts from './layouts';
import router from './routes';

const Login = React.lazy(() => import('./views/public/login'));
const HomePage = React.lazy(() => import('./views/public/posts'));
const PostPage = React.lazy(() => import('./views/public/postDetail'));
const likedPosts = React.lazy(() => import('./views/public/likedPosts'));

function App(props) {
  const { isAuthenticated } = props;
  
  return (
      <ThemeProvider theme={theme}>
      <Router>
          <Layouts>
            <Switch>
            <Suspense fallback={null}>
              {router.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact === true}
                  render={props => !isAuthenticated && !route.auth ? <Redirect to={{ pathname: "/" }} /> : <route.component {...props} />}
                />
              ))}
            </Suspense>
          </Switch>
          <Switch>
            <Suspense fallback={null}>
              <Route path="/" component={HomePage} />
              <Route path="/login" component={Login} />
              <Route path="/posts/:id" component={PostPage} />
              <Route path="/liked-posts" component={likedPosts} />
            </Suspense>
          </Switch>
        </Layouts>
        </Router>
      </ThemeProvider>
  );
}


const mapStateToProps = (state) => {
  const { getAuth } = state;
  return getAuth
}

export default connect(mapStateToProps, {  })(App);
