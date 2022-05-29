const {describe,test,expect} = require("@jest/globals")
const {add,sub,mult,milliseconds} = require ("../src/index")
describe("sum_arguments add",function(){
    test("should work on all postive numbers",function (){
        expect(add(2,2)).toBe(4)
        expect(add(4,4)).toBe(8)
        expect(add(3,3)).toBe(6)
        expect(add(4,10)).toBe(14)
    });
})

describe("sum_arguments subtarct",function(){
    test("should work on all negative numbers",function (){
        expect(sub(2,2)).toBe(0)
        expect(sub(8,4)).toBe(4)
        expect(sub(6,3)).toBe(3)
    });
})
describe("sum_arguments multiple",function(){
    test("should work on all multiple numbers",function (){
        expect(mult(2,2)).toBe(4)
        expect(mult(8,4)).toBe(32)
        expect(mult(6,3)).toBe(18)
    });
})

 describe("Should give the time in Hours, minuts and second formate",function(){
    
    test("Converts miliseconds to hours minuts and seconds",function(){

        expect(milliseconds(12000000)).toBe("3 Hours 20 Minutes 0 seconds");

    });
    
    test("Converts miliseconds to minuts and seconds",function(){

        expect(milliseconds(200000)).toBe("3 Minutes 20 seconds");

        expect(milliseconds(60000)).toBe("1 Minutes 0 seconds");

        expect(milliseconds(180000)).toBe("3 Minutes 0 seconds");
    });

    test("Converts miliseconds to seconds only",function(){

        expect(milliseconds(5200)).toBe("5 seconds");

        expect(milliseconds(6000)).toBe("6 seconds");

        expect(milliseconds(12000)).toBe("12 seconds");
    });
 })


