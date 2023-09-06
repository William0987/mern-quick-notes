import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function create(newNote) {
    return sendRequest(`${BASE_URL}/create`, 'POST', newNote);
}

export function getAll() {
    return sendRequest(BASE_URL);
}
