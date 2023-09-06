export default function NoteElements({ note, date }) {
    return (
        <div>
            <p>{note}</p>
            <p>{new Date(date).toLocaleString()}</p>
        </div>
    );
};