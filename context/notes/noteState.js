import NoteContext from "./state";

function NoteState(props) {
  const state = {
    "email":"a@b.c",
    "nickname":"abc"
  };
  return (
    <NoteContext.provider value={state}>
      {props.children}
    </NoteContext.provider>
  );
}
export default NoteState;