import { useState, useEffect } from "react";
import classes from "./result.module.css";

function Result({ result }: any) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    setTimeout(() => {
      setIsDisplayed(true);
    }, 10);
  };

  useEffect(() => {
    if (isDisplayed) {
      const toRef = setTimeout(() => {
        setIsDisplayed(false);
        clearTimeout(toRef);
      }, 2000);
    }
  }, [isDisplayed]);

  return (
    <div
      onClick={copy}
      className="shadow-lg rounded-lg transform active:scale-105 transition-transform  cursor-pointer max-w-3xl w-full p-12 border-4 border-slate-800 mt-6"
    >
      {isDisplayed && (
        <p className="text-green-700 text-extrabold pb-2 text-center">
          COPIED! ✍️
        </p>
      )}
      <div className={classes.result}>{result}</div>
      <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-85"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
      </span>
    </div>
  );
}

export default Result;
