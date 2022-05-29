// import { useTimer } from "./useTimers";

import { useTimer } from "./useTimer";

export const Timer = () => {
  const {istime,setisstarttimer,setistime}=useTimer(20);
  return (
    <div>
      <h1>Timer</h1>
      <h1>{istime}</h1>
      <button onClick={() => setisstarttimer(true)}>start</button>
      <button onClick={() => setisstarttimer(false)}>stop</button>
      <button onClick={() => setistime(10)}>restart</button>
    </div>
  );
};