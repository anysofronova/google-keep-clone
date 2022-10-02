import { INote } from "./INote";

export interface IContainer {
  type: "trash" | "home" | "archive";
  notes: INote[];
  archiveFunc: (note: INote) => void;
  deleteFunc: (note: INote) => void;
}
