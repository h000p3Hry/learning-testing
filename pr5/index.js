class Password {
    constructor() {
        this.password = "Default123!Aa";
        this.minLength = 12;
        
        // Набори символів
        this.digits = /[0-9]/;
        this.lower = /[a-z]/;
        this.upper = /[A-Z]/;
        this.special = /[!№;%:_]/;
        
        // Всі набори символів завжди активні
        this.activeSets = ['digits', 'lower', 'upper', 'special'];
    }
    get_passwd() {
        return this.password;
    }
    set_passwd(newPasswd) {
        if (this.checkStrength(newPasswd)) {
            this.password = newPasswd;
            return true;
        } else {
            console.log("Пароль занадто слабкий.");
            return false;
        }
    }

    checkStrength(passwd) {
        let setsUsed = 0;
        if (this.digits.test(passwd)) setsUsed++;
        if (this.lower.test(passwd)) setsUsed++;
        if (this.upper.test(passwd)) setsUsed++;
        if (this.special.test(passwd)) setsUsed++;

        return passwd.length >= this.minLength && setsUsed === this.activeSets.length;
    }
}

module.exports = Password;
