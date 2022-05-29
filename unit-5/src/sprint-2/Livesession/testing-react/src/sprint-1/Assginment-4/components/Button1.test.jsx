
import { render,screen } from "@testing-library/react";
import Button from "../../../compnents/Button";
import {Slider} from "../.../../components/Slider"


describe("button testing with react in counter ",function(){
    it("should have a counter button",function(){
        render(<Button>Click me</Button>)
        let button = screen.getByText("Click me")
        expect(button).toBeInTheDocument() 
    })
    it("should have a counter button with 5",function(){
        render(<Button>Click me and increaes 5</Button>)
        let button = screen.getByText("Click me and increaes 5")
        expect(button).toBeInTheDocument() 
    })
    it("should have a counter button with 5",function(){
        render(<Button>Click me and decreces 5</Button>)
        let button = screen.getByText("Click me and decreces 5")
        expect(button).toBeInTheDocument() 
    })
    it("should have a counter button with default 0",function(){
        render(<Button>Click me default 0</Button>)
        let button = screen.getByText("Click me default 0")
        expect(button).toBeInTheDocument() 
    })
})
describe("sliding testing with react in counter ",function(){
    it("should have a counter sliding testing with question answer",function(){
        render(<Slider>Click me</Slider>)
        let button = screen.getByText("Click me")
        expect(button).toBeInTheDocument() 
    })
})