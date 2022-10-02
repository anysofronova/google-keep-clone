import { useContext } from "react";
import { MainContext } from "../context/mainProvider";
import { Container } from "../components/Container/Container";
import { INote } from "../@types/INote";

export const Archives = () => {
  const { archiveNotes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(MainContext);
  const unArchiveNote = (archive: INote) => {
    setArchiveNotes(archiveNotes.filter((data) => data.id !== archive.id));
    setNotes((prevArr) => [archive, ...prevArr]);
  };
  const deleteNote = (archive: INote) => {
    setArchiveNotes(archiveNotes.filter((data) => data.id !== archive.id));
    setDeleteNotes((prevArr) => [archive, ...prevArr]);
  };
  return (
    <Container
      type={"archive"}
      notes={archiveNotes}
      archiveFunc={unArchiveNote}
      deleteFunc={deleteNote}
    />
  );
};
