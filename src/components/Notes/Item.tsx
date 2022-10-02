import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  RestoreFromTrashOutlined as Restore,
  UnarchiveOutlined as Unarchive,
} from "@mui/icons-material";
import { FC } from "react";
import { styled } from "@mui/material/styles";
import { IItem } from "../../@types/IItem";

const StyledCard = styled(Card)`
  width: 240px;
  border-radius: 8px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: none;
`;
export const Item: FC<IItem> = ({ note, type, archiveFunc, deleteFunc }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        {type === "home" && (
          <>
            <Archive
              fontSize="small"
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick={() => archiveFunc(note)}
            />
            <Delete
              fontSize="small"
              onClick={() => deleteFunc(note)}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
        {type === "archive" && (
          <>
            <Unarchive
              fontSize="small"
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick={() => archiveFunc(note)}
            />
            <Delete
              fontSize="small"
              onClick={() => deleteFunc(note)}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
        {type === "trash" && (
          <>
            <Delete
              fontSize="small"
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick={() => deleteFunc(note)}
            />
            <Restore
              fontSize="small"
              onClick={() => archiveFunc(note)}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </CardActions>
    </StyledCard>
  );
};
