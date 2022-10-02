import { Dispatch, SetStateAction } from "react";
import { INote } from "./INote";

export interface IState {
  search: string;
  notes: INote[];
  archiveNotes: INote[];
  deleteNotes: INote[];
  setSearch: Dispatch<SetStateAction<string>>;
  setNotes: Dispatch<SetStateAction<INote[]>>;
  setArchiveNotes: Dispatch<SetStateAction<INote[]>>;
  setDeleteNotes: Dispatch<SetStateAction<INote[]>>;
}
