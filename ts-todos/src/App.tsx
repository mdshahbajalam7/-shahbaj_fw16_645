
import './App.css';
import useTimeout from './components/useTimeout';
import Githubuser from './Hooks/Githubuser';
// import Timer from './Hooks/Timer';
// import Timer from './Hooks/Timer';
// import Counter from './components/Counter';
// import Todo from './components/Todo';
import Form from './secondAssginment/Form';

function App() {
  const isshow = useTimeout(2000)

  // if(isshow){
  //   return "waiting for timer"
  // }
  return (
    <div className="App">
      {/* {isshow && <Githubuser/>}
      {!isshow && <h1 style={{color:"red"}}>hello</h1>} */}
      {/* <h1>Hello TypeScript</h1>
      <Counter init={0} />
      <Counter init={10} />
      <Counter  />
      <Todo/> */}
      <Form/>
      {/* <Usetime/> */}
      {/* <Githubuser/> */}
      
    </div>
  );
}

export default App;
