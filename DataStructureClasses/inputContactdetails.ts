import  promptSync from 'prompt-sync'
import PhoneBook from './addContact';
const prompt =promptSync();
const phoneBook = new PhoneBook();

while (true) {
    try {  
    console.log("n1. Add Contact\n2. Update Contact\n3. Delete Contact\n4. Display Contacts\n5. Exit");
    const choice = parseInt(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            const nameToAdd:string = prompt("Enter name: ");
            const phoneNumberToAdd:String = prompt("Enter phone number: ");
            const alterPhonenumberToAdd:String =prompt('Enter alternate phone number')
            phoneBook.addContact(nameToAdd, phoneNumberToAdd,alterPhonenumberToAdd);
            break;
        case 2:
            const nameToUpdate:string = prompt("Enter name to update: ");
            const newPhoneNumber:string = prompt("Enter new phone number: ");
            const alternewPhonenumberToAdd:string =prompt('Enter alternate phone number')
            phoneBook.updateContact(nameToUpdate, newPhoneNumber,alternewPhonenumberToAdd);
            break;
        case 3:
            const nameToDelete:string = prompt("Enter name to delete: ");
            phoneBook.deleteContact(nameToDelete);
            break;
        case 4:
            phoneBook.displayContacts();
            break;
        case 5:
            console.log("Exiting...");
        default:
            console.log("Invalid choice!");
        }
        }
    catch (error) {
             console.error("An error occurred:", error.message);
        }
 }
     