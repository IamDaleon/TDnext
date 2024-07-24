import Image from "next/image";
// import styles from "./page.module.css";
import 'bulma/css/bulma.min.css';
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Locations from "./components/Locations";
import MoreInfo from "./components/MoreInfo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cards />
      <Locations />
      <MoreInfo />
    </main>
  );
}
