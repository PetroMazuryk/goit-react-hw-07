import { FaUserAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.contactWrapper}>
      <div>
        <p>
          <FaUserAlt className={css.icon} size="18" />
          {contact.name}
        </p>
        <p>
          <FaPhone className={css.icon} size="18" />
          {contact.number}
        </p>
      </div>
      <button onClick={() => onDelete(contact.id)} className={css.button}>
        Delete
      </button>
    </div>
  );
}
