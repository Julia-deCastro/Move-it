import Head from "next/head";
import { ExperienceBar } from "../src/componentes/ExperienceBar";
import { Porfile } from "../src/componentes/Porfile"
import styles from "../src/styles/pages/Home.module.css";
import { CompleteChallanges } from "../src/componentes/CompleteChallanges";
import { Countdown } from "../src/componentes/Countdown";
import { ChallengeBox } from "../src/componentes/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
    <ExperienceBar/>
    <Head>
      <title>Início | move.it</title>
    </Head>
    <section>
      <div>
        <Porfile/>
        <CompleteChallanges/>
        <Countdown/>
      </div>


      <div>
        <ChallengeBox/>

      </div>
    </section>
  </div>
  );
}
