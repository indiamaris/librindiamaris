import Grid from "@mui/material/Grid";

const NavItem = ({ icon, path }) => {
  return (
    <Grid size={1}>
      <a href={path}> {icon}</a>
    </Grid>
  );
};
export default NavItem;
