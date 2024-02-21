import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from './components/ContactList/ContactList.jsx';
import Section from './components/Section/Section.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import PhoneTitle from './components/PhoneTitle/PhoneTitle.jsx';
import ContactCounter from './components/ContactCounter/ContactCounter.jsx';
import Notification from './components/Notification/Notification.jsx';
// import { getContact } from './redux/selectors.js';
import { fetchContacts } from './redux/operations.js';

export const App = () => {
  // const contacts = useSelector(fetchContacts);
  // const contactExict = contacts.contacts.length;
  const dispatch = useDispatch();
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
        {/* {contactExict > 0 ? (
          <ContactCounter />
        ) : (
          <Notification message="There is no added contacts"></Notification>
        )} */}

        <ContactList />
      </Section>
    </>
  );
};
