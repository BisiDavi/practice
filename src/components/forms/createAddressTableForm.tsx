import Button from 'components/Button';
import createAddressTableJson from 'json/createAddressTable.json';

export default function CreateAddressTableForm(): JSX.Element {
  return (
    <div>
      <form>
        {createAddressTableJson.map((item) => (
          <input key={item.name} />
        ))}
        <Button title="submit" />
      </form>
    </div>
  );
}
