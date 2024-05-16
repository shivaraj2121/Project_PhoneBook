import PromptSync from "prompt-sync";
import PhoneBook from "./addContact";
const prompt =PromptSync();
function main(): void {
    const phoneBook = new PhoneBook();
    while (true) {
        console.log("\nChoose operation:");
        console.log("1. Add Contact");
        console.log("2. Update Contact");
        console.log("3. Delete Contact");
        console.log("4. Display Contacts");
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
                phoneBook.displayContacts();
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