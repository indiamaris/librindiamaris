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
import RoofingIcon from "@mui/icons-material/Roofing";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import Grid from "@mui/material/Grid";
import NavItem from "./nav-item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
const Navbar: () => React.JSX.Elemen = (): Element => {
  const handleClick: void = console.log("clicked");
  const paths = [
    {
      path: "home",
      icon: <CottageOutlinedIcon fontSize="large" />,
    },
    {
      path: "books",
      icon: <BookmarkBorderIcon fontSize="large" />,
    },
    {
      path: "favorites",
      icon: <FavoriteBorderOutlinedIcon fontSize="large" />,
    },
    {
      path: "tips",
      icon: <TipsAndUpdatesOutlinedIcon fontSize="large" />,
    },
    {
      path: "quotes",
      icon: <FormatQuoteOutlinedIcon fontSize="large" />,
    },
  ];

  const footerMenu = [
    {
      path: "settings",
      icon: <SettingsIcon fontSize="large" />,
    },
    {
      path: "logout",
      icon: <PowerSettingsNewIcon fontSize="large" />,
    },
    {
      path: "theme",
      icon: <LightModeIcon fontSize="large" />,
    },
  ];
  return (
    <Grid
      data-testid="composition-menu"
      gap={5}
      sx={{
        height: "auto",
        width: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {paths.map((path) => (
        <NavItem key={path.path} icon={path.icon} path={path.path} />
      ))}
    </Grid>
  );
};
export default Navbar;
