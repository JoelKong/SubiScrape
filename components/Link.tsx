import classes from "./link.module.css";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

function Link(): JSX.Element {
  const [inputLink, setInputLink] = useState<String>("");

  return (
    <section className={classes.section}>
      <p>Input the link that you wish to summarise information from.</p>
      <form className={classes.form}>
        <TextField
          onChange={(e) => setInputLink(e.target.value)}
          value={inputLink}
          id="outlined-basic"
          label="Link"
          variant="outlined"
          placeholder="E.g. medium.com"
          size="small"
          fullWidth
        />

        <LoadingButton
          className={classes.button}
          // onClick={handleClick}
          endIcon={<SendIcon />}
          // loading
          // ={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Go</span>
        </LoadingButton>
      </form>
    </section>
  );
}

export default Link;
