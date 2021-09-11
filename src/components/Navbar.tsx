import { Link } from 'react-router-dom';
import menuJson from '../json/menu.json';

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        {menuJson.map((menu) => (
          <li key={menu.path}>
            <Link to={menu.path}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
