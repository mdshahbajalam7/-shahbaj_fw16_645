import React, { useState } from "react"
import styles from "./Tic.module.css"
import Squers from "./Squers";
import { End } from "./End";


const INITIAL = "";
const X_players="x";
const o_players="o"
const wincobination=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
export const Tic_Tac_Toe =()=>{
    const [disply,setdisply]=useState(Array(9).fill(INITIAL))
    const [players,setplayers]=useState(false)
    const [gamesfinised,setgamesfinised]=useState(false)
    const [draw,setdraw]=useState(false)
    const [wincount,setwincount]=useState({x:0,o:0})


    const isganeover = ()=>{
        if(!gamesfinised){

            // x win
            for(let a=0;a<8;a++){
                if(disply[wincobination[a][0]]===X_players && disply[wincobination[a][1]]===X_players && disply[wincobination[a][2]]===X_players){
                    setgamesfinised(true)
                    setwincount({...wincount,x: wincount.x+1})
                    console.log("xwon")
                    return;
                }

            }
            if(!disply.includes(INITIAL)){
                setdraw(true)
                setgamesfinised(true)
                console.log("draw")
            }
            // 0 win
         for(let a=0;a<8;a++){
            if(disply[wincobination[a][0]]=== o_players && disply[wincobination[a][1]]=== o_players && disply[wincobination[a][2]]=== o_players){
                setgamesfinised(true)
                setwincount({...wincount,o: wincount.o+1})
                console.log("owon")
                return;
            }

        }
        // draw
        if(!disply.includes(INITIAL)){
            setdraw(true)
            setgamesfinised(true)
            console.log("draw")
        }
     }
        // isganeover ()
    }

    const restartgames=()=>{
        setdisply(Array(9).fill(INITIAL))
        setgamesfinised(false)
        setdraw(false)
    }
    const clearhistory=()=>{
        setwincount({x:0,o:0})
        restartgames()
    }

    isganeover ()

    const handleClick =(id)=>{
        // console.log("Insidse,handleClick")
        setdisply(
            disply.map((elem,index)=>{
                if(index===id){
                    if(players){
                        return o_players
                    } else{
                        return  X_players
                    }
                }else{
                    return elem
                }
            })
        );
        setplayers(!players)

    }
    return (
        <div>
            <span className={styles.win_history}>
            X's WINS:{wincount.x}
            <br />
            o's WINS:{wincount.o}

        </span>
        
        {gamesfinised &&<End wincount={wincount}
        clearhistory={clearhistory}
         restartgames={restartgames} players={players} draw={draw} />}
        <Squers clickArray={disply} handleClick={handleClick} />
        </div>
    )
}