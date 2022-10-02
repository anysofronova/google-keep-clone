import { useContext } from "react";
import { MainContext } from "../context/mainProvider";
import { Container } from "../components/Container/Container";
import { INote } from "../@types/INote";

export const DeleteNotes = () => {
  const { deleteNotes, setDeleteNotes, setNotes } = useContext(MainContext);
  const restoreNote = (deleteNote: INote) => {
    setDeleteNotes(deleteNotes.filter((data) => data.id !== deleteNote.id));
    setNotes((prevArr) => [deleteNote, ...prevArr]);
  };
  const removeNote = (deleteNote: INote) =>
    setDeleteNotes(deleteNotes.filter((data) => data.id !== deleteNote.id));
  return (
    <Container
      type={"trash"}
      notes={deleteNotes}
      deleteFunc={removeNote}
      archiveFunc={restoreNote}
    />
  );
};
