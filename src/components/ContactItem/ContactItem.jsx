import React from 'react';

const ContactItem = ({ data, onDeleteContact}) => {
    const { id, name, number } = data;
    return(
    <>
        <li key={id}>{name}: {number}
        <button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
    </>
    )
}
    

export default ContactItem;