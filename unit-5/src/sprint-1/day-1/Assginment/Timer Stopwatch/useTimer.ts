import { useState, useEffect } from 'react';

export const useTimer=(init:number)=> {
    const [istime,setistime]=useState(init)
    const [isstarttimer,setisstarttimer]=useState(false)

    useEffect(() => {
        let interval: any = null;
        if (isstarttimer) {
          interval = setInterval(() => {
            setistime((init) => {
              if (init == 1) setisstarttimer(false);
              return init - 1;
            });
          }, 1000);
        } else {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isstarttimer]);


      return {istime,isstarttimer,setisstarttimer,setistime}
    }