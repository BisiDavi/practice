import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import menuJson from '@json/menu.json';
import displayComponents from '@utils/displayComponents';

export default function Navigation(): JSX.Element {
  return (
    <Router>
      <Switch>
        {menuJson.map((menu) => (
          <Route key={menu.path} path={menu.path}>
            {displayComponents(menu.component)}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
