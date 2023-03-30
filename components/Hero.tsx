import classes from "./hero.module.css"

function Hero(): JSX.Element {
  return (
    <>
      <h1 className="sm:text-6xl mt-5 text-4xl max-w-[708px] font-bold text-white">
        <span className={classes.titleGradient}>SubiScrape</span>
      </h1>
      <p className="text-slate-500 mt-5 text-lg">
        Simplifying website information into short summaries 📝
      </p>
    </>
  )
}

export default Hero
