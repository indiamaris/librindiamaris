import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SearchIcon from "@mui/icons-material/Search";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Grid from "@mui/material/Grid";
import NavItem from "./nav-item";

const Navbar: () => React.JSX.Elemen = (): Element => {
  const handleClick: void = console.log("clicked");
  const paths = [
    {
      path: "home",
      icon: <HomeFilledIcon />,
    },
    {
      path: "books",
      icon: <LocalLibraryIcon />,
    },
    {
      path: "favorites",
      icon: <FavoriteIcon />,
    },
    {
      path: "settings",
      icon: <SettingsIcon />,
    },
    {
      path: "logout",
      icon: <PowerSettingsNewIcon />,
    },
  ];
  return (
    <Grid
      data-testid="composition-menu"
      container
      spacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      columns={1}
    >
      {paths.map((path) => (
        <NavItem key={path.path} icon={path.icon} path={path.path} />
      ))}
    </Grid>
  );
};
export default Navbar;
