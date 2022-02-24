import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layouts from './layouts';
import Dashboard from './views/apps/Dashboard';

function App() {
  return (
    <div className="App">
      <Layouts>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </Layouts>
    </div>
  );
}

export default App;
