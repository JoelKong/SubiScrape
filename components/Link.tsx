import classes from "./link.module.css";

function Link(): JSX.Element {
  return (
    <section className={classes.section}>
      <p>Input the link that you wish to summarise information from.</p>
      <form>
        <input />
        <button></button>
      </form>
    </section>
  );
}

export default Link;
