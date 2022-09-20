import React, { useEffect, useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';
import ContactForm from '../pure/forms/contactForm';


const ContactListComponent = () => {
    const defaultContact = new Contact('Mauricio', ' Tituaña', 'jamertusa.m@gmail.com', false);
    const defaultContact1 = new Contact('Sebastian', ' Tituaña', 'stituana@gmail.com', true);
    const defaultContact2 = new Contact('Amanda', ' Pujota', 'acpujota@gmail.com', false);

    const list_contact = [];
    list_contact.push(defaultContact);
    list_contact.push(defaultContact1);
    list_contact.push(defaultContact2);

    const [contacts, setContacts] = useState(list_contact);

    useEffect(() => {
        console.log("Contact state updating");
        return () => {
            console.log("ContactList component down");
        };
    }, [contacts]);

    const stateContact = (contact) => {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].inline = !tempContacts[index].inline;
        setContacts(tempContacts);
        console.log("contact state: ", contact);
    }

    const deleteContact = (contact) => {
        const index = contacts.indexOf(contact);
        const tempTasks = [...contacts];
        tempTasks.splice(index, 1);
        setContacts(tempTasks);

        console.log("Contact is deleted: ", contact);
    }

    const addContact = (contact) => {
        const tempTasks = [...contacts];
        tempTasks.push(contact);
        setContacts(tempTasks);

        console.log("Task is add: ", contact);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5> Your contacts: </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Lastname</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>State</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (<ContactComponent
                                        key={index}
                                        contact={contact}
                                        estado={stateContact}
                                        remove={deleteContact}></ContactComponent>)
                                })}
                            </tbody>
                        </table>
                    </div>
                    <ContactForm add={addContact}></ContactForm>
                </div>

            </div>
        </div>
    );
};



export default ContactListComponent;
