import { Inter } from "next/font/google";
import Github from "../../components/Github";
import Hero from "../../components/Hero";
import { Container } from "@mui/system";
import Link from "../../components/Link";

const inter = Inter({ subsets: ["latin"] });
//inter.className

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <main className="section">
          <Github />
          <Hero />
          <Link />
        </main>
      </Container>
    </>
  );
}
