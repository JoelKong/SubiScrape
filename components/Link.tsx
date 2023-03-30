import classes from "./link.module.css";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import Result from "./Result";

function Link(): JSX.Element {
  const [inputLink, setInputLink] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [result, setResult] = useState<String>("");
  const [errorText, setErrortext] = useState<String>("");

  async function submitLink(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    if (error) {
      setError(false);
      setErrortext("");
    }

    if (!inputLink) {
      setError(true);
      setErrortext("Please input a link.");
      setLoading(false);
      return;
    }

    const responseSummarise = await fetch("/api/summarise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputLink }),
    });

    const { mainContent, result } = await responseSummarise.json();

    if (result) {
      setErrortext(result);
      setError(true);
      setLoading(false);
      return;
    }

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mainContent }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      setLoading(false);
      return;
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    setResult("");

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue: any = decoder.decode(value);
      setResult((prev) => prev + chunkValue);
    }

    setLoading(false);
  }

  return (
    <>
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
            helperText={error && errorText}
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
      {result && <Result result={result} />}
    </>
  );
}

export default Link;
