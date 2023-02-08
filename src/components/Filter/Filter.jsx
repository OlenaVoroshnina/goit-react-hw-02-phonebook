import React from 'react';

const Filter = ({value, onChange }) => (
    <>
        <label htmlFor="filter">Find contacts by name</label>
        <input id='filter' type="text" value={value} onChange = {onChange} />
    </>
    
);

export default Filter;
