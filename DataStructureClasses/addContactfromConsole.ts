import PromptSync from "prompt-sync";
import PhoneBook from "./AddContactUsingObject";
const prompt =PromptSync();
function main(): void {
    const phoneBook = new PhoneBook();
    while (true) {
        console.log("\nChoose operation:");
        console.log("1. Add Contact to phoneBook");
        console.log("2. Update Contact from Phonebook");
        console.log("3. Delete Contact from PhoneBook");
        console.log("4. Display Contacts from Phonebook");
        console.log("5. Exit");
        const choice = prompt("Enter your choice: ");

        switch (choice) {
            
            case "1":
                const nameToAdd = prompt("Enter contact name: ");
                const phoneNumberToAdd = prompt("Enter phone number: ");
                const alterNatePhoneNumberToAdd = prompt("Enter email (optional): ");
                phoneBook.addContact(nameToAdd, phoneNumberToAdd, alterNatePhoneNumberToAdd);
                break;
            case "2":
                const nameToUpdate = prompt("Enter contact name to update: ");
                const newPhoneNumber = prompt("Enter new phone number: ");
                const alterNatenewPhoneNumberToAdd = prompt("Enter new email (optional): ");
                phoneBook.updateContact(nameToUpdate, newPhoneNumber, alterNatenewPhoneNumberToAdd);
                break;
            case "3":
                const nameToDelete = prompt("Enter contact name to delete: ") ?? '';
                phoneBook.deleteContact(nameToDelete);
                break;
            case "4":
                phoneBook.displayContact();
                break;
            case "5":
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}
main();