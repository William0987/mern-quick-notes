import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function create(newNote) {
    return sendRequest(BASE_URL, 'POST', newNote);
}

export function getAll() {
    return sendRequest(BASE_URL);
}
