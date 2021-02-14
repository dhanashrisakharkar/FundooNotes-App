
function makeServiceCall(methodType, url, async = true, noteData) {
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
        if (noteData) {
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Authorization", localStorage.getItem('token'),);
            xhr.send(JSON.stringify(noteData));
        } else {
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Authorization", localStorage.getItem('token'),);
            xhr.send();
        }
        console.log(methodType + " request sent to the server.");
    });
}



