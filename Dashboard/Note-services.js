
// $( document ).ready(function() {
//     console.log( "ready!" );
//     DisplayNotes();
// });


const savenote = () => {
    try {
        // AddNote();
       
        return;

    } catch (e) {
        return;
    }
}
// DisplayNotes();

function makeServiceCall(methodType, url, async = true, noteData ) {
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
            // xhr.setRequestHeader(Authorization, localStorage.getItem('token'));
            xhr.setRequestHeader("Authorization", localStorage.getItem('token'),);
            xhr.send(JSON.stringify(noteData ));
        } else {
            xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.setRequestHeader(Authorization, localStorage.getItem('token'));
            xhr.setRequestHeader("Authorization", localStorage.getItem('token'),);
            xhr.send();
        }
        console.log(methodType + " request sent to the server.");
    });
}

const AddNote = () => {
    
    const title = document.querySelector('#title ').value;
    const description = document.querySelector('#description').value;
    // const Authorization =  localStorage.getItem("token");
    // console.log(Authorization)
    // const headers = {
    //     Authorization: localStorage.getItem('token'),
    //   }
    const noteData =
    {

        "title": title,
        "description": description,
    
    };
    console.log(noteData);
    // let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes";
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes";
    let methodCall = "POST";
    makeServiceCall(methodCall, postURL, true, noteData )
        .then(responseText => {
            console.log("note added succesfully")
           
            resetForm();
        })
        .catch(error => {
            throw error;
        });
}

function  DisplayNotes() {
     let data = [] ;
     let innerHtml  = "";
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList";
    let methodCall = "GET";
    makeServiceCall(methodCall,postURL, true)
                  .then(responseText => {
                    //  console.log(responseText["data"]);
                    let response = JSON.parse(responseText);
                //    console.log( JSON.stringify(response));
                console.log(response)
                data = Object(response.data.data)
               console.log(data)
               console.log(data.length)
               console.log(data[0].title)
            
                    for(let details of data ){
                      
                        innerHtml  += `
                                <div class="noteCard my-2 mx-2 card" style="width: 18rem; box-shadow: 0 .2rem 1rem rgba(0.1, 1, 1, 0.1)!important;
                                border: 2px solid rgba(0,0,0,.125);
                                border-radius: 0.55rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">${details.title}</h5>
                                            <p class="card-text" style="margin-top: 10%;">${details.description}</p>
                                            <button id="delete" style=" background-color: transparent; border: none; margin-left: 75%; margin-bottom: -8%; display: inline" >Delete </button>
                                        </div>
                                    </div>`
                      };
                      document.querySelector('#display').innerHTML = innerHtml
                     
                  })
                
               
}


const resetForm = () => {
    setValue('#title', '');
    setValue('#description', '');
   
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}