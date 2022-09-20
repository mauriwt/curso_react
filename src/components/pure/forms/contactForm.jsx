import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');

    const addContact = (e) => {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }
    return (
        <form onSubmit={addContact} className='d-flex justify-content-center aling-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input placeholder='Name' ref={nameRef} id='inputName' type='text' className='form-control form-control-sm' required autoFocus ></input>
                <input placeholder='Lastname' ref={lastnameRef} id='inputDescription' type='text' className='form-control form-control-sm' required ></input>
                <input placeholder='Email' ref={emailRef} id='inputEmail' type='text' className='form-control form-control-sm' required ></input>
                <button type='submit' className='btn btn-success btn-sm' >Add Contact</button>
            </div>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
