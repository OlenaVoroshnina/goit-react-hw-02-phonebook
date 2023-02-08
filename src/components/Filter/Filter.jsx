import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({value, onChange }) => (
    <>
        <label htmlFor="filter">Find contacts by name</label>
        <input id='filter' type="text" value={value} onChange = {onChange} />
    </>
    
);

export default Filter;

Filter.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};