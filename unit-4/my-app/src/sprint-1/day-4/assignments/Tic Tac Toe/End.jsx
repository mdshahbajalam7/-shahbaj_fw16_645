import React from 'react'
import styles from "./Tic.module.css"

export const End = ({restartgames,players,draw,wincount,clearhistory}) => {
  return (
    <div className={styles.endgame}>
        {!draw && <span className={styles.win}>{players ? "X WON" : "O WON"}</span>}
        {draw && <span className={styles.win}>DRAW GAME</span>}

        <span className={styles.win_history}>
            X's WINS:{wincount.x}
            <br />
            o's WINS:{wincount.o}

        </span>

        <button className={styles.btn} onClick={restartgames}>
            Restart GAME
        </button>
        <button className={styles.btn} onClick={clearhistory}>
            CLEAR HISTORY
        </button>
    </div>
  )
}
