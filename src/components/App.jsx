import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";

import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleFormSubmit = e => {
    const id = nanoid(4);
    const name = e.name;
    const number = e.number;

    const contactsLists = [...this.state.contacts];
    
    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ id, name, number});
    }

    this.setState({ contacts: contactsLists });
  }


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== contactId),
    }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { filter} = this.state;
    const visibleContactsList = this.getVisibleContacts();
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.handleFormSubmit} />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        
        {this.state.contacts !== [] ?
          <ContactList contacts={visibleContactsList} onDeleteContact={this.deleteContact} /> : null}
        
        
      </div>
    );
  }
};
