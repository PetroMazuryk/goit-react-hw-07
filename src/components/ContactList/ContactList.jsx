import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectAllContacts } from '../../redux/selectors';
// import { getContact, } from '../../redux/selectors';

// import { removeContact } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectAllContacts);

  // const dispatch = useDispatch();

  // const filter = useSelector(getFilter);

  // const handleRemoveContact = contactId => dispatch(removeContact(contactId));

  // const filteredContactList = filter
  //   ? contacts.contacts.filter(item =>
  //       item.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : contacts.contacts;

  return (
    <TransitionGroup>
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={500} classNames="contact">
          <Contact contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
