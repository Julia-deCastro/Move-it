import styles from "../styles/components/Porfile.module.css";

export function Porfile(){
    return(
        <div className={styles.porfileContainer}>
            <img src="https://pfpmaker.com/_nuxt/img/profile-5-1.1d185ab.png" alt="Júlia de Castro"/>
        <div>
            <strong>Júlia de Castro</strong>
            <p>
                <img src="icons/level.jpg" alt="Level"/>
                Level 1
            </p>
        </div>
        
        
        </div>
    );
}