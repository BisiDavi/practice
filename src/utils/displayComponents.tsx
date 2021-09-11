import Home from '../pages/Home';
import CreateAddressBook from '../pages/CreateAddressBook';
import EditAddressBook from '../pages/EditAddressBook';
import DeleteAddressBook from '../pages/DeleteAddressBook';

export default function displayComponents(
  component: string,
): JSX.Element | null {
  switch (component) {
    case 'Home':
      return <Home />;
    case 'CreateAddressBook':
      return <CreateAddressBook />;
    case 'EditAddressBook':
      return <EditAddressBook />;
    case 'DeleteAddressBook':
      return <DeleteAddressBook />;
    default:
      return null;
  }
}
