export class Contact{
    name='';
    lastname = '';
    email = '';
    inline = false;

    constructor(name, lastname, email, inline){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.inline = inline;
    }
}