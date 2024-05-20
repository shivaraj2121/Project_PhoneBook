
export class ContactNotFoundError extends Error {
    constructor(name: string) {
        super(`Contact '${name}' not found.`);
        this.name = "ContactNotFoundError";
    }
}
export class ContactAlreadyExistsError extends Error {
    constructor(name: string) {
        super(`Contact '${name}' already exists.`);
        this.name = "ContactAlreadyExistsError";
    }
}
 export class InvalidContactDataError extends Error {
    constructor(message: string) {
        super(`Invalid contact data: ${message}`);
        this.name = "InvalidContactDataError";
    }
}
export default {
    ContactNotFoundError,
    ContactAlreadyExistsError,
    InvalidContactDataError
};
