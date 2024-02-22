import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from './components/ContactList/ContactList.jsx';
import Section from './components/Section/Section.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import PhoneTitle from './components/PhoneTitle/PhoneTitle.jsx';
import ContactCounter from './components/ContactCounter/ContactCounter.jsx';
import Notification from './components/Notification/Notification.jsx';
import { fetchContacts } from './redux/operations.js';
import {
  selectAllContacts,
  selectIsLoading,
  selectError,
} from './redux/selectors.js';

export const App = () => {
  const dispatch = useDispatch();
  const contactsAll = useSelector(selectAllContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <PhoneTitle />

      <Section title="Add new contacts">
        <ContactForm />
      </Section>

      <Section title="Find contacts by name">
        <SearchBar />
      </Section>

      <Section title="Contact List">
        {contactsAll.length > 0 ? (
          <>
            <ContactCounter />
            <ContactList />
          </>
        ) : (
          <Notification message="There is no added contacts"></Notification>
        )}
      </Section>
      {isLoading && !error && <b>Request in progress...</b>}
    </>
  );
};
