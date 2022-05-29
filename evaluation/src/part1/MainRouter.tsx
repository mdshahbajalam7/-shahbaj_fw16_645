import React from 'react'
import { CardDetails } from "./components/CardDetails";
import { Checkout } from "./components/Checkout";
import { Body } from "./components/Body";
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';

function MainRouter() {
  return (
    <div>
          <Nav />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/:id" element={<CardDetails />}>
          {" "}
        </Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  )
}

export default MainRouter