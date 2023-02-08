import React from 'react';
import PropTypes from 'prop-types';

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

ContactItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }),
    onDeleteContact: PropTypes.func.isRequired,
};