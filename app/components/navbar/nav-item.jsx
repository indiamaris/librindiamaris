import Grid from "@mui/material/Grid";

const NavItem = ({ icon, path }) => {
  return (
    <Grid size={2}>
      <a href={path} className={"navbar"}>
        {" "}
        {icon}
      </a>
    </Grid>
  );
};
export default NavItem;
