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
    
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    const formData =
    {
        "email": email,
        "password": pwd,
        "cartId": "",
        "service": "advance"

    };
    let xhr = new XMLHttpRequest();
    console.log(formData);
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/user/login";
    let methodCall = "POST";
    makeServiceCall(methodCall, postURL, true, formData)
        .then(responseText => {
            console.log(responseText)
            // let response = JSON.parse(xhr.responseText);
            // var games_serialized = JSON.stringify(responseText);
            // localStorage.setItem('gamesStored', games_serialized.id);
            // console.log(responseText.)
            let response = JSON.parse(responseText);
            console.log(response)
            console.log(response.id)

    localStorage.setItem("token", response.id);
    localStorage.setItem("firstName", response.firstName);
    localStorage.setItem("lastName", response.lastName);
    localStorage.setItem("email", response.email);
    // localStorage.setItem( JSON.stringify(responseText));
    setTimeout(() => {
        window.location.replace(site_properties.dashboard);
      }, 2000);
            resetForm();
        })
        .catch(error => {
            throw error;
        });
}
const resetForm = () => {
    setValue('#email', '');
    setValue('#pwd', '');
   
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}