import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps{
    currentPlayer: Player | null
    restart:()=>void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {

    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(()=>{
        startTimer()
    }, [currentPlayer])

    const startTimer = ()=>{
        if(timer.current){
            clearInterval(timer.current)
        }

        const callback = currentPlayer?.color === Colors.WHITE ? decrWhiteTimer : decrBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    const decrBlackTimer = () =>{
        setBlackTime(prev => prev - 1)
    }
    const decrWhiteTimer = () =>{
        setWhiteTime(prev => prev - 1)
    }

    const handleRestart = () =>{
        setBlackTime(300)
        setWhiteTime(300)
        restart()
    }

    return (
        <div>
            <div>
                <button onClick={handleRestart}>
                    Restart game
                </button>
                <h2>Black - {blackTime}</h2>
                <h2>White - {whiteTime}</h2>
            </div>
        </div>
    );
};

export default Timer;