window.addEventListener('DOMContentLoaded', (event) => {
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const pwd = document.querySelector('#pwd');
    const rpwd = document.querySelector('#rpwd');
    const textError = document.querySelector('.text-error');
    const textErrorTwo = document.querySelector('.Ltext-error');
    const emailError = document.querySelector('.email-error');
    const pwdError = document.querySelector('.pwd-error');
    const rpwdError = document.querySelector('.rpwd-error');
    fname.addEventListener('input', function () {
        if (fname.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).fname = fname.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    })

    lname.addEventListener('input', function () {
        if (lname.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).lname = lname.value;
            textErrorTwo.textContent = "";
        } catch (e) {
            textErrorTwo.textContent = e;
        }
    })

    email.addEventListener('input', function () {
        if (email.value.length == 0) {
            emailError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).email = email.value;
            emailError.textContent = "";
        } catch (e) {
            emailError.textContent = e;
        }
    })

    pwd.addEventListener('input', function () {
        if (pwd.value.length == 0) {
            pwdError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).pwd = pwd.value;
            pwdError.textContent = "";
        } catch (e) {
            pwdError.textContent = e;
        }
    })

    rpwd.addEventListener('input', function () {
        if (rpwd.value.length == 0) {
            rpwdError.textContent = "";
            return;
        }
        try {
            (new SignUpData()).rpwd = rpwd.value;
            rpwdError.textContent = "";
        } catch (e) {
            rpwdError.textContent = e;
        }
    })


});



const store = () => {
    try {
        createUserDetail();
        return;

    } catch (e) {
        return;
    }
}

const createUserDetail = () => {
    let userData = new SignUpData();
    try {
        userData.fname = getInputValueById('#fname')
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    try {
        userData.lname = getInputValueById('#lname')
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    try {
        userData.email = getInputValueById('#email')
    } catch (e) {
        setTextValue('.email-error', e);
        throw e;
    }

    try {
        userData.pwd = getInputValueById('#pwd')
    } catch (e) {
        setTextValue('.pwd-error', e);
        throw e;
    }

    try {
        userData.rpwd = getInputValueById('#rpwd')
    } catch (e) {
        setTextValue('.rpwd-error', e);
        throw e;
    }

    return userData;

}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value)
    });
    return selItems;

}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}





