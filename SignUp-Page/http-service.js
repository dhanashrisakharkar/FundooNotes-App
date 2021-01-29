
const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        createOrUpdateEmployeePayroll();
        // let userData = createUserDetail();
        // saveData()
        // window.addEventListener('DOMContentLoaded', (event) => {
        //     const fname = document.querySelector('#fname');
        //     const lname = document.querySelector('#lname');
        //     const email = document.querySelector('#email');
        //     const pwd = document.querySelector('#pwd');
        //     // const rpwd = document.querySelector('#rpwd');
            
        //     // console.log(fname,lname,email,pwd,rpwd);
        //     // let userDataList = JSON.parse(localStorage.getItem("UserDetail"));
        //     const postElem = document.querySelector('#post_services');
        //     const postURL = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
        //    const  userData =
        //     {
                
        //         "first name": fname,
        //         "last name": lname,
        //         "email": email ,
        //         "password":pwd,
        //         "card id" : "_id",
                
        //     };
        //     makeServiceCall("POST", postURL, true, userData)
        //         .then(responseText => postElem.textContent = "User added : " + responseText)
        //         .catch(error => postElem.textContent = "POST Error Status: " + JSON.stringify(error));
            // })
            return;
        
      
    } catch (e) {
        return;
    }
}

// const createUserDetail = () => {
//     let userData = new SignUpData();
    
//     const fname = document.querySelector('#fname');
//     const lname = document.querySelector('#lname');
//     const email = document.querySelector('#email');
//     const pwd = document.querySelector('#pwd');

//     return userData;
// }
//   window.addEventListener('DOMContentLoaded', (event) => {
//   })
// function saveData()
// {
//     window.addEventListener('DOMContentLoaded', (event) => {
//     const fname = document.querySelector('#fname');
//     const lname = document.querySelector('#lname');
//     const email = document.querySelector('#email');
//     const pwd = document.querySelector('#pwd');
//     // const rpwd = document.querySelector('#rpwd');
    
//     // console.log(fname,lname,email,pwd,rpwd);
//     // let userDataList = JSON.parse(localStorage.getItem("UserDetail"));
//     const postElem = document.querySelector('#post_services');
//     const postURL = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
//     let userData =
//     {
        
//         "first name": fname,
//         "last name": lname,
//         "email": email ,
//         "password": pwd,
//         "card id" : "-id",
        
//     };
//     makeServiceCall("POST", postURL, true, userData)
//         .then(responseText => postElem.textContent = "User added : " + responseText)
//         .catch(error => postElem.textContent = "POST Error Status: " + JSON.stringify(error));
//     })
    
// }

function makeServiceCall(methodType, url, async = true, data ) {
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

const createOrUpdateEmployeePayroll = () => {
    // window.addEventListener('DOMContentLoaded', (event) => {
    const fname = document.querySelector('#fname').value;
            const lname = document.querySelector('#lname').value;
            const email = document.querySelector('#email').value;
            const pwd = document.querySelector('#pwd').value;
            // var formData = new FormData(document.querySelector('#formElem'))
            const formData =
            {
                
                firstName: fname,
                "lastName": lname,
                "email": email ,
                "password":pwd,
                "cartId" : "",
                "service": "advance"
                
            };
            console.log(formData);
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
    let methodCall = "POST";
    // if(isUpdate) {
    //    postURL = postURL + userData.id.toString();
    //    methodCall = "PUT";
    // }
    makeServiceCall(methodCall, postURL, true, formData)
          .then(responseText => {
             resetForm();
            //  window.location.replace(site_properties.home_page);
          })
          .catch( error => {
             throw error;
          });
        // })
 }
 const resetForm = () => {
    setValue('#fname', '');
    setValue('#lname', '');
    setValue('#email', '');
    setValue('#pwd', '');
    setValue('#rpwd', '');
    // setValue('#fname', '');
    
 }

 const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
 }