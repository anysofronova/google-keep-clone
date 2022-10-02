import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  EditOutlined as Edit,
  LightbulbOutlined as Light,
  NotificationsOutlined as Notification,
} from "@mui/icons-material";
import { INavListItems } from "../../@types/INavListItems";

export const NavList = ({
  toggleDrawer,
}: {
  toggleDrawer: (val: boolean) => void;
}) => {
  const navList: INavListItems[] = [
    { name: "Заметки", icon: <Light />, path: "/" },
    { name: "Напоминания", icon: <Notification />, path: "/" },
    { name: "Изменения ярлыков", icon: <Edit />, path: "/" },
    { name: "Архив", icon: <Archive />, path: "archive" },
    { name: "Корзина", icon: <Delete />, path: "delete" },
  ];

  return (
    <List style={{ paddingTop: "70px" }}>
      {navList.map((list) => (
        <ListItem key={list.name} onClick={() => toggleDrawer(false)}>
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
              cursor: "pointer",
            }}
            to={list.path}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
