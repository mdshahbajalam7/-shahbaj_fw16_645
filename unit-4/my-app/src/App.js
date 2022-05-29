
// import { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Login from './sprint-2/day-2/assignments/Router-project/pages/Login';
import Mens from './sprint-2/day-2/assignments/Router-project/Components/Mens';
//  port Dashboard from "./sprint-2/day-1/assignments/ThemeContext/Dashboard"
// import Home from './sprint-2/day-1/you/pages/Home';
// import Login from './sprint-2/day-1/you/pages/Login';
// import About from './sprint-2/day-1/you/pages/About';
// import Navbar from './sprint-2/day-1/you/components/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import SignIn from './sprint-2/day-1/you/components/SignIn';
// import SignUp from './sprint-2/day-1/you/components/SignUp';
// import Google from './sprint-2/day-1/you/components/Google';
// import Counter from './sprint-2/day-1/you/pages/Counter';
// import Products from './sprint-2/day-1/you/pages/Products';
// import Product from './sprint-2/day-1/you/pages/Product';
import Navbar from './sprint-2/day-2/assignments/Router-project/Components/Navbar';
import About from './sprint-2/day-2/assignments/Router-project/pages/About';
import Categories from './sprint-2/day-2/assignments/Router-project/pages/Categories';
import Contact from './sprint-2/day-2/assignments/Router-project/pages/Contact ';
import FAQ from './sprint-2/day-2/assignments/Router-project/pages/FAQ';
import Home from './sprint-2/day-2/assignments/Router-project/pages/Home';
import Unisex from './sprint-2/day-2/assignments/Router-project/Components/Unisex ';
import Womens from './sprint-2/day-2/assignments/Router-project/Components/Womens';
import SignIn from './sprint-2/day-2/assignments/Router-project/pages/SignIn';
import Products from "./sprint-2/day-2/assignments/Router-project/pages/Products"
import Cart from './sprint-2/day-2/assignments/Router-project/pages/Cart';
// import Cart
// import TodoInput from './sprint-2/day-3/we/Reactredux/components/TodoInput';
// import Counter from './sprint-2/day-3/we/Reactredux/components/Counter';
// import Todos from "./sprint-2/day-3/assignments/REACT-REDUX/components/Todos"
// import Todo from './sprint-2/day-3/assignments/REACT-REDUX/components/Todo';
// import TodoInput from './sprint-2/day-3/assignments/REDUX - COMBINE REDUCERS/components/TodoInput';
// import TodoList from './sprint-2/day-3/assignments/REDUX - COMBINE REDUCERS/components/TodoList';
// import Home from './sprint-2/day-3/assignments/REDUX - COMBINE REDUCERS/Rout/Home';
// import Loginpage from './sprint-2/day-3/assignments/REDUX - COMBINE REDUCERS/Rout/Loginpage';
// import DisplayPage from './sprint-2/day-3/assignments/REDUX - COMBINE REDUCERS/components/DisplayPage';
// import Todocompleted from './sprint-2/day-3/assignments/REDUX - COMBINE REDUCERS/components/Todocompleted';
// import Routes from './sprint-2/day-3/assignments/REDUX - COMBINE REDUCERS/Rout/Routes';
// import Navbar from "./sprint-2/day-2/assignments/Router-project/Navbar"
// import SignIn from './sprint-2/day-2/assignments/Router-project/pages/SignIn';


function App() {
  return (
    <div className='App'>
      {/* <Navbar/> */}
      {/* <SignIn/> */}
      {/* <TodoInput/>
      <TodoList/> */}
      {/* <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route  exact  path='/login' element={ <Loginpage/>}></Route>
        <Route path='/todo/:id' element={<DisplayPage/>}></Route>
        <Route path='DisplayPage/todo/:id' element={<Todocompleted/>}></Route>
      </Routes> */}
     
      {/* <Navbar/>
      <Dashboard/> */}
      {/* <Navbar/>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='login/*' element={<Login/>}>
        <Route path='Sign-in' element={<SignIn/>}/>
        <Route path='Sign-up' element={<SignUp/>}/>
        <Route path='Sign-in-google' element={<Google/>}/>
        </Route>
        <Route path='about' element={<About/>}/>
        <Route path='counter/:initialcounter' element={<Counter/>}/>
        <Route path='products/*' element={<Products/>}>
        <Route path=':id' element={<Product/>}/>
        </Route>
      </Routes> */}

      {/* jksdhhgkdfh */}
      <Navbar/>
      <Routes>
        <Route path='categories/*'element={<Categories/>}>
        <Route path='mens'element={<Mens/>}/>
        <Route path='Womens'element={<Womens/>}/>
        <Route path='unisex'element={<Unisex/>}/>  
        </Route>
        <Route path='about'element={<About/>}/>
        <Route path='Contact'element={<Contact/>}/>
        <Route path='FAQ'element={<FAQ/>}/>
        <Route path="home"element={<Home/>}>
          <Route path='products' element={<Products/>} />
        </Route>
        <Route path='Login/*'element={<Login/>}>
         <Route path='signin' element={<SignIn/>} /> 
        </Route>
        <Route path='cart' element={<Cart/>}/>
      </Routes> 
      {/* dklfjskj
      {/* <Todos/> */}

       {/* <Routes>
        <Route  path='/' element={<Todos/>} />
        <Route  path={`/todo`} element={<Todo/>} />
      </Routes>  */}
      {/* <Counter/>  */}

    </div>

  );
}

export default App;
