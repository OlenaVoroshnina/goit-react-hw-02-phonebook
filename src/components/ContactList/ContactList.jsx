import React from 'react'
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>{
        contacts.map(contact => {
            return (
                <ContactItem data={contact} key={contact.id} onDeleteContact={ onDeleteContact} />  
            )
        })
    }

    </ul>
)
export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        contact: PropTypes.object,
    })),
    onDeleteContact: PropTypes.func,
};