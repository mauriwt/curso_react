import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';


const ContactListComponent = () => {
    const defaultContact = new Contact('Mauricio', ' Tituaña','jamertusa.m@gmail.com' ,false);
    const changeState = () => {
        console.log("Cambiar estado");
    }
    return (
        <div>
            <div> Contact state: </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};



export default ContactListComponent;
