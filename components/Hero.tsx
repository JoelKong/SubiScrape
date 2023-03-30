import { Container } from "@mui/system";
import classes from "./hero.module.css";

function Hero(): JSX.Element {
  return (
    <Container maxWidth="lg">
      <section className={classes.section}>
        <div className={classes.brand}>
          <span className={classes.brandname}>ScrapeGPT</span>
        </div>
        <div>
          <p className={classes.brandtext}>
            Simplifying website information
            <br />
            into short summaries
          </p>
        </div>
      </section>
    </Container>
  );
}

export default Hero;
