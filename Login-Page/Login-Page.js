window.addEventListener('DOMContentLoaded', (event) => {
    
    const email = document.querySelector('#email');
    const pwd = document.querySelector('#pwd');
   
   
    const emailError = document.querySelector('.email-error');
    const pwdError = document.querySelector('.pwd-error');
   
   
   
    email.addEventListener('input', function () {
        if (email.value.length == 0) {
            emailError.textContent = "";
            return;
        }
        try {
            (new LoginData()).email = email.value;
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
            (new LoginData()).pwd = pwd.value;
            pwdError.textContent = "";
        } catch (e) {
            pwdError.textContent = e;
        }
    })

    


});



const save = () => {
    try {
        let userData = createUserDetail();
        createAndUpdateStorage(userData)
    } catch (e) {
        return;
    }
}

//Use Case 11
const createUserDetail = () => {
    let userData = new LoginData();
    

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


function createAndUpdateStorage(userData) {
    let userDataList = JSON.parse(localStorage.getItem("UserDetail"));
    if (userDataList != undefined) {
        userDataList.push(userData);
    } else {
        userDataList = [userData]
    }

    localStorage.setItem("UserDetail", JSON.stringify(userDataList));
    alert(userDataList.toString());

}