import GithubIcon from "./GithubIcon"

function Github() {
  return (
    <a
      className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
      href="https://github.com/JoelKong/SubiScrape"
      target="_blank"
    >
      <GithubIcon />
      <p>Star on GitHub</p>
    </a>
  )
}

export default Github
