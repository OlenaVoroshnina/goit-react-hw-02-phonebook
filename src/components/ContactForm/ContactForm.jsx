import React, { Component } from 'react';
import { Form } from './ContactForm.styled';

class ContactForm extends Component{
    state = {
      name: '',
      number: '',
    }
  
    handleChange = e => {
      const { name, value } = e.currentTarget;
      this.setState({
        [name]: value,
      });
    } 
    
    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.onSubmit(this.state );
      this.reset();
    }
  
    reset = () => {
    this.setState({name: '', number: ''})
    }

     
    render() {
        return (
            
        <Form onSubmit={this.handleSubmit}>
          
          <label htmlFor="name">Name</label>
            <input
            id = 'name'
            type="text"
            value={this.state.name}
            onChange = {this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <input
            id="number"
            value={this.state.number}
            onChange = {this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contact</button>        
        </Form>
       
        )
    }
}

export default ContactForm 
