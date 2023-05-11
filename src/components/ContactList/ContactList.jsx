import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  const filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterContacts(contacts, filter);
  const dispatch = useDispatch();

  return (
    <ul className={s.wrapper}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
