const { it, describe } = require('mocha');
const { assert } = require('chai');
const Password = require("../index.js");

describe("Performance test for checkStrength()", function () {
    it("should automatically increase password length until it fails", function () {
        const passwd = new Password();
        let len = 12;
        const maxTime = 20; // максимально допустимий час у мс
        const step = 150_000; // крок збільшення довжини
        let base, start, end, time;

        while (true) {
            base = "Aa1!".repeat(Math.ceil(len / 4)).slice(0, len); 

            start = Date.now();
            passwd.checkStrength(base);
            end = Date.now();

            time = end - start;
            console.log(`Довжина: ${len}, Час: ${time} мс`);

            if (time > maxTime) {
                assert.fail(`Перевірка пароля довжини ${len} триває надто довго: ${time} мс`);
                break;
            }

            len += step;
        }
    });
});




// const { it, describe, before } = require('mocha');
// const { assert } = require('chai');
// const Password = require("../index.js");

// describe("Password class integration testing", function () {
//     let passwd;

//     before(function () {
//         passwd = new Password();
//     });

//     it("should accept a strong password and update the internal password", function () {
//         const newStrongPassword = "NewPass123!Aa";
//         const result = passwd.set_passwd(newStrongPassword);
//         assert.isTrue(result, "Expected password to be accepted");
//         assert.equal(passwd.get_passwd(), newStrongPassword, "Password should be updated internally");
//     });

//     it("should reject a password missing a special character", function () {
//         const weakPassword = "NewPass123AA"; // No special character
//         const result = passwd.set_passwd(weakPassword);
//         assert.isFalse(result, "Expected password to be rejected due to missing special character");
//         assert.notEqual(passwd.get_passwd(), weakPassword, "Password should remain unchanged");
//     });

//     it("should reject a password that is too short", function () {
//         const shortPassword = "S1!a"; // Too short
//         const result = passwd.set_passwd(shortPassword);
//         assert.isFalse(result, "Expected password to be rejected due to insufficient length");
//         assert.notEqual(passwd.get_passwd(), shortPassword, "Password should remain unchanged");
//     });
// });



// const { it, describe, before } = require('mocha');
// const { assert } = require('chai');
// const Password = require("../index.js");

// describe("Password class testing", function() {
    
//     before(function() {
//         passwd = new Password();
//     });

//     it("1. sets a valid password with all required character sets", function() {
//         let result = passwd.set_passwd("NewPassword123!Aa");
//         assert.isTrue(result);
//         assert.equal(passwd.get_passwd(), "NewPassword123!Aa");
//     });

//     it("2. fails when password is too short", function() {
//         let result = passwd.set_passwd("Short1!");
//         assert.isFalse(result);
//     });

//     it("3. fails when password is missing digits", function() {
//         let result = passwd.set_passwd("Password!Aa");
//         assert.isFalse(result);
//     });

//     it("4. fails when password is missing lowercase letters", function() {
//         let result = passwd.set_passwd("PASSWORD123!A");
//         assert.isFalse(result);
//     });

//     it("5. succeeds with a valid password containing all character sets", function() {
//         let result = passwd.set_passwd("ValidPass123!Aa");
//         assert.isTrue(result);
//         assert.equal(passwd.get_passwd(), "ValidPass123!Aa");
//     });

//     it("6. fails when password is missing special characters", function() {
//         let result = passwd.set_passwd("Password123Aa");
//         assert.isFalse(result);
//     });

//     it("7. succeeds when password meets all requirements after modification", function() {
//         let result = passwd.set_passwd("NewPass123!Aa");
//         assert.isTrue(result);
//         assert.equal(passwd.get_passwd(), "NewPass123!Aa");
//     });
// });
