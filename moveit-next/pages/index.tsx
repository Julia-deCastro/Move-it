import Head from "next/head";
import { ExperienceBar } from "../src/componentes/ExperienceBar";
import { Porfile } from "../src/componentes/Porfile"
import styles from "../src/styles/pages/Home.module.css";
import { CompleteChallanges } from "../src/componentes/ComplateChallanges";

export default function Home() {
  return (
    <div className={styles.container}>
    <ExperienceBar/>

    <section>
      <div>
        <Porfile/>
        <CompleteChallanges/>
      </div>


      <div>


      </div>
    </section>
  </div>
  );
}
