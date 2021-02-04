// let color = "#FFFFFF";
// document.body.style.background = color; 
const savenote = () => {
    try {
        AddNote();
        document.getElementById("cardId").style.background ="#FFFFFF";
        document.getElementById("wrapperId").style.background ="#FFFFFF";
        document.getElementById("title").style.background ="#FFFFFF";
        document.getElementById("description").style.background ="#FFFFFF";
        document.getElementById("btnn").style.background ="#FFFFFF";       

        return;

    } catch (e) {
        return;
    }
}


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



const AddNote = () => {
    console.log(colour +" get colour");
    const color = colour;
    const title = document.querySelector('#title ').value;
    const description = document.querySelector('#description').value;
    const noteData =
    {

        "title": title,
        "description": description,
        "color": color,

    };
    console.log(noteData);
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes";
    let methodCall = "POST";
    makeServiceCall(methodCall, postURL, true, noteData)
        .then(responseText => {
            console.log("note added succesfully")
            DisplayNotes();
            resetForm();
        })
        .catch(error => {
            throw error;
        });
}

function DisplayNotes() {
    let data = [];
    let innerHtml = "";
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList";
    let methodCall = "GET";
    makeServiceCall(methodCall, postURL, true)
        .then(responseText => {
            let response = JSON.parse(responseText);
           console.log(response)
            data = Object(response.data.data)
            console.log(data)
            console.log(data.length)
            console.log(data[0].title)
            for (let details of data) {
              console.log(details.color)
             if(details.isDeleted === false) {
                 let array = [ details.id , details.title , details.description ,details.color ]
                 color = details.color
                 console.log(array)
                innerHtml += `
                                <div class="noteCard my-2 mx-2 card" style="width: 18rem;background-color:${color}; box-shadow: 0 .2rem 1rem rgba(0.1, 1, 1, 0.1)!important; 
                                border: 2px solid rgba(0,0,0,.125);
                                border-radius: 0.55rem;">
                                        <div class="card-body">
                                            <h5 class="card-title" data-toggle="modal" data-target="#myModal" onClick="updateNote('${details.id}','${details.title}','${details.description}',this )">${details.title}</h5>
                                            <p class="card-text" style="margin-top: 10%;">${details.description}</p>
                                            <div class="svg-icon"  padding: 10px 0px;">
                                            <svg style="margin-left: 3px; xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell"
                                            viewBox="0 0 16 16">
                                            <path
                                              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                          </svg>
                                          <svg  style="margin-left: 7px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-person-plus" viewBox="0 0 16 16">
                                            <path
                                              d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            <path fill-rule="evenodd"
                                              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                          </svg>
                                          <svg  style="margin-left: 7px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette"
                                            viewBox="0 0 16 16">
                                            <path
                                              d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                            <path
                                              d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                                          </svg>
                                          <svg  style="margin-left: 7px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image"
                                            viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            <path
                                              d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                          </svg>
                                          <svg  style="margin-left: 7px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive"
                                            viewBox="0 0 16 16">
                                            <path
                                              d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                          </svg>
                                       <div style="margin-top: -10%;">
                                      <button id="${details.id}" onclick="deleteNote(this.id)" alt="delete" style=" background-color: transparent; border: none; margin-left: 75%; margin-bottom: -8%; display: inline" >Delete </button>
                                  </div>
                                  </div>
                                        </div>                                        
                                    </div>`

             }
            };
           
            document.querySelector('#display').innerHTML = innerHtml

        })


}
function updateNote(id , tittle , discription , myModal ){
    console.log(id , tittle , discription)
    let Utittle =[tittle]
    let Udiscriptin =[discription]
    
    let innerHtml = "";
    var script  = document.createElement("script");
    if(tittle != null){
        innerHtml =
    ` 
    <div id="updateclose" class="container " style="justify-content: center; height: auto;">  
    <div class="card" style="width:300px ; opacity">
      <div class="card-body">
        <div class="modal-title" style="margin-top: 5%;">
            <input id="updatedTitle" value='${Utittle}' style=" margin-left:5%; border: transparent; appearance: initial; text-shadow: none; border-bottom: transparent;  outline-width: 0;" placeholder="tittle"  > 
         </div>
         <div style="margin-top: 5%;" >
             <input id="updatedDiscription" value='${Udiscriptin}' class="modal-body" style=" border: transparent; outline-width: 0;" placeholder="discription">
         </div>
         <div style="margin-top: -10%; margin-left: 8%;">
            <button id="${id}" onclick="updateApicall(this.id) , myFunction()" alt="delete" style=" background-color: transparent; border: none; margin-left: 80%; margin-bottom: -8%; display: inline" >update </button>
        </div>
      </div>
    </div>
</div>

`
        
}
document.querySelector('#dailog').innerHTML = innerHtml

}
function myFunction() {
    var x = document.getElementById("updateclose");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function updateApicall(id){

    const title = document.querySelector('#updatedTitle ').value;
const discripption = document.querySelector('#updatedDiscription ').value;
const updateid = id;
console.log(id ,title , discripption)
const noteData ={
    
        "noteId" : updateid,
        "title": title,
        "description": discripption,   
};
console.log(noteData);
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes";
    let methodCall = "POST";
    makeServiceCall(methodCall, postURL, true, noteData)
        .then(responseText => {
            console.log("note added succesfully")
            DisplayNotes();
        })
        .catch(error => {
            throw error;
        });
}
function deleteNote(details){
    // let detailId = JSON.stringify(details);
    // console.log(detailId);
    let data = {

        noteIdList: [details]  , 
        isDeleted: true

    }
    console.log(data);
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes";
    let methodCall = "POST";
    makeServiceCall(methodCall, postURL, true, data)
        .then(responseText => {
            console.log(responseText)
            console.log("note deleted succesfully")
        })
        .catch(error => {
            throw error;
        });
        DisplayNotes();


}


const resetForm = () => {
    setValue('#title', '');
    setValue('#description', '');
    setValue('#colour','#FFFFFF');

}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}


// function updateNote(data){
//     let innerHtml = "";
//     for (let details of data) {

//     }
//     let data = {
//         noteIdList: [details.id] ,
//         "title": title,
//         "description": description,
//     }
    

// }