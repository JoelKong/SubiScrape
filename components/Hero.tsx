import { Container } from "@mui/system";
import classes from "./hero.module.css";

function Hero() {
  return (
    <Container maxWidth="lg">
      <main className={classes.section}>
        <div className={classes.brand}>
          <span className={classes.brandname}>ScrapeGPT</span>
        </div>
      </main>
    </Container>
  );
}

export default Hero;
