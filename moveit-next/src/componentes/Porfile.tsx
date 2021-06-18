import { useContext } from "react";
import styles from "../styles/components/Porfile.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Porfile(){
    const {level} = useContext (ChallengesContext);

    return(
        <div className={styles.porfileContainer}>
            <img src="https://pfpmaker.com/_nuxt/img/profile-5-1.1d185ab.png" alt="Júlia de Castro"/>
        <div>
            <strong>Júlia de Castro</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
        </div>
        
        
        </div>
    );
}