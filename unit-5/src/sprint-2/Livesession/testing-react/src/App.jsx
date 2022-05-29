
// import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import InputForm from './sprint-2/Assginment-5/InputForm';
// import Button from './sprint-1/Assginment-4/components/Button';
// import Slider from './sprint-1/Assginment-4/components/Slider';
// import Button from './compnents/Button';
// import Button from './compnents/Button';

function App() {

  const getdata=()=>{
    axios.get("http://localhost:8000/counter")
    .then(({data})=>{
      setcount(data.value)
    })
  }

  useEffect(()=>{
    getdata()
  },[])
  // const data = [
  //   {
  //     id:1,
  //     answer:
  //       "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  //       question: "This is panel header 1",
  //   },
  //   {
  //     id:2,
  //     answer:
  //       "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  //       question: "This is panel header 2",
  //   },
  //   {
  //     id:3,
  //     answer:
  //       "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  //       question: "This is panel header 3",
  //   },
  //   {
  //     id:4,
  //     answer:
  //       "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  //       question: "This is panel header 4",
  //   },
  //   {
  //     id:5,
  //     answer:
  //       "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  //       question: "This is panel header 5",
  //   },
  // ];
  // const [theme,settheme]=useState("light")
  const [count,setcount]=useState(0)
  return (
    <div className="App" id='main'>
      <InputForm/>
      <h3 className='counter-value'>count is :{count}</h3>
      <div >
        {/* <h1 onClick={()=>setcount(count+1)}>counter:{count}</h1> */}
        <button className='counterBtn' type='button'
         onClick={()=>{
          axios.post("http://localhost:8000/counter",{
            value:count+1
          })
          .then(getdata)
          
         }}>
           add count
            </button>
      </div>
      
      {/* <Button/>
      <Slider data={data}/> */}
      {/* <h3>Theme is {theme}</h3>
      <Button onClick={()=>{
        settheme(theme==="light"?"drak":"light")
      }} >Change theme</Button> */}
    </div>
  );
}

export default App;
