class Passwd {
    pwd = "1234"
    check_passwd(passwd){
        return this.pwd == passwd
    }
    set_passwd(passwd){
        this.pwd = passwd
    }
    get_passwd(){
        return this.pwd
    }
}
module.exports = Passwd 