const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        createAddReset();
        return;
    } catch (e) {
        return;
    }
}

function makeServiceCall(methodType, url, async = true, data) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (xhr.status.toString().match('^[2][0-9]{2}$')) {
                    resolve(xhr.responseText);
                }
                else if (xhr.status.toString().match('^[4,5][0-9]{2}$')) {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                    console.log("XHR Failed");
                }
            }
        }
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhttp.statusText
            });
        };
        xhr.open(methodType, url, async);
        if (data) {
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
        console.log(methodType + " request sent to the server.");
    });
}

const createAddReset = () => {
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    const formData =
    {

        firstName: fname,
        "lastName": lname,
        "email": email,
        "password": pwd,
        "cartId": "",
        "service": "advance"

    };
    console.log(formData);
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
    let methodCall = "POST";
    makeServiceCall(methodCall, postURL, true, formData)
        .then(responseText => {
            resetForm();
        })
        .catch(error => {
            throw error;
        });
}
const resetForm = () => {
    setValue('#fname', '');
    setValue('#lname', '');
    setValue('#email', '');
    setValue('#pwd', '');
    setValue('#rpwd', '');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}