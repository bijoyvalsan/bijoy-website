const helper = require("./helper")
// @ponicode
describe("helper.to", () => {
    test("0", () => {
        let callFunction = () => {
            helper.to(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            helper.to(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            helper.to(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            helper.to(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            helper.to(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            helper.to(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
