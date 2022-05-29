// import React from 'react';
import { render, screen ,fireEvent } from '@testing-library/react';
import App from '../App';
// import {App} from './App';
// import userEvent from '@testing-library/user-event';
import Button from "./Button"

describe("button testing with react" ,function(){
    it("should have button in dom" ,function(){
        render(<Button>Click me</Button>)
        let button = screen.getByText("Click me")
        expect(button).toBeInTheDocument()
    })
    // it("should have button in testid" ,function(){
    //     render(<Button></Button>)
    //     let button = screen.getByTestId("CButton")
    //     expect(button).toBeInTheDocument()
    // })
    // it.only("should change theme" ,function(){
    //     render(<App></App>)

    //     let h3 = screen.getByText("Theme is light")
    //     expect(h3).toHaveTextContent("light")

    //     let themebutton = screen.getByText("Change theme")
    //     fireEvent.click(themebutton)
    //     expect(h3).toHaveTextContent("Theme is drak")
    // })
    // it.only("should call given function" ,function(){
    //     const mockfn = jest.fn()
    //     render(<Button onclick={fn}>Click me</Button>)

    //     let btn = screen.getByText("Click me")
    //     // expect(h3).toHaveTextContent("light")

    //     let themebutton = screen.getByText("Change theme")
    //     fireEvent.click(themebutton)
    //     expect(h3).toHaveTextContent("Theme is drak")
    // })
})
