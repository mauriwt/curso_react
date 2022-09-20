import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact, estado, remove }) => {

    useEffect(() => {
        console.log('Contact created');
        return () => {
            console.log(`Task: ${contact.name} is going to unmount`)
        };
    }, [contact]);

    const contactState = () => {

        return (<h6 className='mb-0'>
                    <span className= {contact.inline ? 'badge bg-success': 'badge bg-danger'}>
                    <i className={ contact.inline? 'bi bi-person-check':'bi bi-person-x'}></i>
                    </span>
                </h6>);
    }

    const contactIconState = () => {
        return contact.inline ? (<i onClick={() => estado(contact)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>) :
            (<i onClick={() => estado(contact)} className='bi-toggle-off task-action' style={{ color: 'red' }}></i>);
    }
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.lastname}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contactState()}
            </td>
            <td className='align-middle'>
                {contactIconState()}
                <i onClick={() => remove(contact)} className='bi-trash task-action' style={{ color: 'tomato' }}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    estado: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
