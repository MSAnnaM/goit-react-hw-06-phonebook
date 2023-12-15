import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contact_item}>
          <span className={styles.contact_name}>{contact.name}:</span>
          <span>{contact.number}</span>
          <button
            onClick={() => dispatch(deleteContact(contact.id))}
            className={styles.delete_btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};