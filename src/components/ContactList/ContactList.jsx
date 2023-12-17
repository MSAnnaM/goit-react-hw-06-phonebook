import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { List, Item, ItemName, DeleteBtn } from './ContactList.styled';
import { selectContacts, selectFilter } from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  let normalizedFilter = filter ? filter.toLowerCase() : '';
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <ItemName>{contact.name}:</ItemName>
          <span>{contact.number}</span>
          <DeleteBtn onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
