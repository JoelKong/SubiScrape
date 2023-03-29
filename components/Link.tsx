import classes from "./link.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Link(): JSX.Element {
  return (
    <section className={classes.section}>
      <p>Input the link that you wish to summarise information from.</p>
      <form className={classes.textfield}>
        <TextField
          id="outlined-basic"
          label="Link"
          variant="outlined"
          placeholder="E.g. medium.com"
          fullWidth
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Go
        </Button>
      </form>
    </section>
  );
}

export default Link;
