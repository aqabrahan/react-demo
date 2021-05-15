import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './screens/Home';
import Detail from './screens/Detail';


const customTheme = createMuiTheme({
  palette: {
    background: {
      default: "#cecece"
    }
  }
});
const App = () => (
  <div>
    <Router>
      <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MuiThemeProvider>
    </Router>
  </div>
);

export default App;

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
