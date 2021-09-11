import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import menuJson from './json/menu.json';
import displayComponents from './utils/displayComponents';

export default function Navigation(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <Switch>
        {menuJson.map((menu) => (
          <Route exact={menu.exact} key={menu.path} path={menu.path}>
            {displayComponents(menu.component)}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
