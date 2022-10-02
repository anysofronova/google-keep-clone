import { useContext } from "react";
import { MainContext } from "../context/mainProvider";
import { Container } from "../components/Container/Container";
import { INote } from "../@types/INote";

export const Home = () => {
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(MainContext);
  const archiveNote = (note: INote) => {
    setNotes(notes.filter((data) => data.id !== note.id));
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };
  const deleteNote = (note: INote) => {
    setNotes(notes.filter((data) => data.id !== note.id));
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };
  return (
    <Container
      type={"home"}
      notes={notes}
      archiveFunc={archiveNote}
      deleteFunc={deleteNote}
    />
  );
};
