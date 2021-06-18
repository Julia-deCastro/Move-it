import { createContext, ReactNode } from "react";
import { useState } from "react";
import challenges from '../../challenges.json'

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
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({}as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallange] = useState(null);

    const experienceToNextLevel = Math.pow((level+1)*4, 2);

    function levelUp (){
    setLevel(level+1);
    }
   
    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallange(challenge);
    }

    function resetChallenge(){
        setActiveChallange(null);
    }

    return(
        <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted, experienceToNextLevel, activeChallenge, resetChallenge, startNewChallenge, levelUp}}>
            {children}
        </ChallengesContext.Provider>
    );
}