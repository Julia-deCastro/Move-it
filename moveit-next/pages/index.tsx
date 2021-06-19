import Head from "next/head";
import { ExperienceBar } from "../src/componentes/ExperienceBar";
import { Porfile } from "../src/componentes/Porfile"
import styles from "../src/styles/pages/Home.module.css";
import { CompleteChallanges } from "../src/componentes/CompleteChallanges";
import { Countdown } from "../src/componentes/Countdown";
import { ChallengeBox } from "../src/componentes/ChallengeBox";
import {CountdownProvider} from "../src/contexts/CountdownContext"
import { getServers } from "dns";
import { GetServerSideProps } from "next";
import {ChallengesProvider} from "../src/contexts/ChallengesContext"

interface HomeProps {
    level: number,
    currentExperience: number,
    challangesCompeted: number;
}

export default function Home(props) {
  return (
    <ChallengesProvider level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
    <div className={styles.container}>
    <ExperienceBar/>
    <Head>
      <title>Início | move.it</title>
    </Head>

    <CountdownProvider>
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
    </CountdownProvider>
  </div>
  </ChallengesProvider> 
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  
  return{
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}