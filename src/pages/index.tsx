import { Inter } from "next/font/google";
import Hero from "../../components/Hero";

const inter = Inter({ subsets: ["latin"] });
//inter.className

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
