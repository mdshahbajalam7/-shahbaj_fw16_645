import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './sprint-2/day-2/assignments/Router-project/Components/Authcontext';
 <script src="https://kit.fontawesome.com/78d13b8fa3.js" crossorigin="anonymous"></script>

// import ThemeProvider from './sprint-2/day-1/assignments/ThemeContext/ThemeProvider';
// import Button from './day2/Assginment1/Button';
// import { AuthProvider } from './sprint-2/day-1/we/Loginfiles/context/AuthContext';
// import { AuthProvider } from './sprint-2/day-1/assignments/AuthContext/AuthContexts';
// import { Provider } from 'react-redux';
// import { store } from './sprint-2/day-3/assignments/REDUX - COMBINE REDUCERS/Redux/store';
// import { store } from './sprint-2/day-3/we/Reactredux/store';
// import {store} from "./sprint-2/day-3/assignments/REACT-REDUX/store"
const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  // <React.StrictMode>
  // <AuthProvider>
  // <ThemeProvider>
  // <BrowserRouter>
  // </BrowserRouter>
  // <ReactDOM.render>
  <BrowserRouter>
  <AuthProvider>
  {/* <Provider store={store}> */}
    <App />
    </AuthProvider>
  {/* </Provider> */}
  
  </BrowserRouter>
    
  //  </ThemeProvider>
      
  // </AuthProvider>
  
    // <Button/>

  // </React.StrictMode>,
  // document.getElementById('root')
);
reportWebVitals();
