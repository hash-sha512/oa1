export default function newEntry(payload) {
    return ({ 'type': 'NEW_ENTRY', payload: payload });
}