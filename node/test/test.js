const {it, describe} = require('mocha')
const {assert} = require('chai')
const Passwd = require("../index.js")
describe("passwd class testing", function(){
    before(function(){
        passwd = new Passwd()
        passwd.set_passwd("qwerty")
    })
    it("sets new passwd", function(){
        assert.equal(passwd.get_passwd(), "qwerty")
    })
    it("check pwd", function(){
        let answer = passwd.check_passwd("qwerty")
        let answer2 = passwd.check_passwd("qwer33ty")
        assert.isTrue(answer)
        assert.isFalse(answer2)

    })
})
