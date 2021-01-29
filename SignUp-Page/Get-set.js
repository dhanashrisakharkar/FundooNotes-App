class SignUpData {
    get id() { return this._id }
    set id(id) {
        this._id = id
    }
    get fname() { return this.fname }
    set fname(fname) {
        let fnameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (fnameRegex.test(fname))
            this._fname = fname
        else throw 'Name is Incorrect'
    }
    get lname() { return this._lname }
    set lname(lname) {
        let lnameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (lnameRegex.test(lname))
            this._lname = lname
        else throw 'Last Name is Incorrect'
    }
    get email(){
        return this.email
    }
    set email(email){
        let emailRegex = RegExp('^[a-zA-Z]{3}[.]{1}[a-zA-Z]{3}(@)[a-zA-Z]{2}[.][a-zA-Z]{2}[.][a-zA-Z]{2}$')
        if(emailRegex.test(email))
        this._email = email
        else throw 'email is Incorrect'
    }
    get pwd(){
        return this.pwd
    }
    set pwd(pwd){
        let pwdRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(pwdRegex.test(pwd))
        this._pwd = pwd
        else throw 'password is Incorrect'
    }
    get rpwd(){
        return this.pwd
    }
    set rpwd(rpwd){
        let rpwdRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(rpwdRegex.test(rpwd))
        this._rpwd = rpwd
        else throw 'password is Incorrect'
    }
    toString() {       
        return "id=" + this.id + ", first name=" + this.name + "last name" + this.lname + "email" + this.email + "password" + this.pwd + "repeat password" + this.rpwd
    }
}