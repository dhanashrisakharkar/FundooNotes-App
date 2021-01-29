class LoginData {
    get id() { return this._id }
    set id(id) {
        this._id = id
    }
    get email() {
        return this.email
    }
    set email(email) {
        let emailRegex = RegExp('^[a-zA-Z]{3}[.]{1}[a-zA-Z]{3}(@)[a-zA-Z]{2}[.][a-zA-Z]{2}[.][a-zA-Z]{2}$')
        if (emailRegex.test(email))
            this._email = email
        else throw 'email is Incorrect'
    }
    get pwd() {
        return this.pwd
    }
    set pwd(pwd) {
        let pwdRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (pwdRegex.test(pwd))
            this._pwd = pwd
        else throw 'password is Incorrect'
    }
    toString() {
        return "id=" + this.id + this.lname + "email" + this.email + "password" + this.pwd;
    }
}