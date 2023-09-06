import NoteElements from "../../components/NoteElements/NoteElements";

export default function NotePage({ note }) {

  return (
    <>
      <h1>Note</h1>
      {note.length ? 
        note.map((n, idx) => {
          return (<NoteElements note={n.text} date={n.createdAt}/>);
        })
        :
        <p>No Notes Yet</p>
       }
    </>
  );
}