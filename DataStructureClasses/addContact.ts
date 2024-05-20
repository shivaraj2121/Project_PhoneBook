import {ContactNotFoundError,ContactAlreadyExistsError,InvalidContactDataError} from "./error";
export default class PhoneBook {
    contacts: any[];
    constructor() {
        this.contacts = [];
    }
    addContact(name: string, phoneNumber: any ,alterPhonenumber:any) {
        try{
            this.contacts.push({ name, phoneNumber ,alterPhonenumber});
            console.log(`Contact "${name}" added successfully.`);
        }catch(error){
            throw new ContactAlreadyExistsError(error.message)
        }
    }
    updateContact(name: string, newPhoneNumber: string, alterNatenewPhoneNumberToAdd: string) {
        try{
        const contact = this.findContact(name);
        if (contact) {
            contact.phoneNumber = newPhoneNumber;
            console.log(`Contact "${name}" updated successfully.`);
        }if(contact)
            {
                contact.alterPhoneNumber=alterNatenewPhoneNumberToAdd;
                console.log(`cotnact "${name}" updated successfully`)
            }
       }catch(error){
            throw new ContactNotFoundError(error.message)
       }
    }
    deleteContact(name: string) {
        try{
        
        const index = this.contacts.findIndex((contact: { name: any; }) => contact.name === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact "${name}" deleted successfully.`);
        } 
       }catch(error){
            throw new InvalidContactDataError(error.message) 
       }
    }
    displayContacts() {
        try{
            console.log("Contacts:");
            this.contacts.forEach((contact: { name: any; phoneNumber: any; alterPhoneNumber:any}) => {
            console.log(`${contact.name}: ${contact.phoneNumber}:${contact.alterPhoneNumber}`);
        });
        }catch(error){
            throw new ContactNotFoundError(error.message)

      }
    }
    findContact(name: any) {
            return this.contacts.find((contact: { name: any; }) => contact.name === name);
    }
}