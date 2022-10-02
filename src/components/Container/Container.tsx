import { Box, Grid } from "@mui/material";
import { FC, useContext } from "react";
import { IContainer } from "../../@types/IContainer";
import { styled } from "@mui/material/styles";
import { EmptyNotes } from "../Notes/EmptyNotes";
import Form from "../Notes/Form";
import { Item } from "../Notes/Item";
import { MainContext } from "../../context/mainProvider";
import { INote } from "../../@types/INote";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export const Container: FC<IContainer> = ({
  type,
  notes,
  deleteFunc,
  archiveFunc,
}) => {
  const { search } = useContext(MainContext);
  const searchNotes: INote[] = search
    ? notes.filter(
        (note) =>
          note.text.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
          note.heading.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    : [];
  const notesList: INote[] = search ? searchNotes : notes;
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {type === "home" && <Form />}
        {notesList.length === 0 && (
          <EmptyNotes
            title={
              type === "archive"
                ? "Здесь будут храниться архивированные заметки."
                : type === "trash"
                ? "В корзине ничего нет."
                : "Здесь будут ваши заметки."
            }
          />
        )}
        <Grid container>
          {notesList.map((note) => (
            <Grid item key={note.id}>
              {type === "trash" && (
                <Item
                  type={"trash"}
                  note={note}
                  deleteFunc={deleteFunc}
                  archiveFunc={archiveFunc}
                />
              )}
              {type === "archive" && (
                <Item
                  note={note}
                  deleteFunc={deleteFunc}
                  archiveFunc={archiveFunc}
                  type={"archive"}
                />
              )}
              {type === "home" && (
                <Item
                  note={note}
                  deleteFunc={deleteFunc}
                  archiveFunc={archiveFunc}
                  type={"home"}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
