import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect } from "react";
import { useState } from "react";
import challenges from '../../challenges.json'
import {LevelUpModal} from '../componentes/LevelUpModal'


interface Challenge {
    type: 'body '| 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
    levelUp: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

interface ChallengesProviderProps{
    children: ReactNode;
    level: number,
    currentExperience: number,
    challengesCompleted: number
}

export const ChallengesContext = createContext({}as ChallengesContextData);

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallange] = useState(null);

    const experienceToNextLevel = Math.pow((level+1)*4, 2);
    const [isLevelUpModalOpen, setisLevelUpModalOpen] = useState(false);

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesComplete', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted])


    function closeLevelUpModal(){
        setisLevelUpModalOpen(false);
    }

    function levelUp (){
    setLevel(level+1);
    setisLevelUpModalOpen(true);
    new Audio('/passed.mp3').play();
    }
   
    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallange(challenge);
    
        new Audio('notification.mp3').play();

        if(Notification.permission == 'granted'){
            new Notification('Novo desafio!', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    
    }

    function resetChallenge(){
        setActiveChallange(null);
    }

    function completeChallenge(){
       if( !activeChallenge){
           return ;
       }

       const {amount} = activeChallenge;

       let finalExperience = currentExperience + amount;
       if(finalExperience >= experienceToNextLevel){
           finalExperience = finalExperience - experienceToNextLevel;
           levelUp();
       }

       setCurrentExperience(finalExperience);
       setActiveChallange(null);
       setChallengesCompleted(challengesCompleted+1);
    }

    return(
        <ChallengesContext.Provider value={{
        level,
        currentExperience,completeChallenge,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
        resetChallenge,
        startNewChallenge,
        levelUp,
        closeLevelUpModal}}>
            {children}
            {isLevelUpModalOpen && <LevelUpModal/>}
        </ChallengesContext.Provider>
    );
}