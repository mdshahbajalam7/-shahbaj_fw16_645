
import './App.css';
import OtpInput from './sprint-1/day-3/Assginment-3/OtpInput';
// import Tabscha from './sprint-1/day-3/Assginment-3/part-2/Tabscha';



function App() {

  const handlechange=(otp:string)=>{
    console.log("receved is to",otp);
  }

  return (
    <div className="App">
      {/* <Tabscha/> */}
      {/* <OtpInput totalInputs={4} onChange={handlechange}  /> */}
      <OtpInput totalinputs={5} onChange={handlechange} />
    </div>
  );
}

export default App;
