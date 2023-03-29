import classes from "./link.module.css";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

function Link(): JSX.Element {
  const [inputLink, setInputLink] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function submitLink(e: React.FormEvent) {
    e.preventDefault();
    if (error) setError(false);

    if (!inputLink) {
      setError(true);
      return;
    }

    const summariseLink = await fetch("/api/summarise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputLink),
    });
  }

  return (
    <section className={classes.section}>
      <p>Input the link that you wish to summarise information from.</p>
      <form className={classes.form} onSubmit={submitLink}>
        <TextField
          error={error}
          onChange={(e) => setInputLink(e.target.value)}
          value={inputLink}
          id="outlined-basic"
          label="Link"
          variant="outlined"
          placeholder="E.g. medium.com"
          size="small"
          helperText={error && "Please input a link"}
          fullWidth
        />

        <LoadingButton
          onClick={submitLink}
          className={classes.button}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          {loading ? (
            <span className={classes.buttonspan}>Loading</span>
          ) : (
            <span>Go</span>
          )}
        </LoadingButton>
      </form>
    </section>
  );
}

export default Link;
