let innerHTML = "";
const getArchiveData = () => {
    let data = [];
    let innerHtml = "";
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList";
    let methodCall = "GET";
    makeServiceCall(methodCall, postURL, true)
        .then(responseText => {
            let response = JSON.parse(responseText);
            data = Object(response.data.data)
            for (let details of data) {
             if( details.isArchived === true ) {
                innerHtml += `
                                <div class="noteCard my-2 mx-2 card" style="width: 18rem;background-color:${color}; box-shadow: 0 .2rem 1rem rgba(0.1, 1, 1, 0.1)!important; 
                                border: 2px solid rgba(0,0,0,.125);
                                border-radius: 0.55rem;">
                                        <div class="card-body">
                                            <h5 class="card-title" data-toggle="modal" data-target="#myModal" onClick="updateNote('${details.id}','${details.title}','${details.description}',this )">${details.title}</h5>
                                            <p class="card-text" style="margin-top: 10%;">${details.description}</p>
                                            <div class="svg-icon"  padding: 10px 0px;">
                                            <svg style="margin-left: 3px; margin-top:2%" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell"
                                            viewBox="0 0 16 16">
                                            <path
                                              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                          </svg>
                                          <svg  style="margin-left: 7px; margin-top:2%" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
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
                                          <button onclick="archiveData('${details.id}','${details.title}','${details.description}','${color}',this)" style="background-color:transparent;">
                                          <svg  style="margin-left: 7px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive"
                                            viewBox="0 0 16 16">
                                            <path
                                              d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                          </svg>
                                          </button>
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

const getTrashNotes = () => {
  console.log("lets get deleted note")
    let data = [];
    let innerHtml = "";
    let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList";
    let methodCall = "GET";
    makeServiceCall(methodCall, postURL, true)
        .then(responseText => {
            let response = JSON.parse(responseText);
            data = Object(response.data.data)
            for (let details of data) {
             if( details.isDeleted === true ) {
                innerHtml += `
                                <div class="noteCard my-2 mx-2 card" style="width: 18rem;background-color:${color}; box-shadow: 0 .2rem 1rem rgba(0.1, 1, 1, 0.1)!important; 
                                border: 2px solid rgba(0,0,0,.125);
                                border-radius: 0.55rem;">
                                        <div class="card-body">
                                            <h5 class="card-title" data-toggle="modal" data-target="#myModal" onClick="updateNote('${details.id}','${details.title}','${details.description}',this )">${details.title}</h5>
                                            <p class="card-text" style="margin-top: 10%;">${details.description}</p>
                                            <div class="svg-icon"  padding: 10px 0px;">
                                            <svg style="margin-left: 3px; margin-top:2%" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell"
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
                                          <button onclick="archiveData('${details.id}','${details.title}','${details.description}','${color}',this)" style="background-color:transparent;">
                                          <svg  style="margin-left: 7px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive"
                                            viewBox="0 0 16 16">
                                            <path
                                              d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                          </svg>
                                          </button>
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

const getReminderData = () => {
  let data = [];
  let innerHtml = "";
  let postURL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/getReminderNotesList";
  let methodCall = "GET";
  makeServiceCall(methodCall, postURL, true)
      .then(responseText => {
          let response = JSON.parse(responseText);
          data = Object(response.data.data)
          for (let details of data) {
           if( details.modifiedDate != " " ) {
              innerHtml += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;background-color:${color}; box-shadow: 0 .2rem 1rem rgba(0.1, 1, 1, 0.1)!important; 
              border: 2px solid rgba(0,0,0,.125);
              border-radius: 0.55rem;">
                      <div class="card-body" style="margin-bottom: -10%">
                          <h5 class="card-title" data-toggle="modal" data-target="#myModal" onClick="updateNote('${details.id}','${details.title}','${details.description}',this )">${details.title}</h5>
                          <p class="card-text" style="margin-top: 10%;">${details.description}</p>
                          <div style=" width: 300px; padding: 10px;  border: none;  margin-left: -8%; margin-top:-4%">${details.modifiedDate}</div>
                          <div class="svg-icon"  padding: 10px 0px;">
                          <svg style="margin-left: 3px; margin-top:2%" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell"
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
                        <button onclick="archiveData('${details.id}','${details.title}','${details.description}','${color}',this)" style="background-color:transparent;">
                        <svg  style="margin-left: 7px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive"
                          viewBox="0 0 16 16">
                          <path
                            d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        </button>
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

const showProfile = () => {
  let innerHTML = "";
  let name =  localStorage.getItem("firstName");
  let lastname =  localStorage.getItem("lastName");
  let email =  localStorage.getItem("email");
  innerHTML = ` 
  <div class="container" id="cardDisplay" style="position: relative;width:350px; height:250px;">
  <div  class="card" style="width:400px; height:250px;" >
  <div class="card-body">
  <div style=" margin-top: 5%">
    <h8 style=" margin-top: 5%" class="card-title" > ${name} ${lastname}</h8>
  </div>
    <p style="margin-top: 25px" class="card-text"> ${email}</p>
    <div style="   margin-left : 35%" >
    <a href="#" >logout</a>
    </div>
  </div>
  <button style=" margin-top: 45% ;  margin-left : 35%"   onclick=myFunctionprofile();>close </button>
  </div>
  </div>
  `
  document.querySelector('#profile').innerHTML = innerHTML;
  }

  const myFunctionprofile = () => {
    var x = document.getElementById("cardDisplay") ;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  