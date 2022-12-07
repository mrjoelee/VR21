//local Storage
const KEY = "card-data";
const CARD_TITLE_ATTRIBUTE = "data-attribute";

//getting the form for the addCardModal
const addForm = document.querySelector("#createModal form");
addForm.addEventListener("submit",handleAddSubmit);

//global object in the JS - when page loads, it w will displayAllCards
window.addEventListener("load",displayAllCards);

function handleAddSubmit(event){
    //stopping from refreshing the page when click "Submit" on the modal form 
    event.preventDefault();

    //input elements, has values as well on the information that user entered. 
    const title = addForm.elements.title.value;
    console.log(title);
    const description = addForm.elements.description.value;
    const imageUrl = addForm.elements.imageUrl.value;

    //storing the elements in an object
    //using Date.Now() to create a unique id. 
    const cardInfo = {id:Date.now(), title, description, imageUrl};
    createCard(cardInfo);

    //localStorage save
    addCardLocalStorage(cardInfo); 

    //resets the entry values for the form on the modal
    addForm.reset();

    //closes the modal when clicking on "save" inside the modal form
    const closeBtn = document.querySelector("[data-bs-dismiss='modal']");
    closeBtn.click();


}

//Create a new card 
function createCard(cardInfo){
    const cardCol = document.createElement('div')
    cardCol.classList.add("col-lg-3", "col-md-4", "col-sm-6", "d-flex");
    cardCol.innerHTML = `
    <div class="card">
            <img class="card-img-top" />
             <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <div>
                  <!-- update button -->
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                  >
                    Update
                  </button>

                  <!-- delete button -->
                  <button
                    type="button"
                    id = "deleteButton"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete
                  </button>
                </div>
              </div>
              </div>`;
    //Add data to the title, description, url 
    //adding title 
    cardCol.querySelector(".card-title").textContent = cardInfo.title;
    //adding description
    cardCol.querySelector(".card-text").textContent = cardInfo.description;
    //adding url and alt 
    cardCol.querySelector(".card-img-top").setAttribute("src",cardInfo.imageUrl);
    cardCol.querySelector(".card-img-top").setAttribute("alt",cardInfo.title);

    //add Card to the page
    const cardContainer = document.querySelector("#cardContainer");
    cardContainer.append(cardCol);



    //class has to start with "data-". will use this attribute to know which card to delete from DB
    cardCol.setAttribute(CARD_TITLE_ATTRIBUTE, cardInfo.id);

    //update method
    const updateBtn = cardCol.querySelector(".btn-warning");
    updateBtn.addEventListener("click",updateCard);

}



//saving cards to localStorage (inspect -> Application to see K, V)
function addCardLocalStorage(cardInfo){
    let data = loadLocalDb();
    data.push(cardInfo);

    //save it back to localStorage
    saveCardLocalStorage(data);
}

//displaying from the database
function displayAllCards(event){
    let data = loadLocalDb();
    
    //loops every card that has been saved in the local db to display it 
    data.forEach((cardInfo) => createCard(cardInfo));
}


//loading from the database
function loadLocalDb(){
    let data = JSON.parse(localStorage.getItem(KEY));
    if(!data){
        data=[];
    }
    return data;
}

// delete method
// const deleteBtn = document.querySelector("#deleteModal .btn-danger");
// console.log(deleteBtn);
// deleteBtn.addEventListener("click", deleteCard);



document.querySelector("#deleteModal").addEventListener("show.bs.modal", addModalListeners);

function addModalListeners(event){
document.querySelector("#deleteModal .btn-danger").addEventListener("click",deleteCard);

}

//delete card from page
function deleteCard(event){
    const parent = document.querySelector("#deleteButton");
    console.log(parent);
    const child = parent.closest(".col-lg-3");
    console.log(child);

    //gets the attribute that was set on the top to find out the unique card
    //converting it to a Number since the attribute is an Id of Date.now();
    const idToDelete = Number(child.getAttribute(CARD_TITLE_ATTRIBUTE));
    let data = loadLocalDb();

    //keep the ones that don't have this specific Id, filter creates a new array
    data = data.filter((cardInfo) => cardInfo.id !== idToDelete);
    saveCardLocalStorage(data);
    child.remove();
}

//save it back to the local storage
function saveCardLocalStorage(data){
    //using stringify JSON.Stringify to save it as an object
    localStorage.setItem(KEY, JSON.stringify(data));
}

function updateCard(event){
  
    //update card 
    // change the innerHTML of each element by querying it by the unique id.  
}