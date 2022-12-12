"use strict";

/* Variables */
const KEY = "card-data";
const CARD_ID = "data-card-identification";
const addForm = document.querySelector("#createModal form");

// selects the delete button from the modal 
const deleteBtn = document.querySelector("#deleteModal .btn-danger");
const deleteModal = document.querySelector("#deleteModal");
const updateModal = document.querySelector("#createModal");

/* AddEventListeners */

//getting the form for the addCardModal
addForm.addEventListener("submit",handleAddSubmit);
//global object in the JS - when page loads, it w will displayAllCards
window.addEventListener("load",displayAllCards);
// delete method
deleteBtn.addEventListener("click", deleteCard);
//show.bs.modal fires when the modal is about to be displayed - on this case the delete button modal
//anytime when the modal pops up, we add an eventlistener which is "setModalAttribute"
deleteModal.addEventListener("show.bs.modal", setModalAttribute);
updateModal.addEventListener("show.bs.modal",setModalAttribute);

/* Functions */
function handleAddSubmit(event){
    //stopping from refreshing the page when click "Submit" on the modal form 
    event.preventDefault();

    //input elements, has values as well on the information that user entered. 
    const title = addForm.elements.title.value;
    const description = addForm.elements.description.value;
    const imageUrl = addForm.elements.imageUrl.value;

    const cardInfo = {title, description, imageUrl};
    
    const idToUpdate = Number(event.target.closest("#createModal").dataset.cardSelective);

    //if click on updateButton, do not create a card, update the card
    if(!idToUpdate){
     //using Date.Now() to create a unique id. 
    cardInfo.id = Date.now();
    createCard(cardInfo);

    //localStorage save
    addCardToDb(cardInfo); 
    } else {
      cardInfo.id = idToUpdate;
      
      updateCard(cardInfo);
    }
   
    //resets the entry values for the form on the modal
    addForm.reset();

    //closes the modal when clicking on "save" inside the modal form
    const closeBtn = document.querySelector("[data-bs-dismiss='modal']");
    closeBtn.click();
}

function prePopulateData(){
  //finds the data-attribute of card
  const cardId = Number(document.querySelector('#createModal').dataset.cardSelective);

  let data = loadCardFromDb();

  //fetches the corresponding data from local storage
  const cardData = data.find((card) => card.id === Number(cardId));

  //pre-populates the information to the form
  addForm.elements.title.value = cardData.title;
  addForm.elements.description.value = cardData.description;
  addForm.elements.imageUrl.value = cardData.imageUrl;
}

//cannot use an event parameter, without having an addEventListener. 
function updateCard(newInfo){
  
  let data = loadCardFromDb();
  
  //find the data to find out the correct data-card-identification so we can edit it.
  const foundCard = data.find((card) => card.id === newInfo.id);
  
  const itemToUpdate = document.querySelector( `#cardContainer [data-card-identification="${newInfo.id}"]`)

  //updating the UI 
  itemToUpdate.querySelector(".card-title").textContent = newInfo.title;
  itemToUpdate.querySelector(".card-text").textContent = newInfo.description;
  itemToUpdate.querySelector(".card-img-top").setAttribute("src", newInfo.imageUrl);
  itemToUpdate.querySelector(".card-img-top").setAttribute("alt", newInfo.imageUrl);
  
  //updating the database
  foundCard.title = newInfo.title;
  foundCard.description = newInfo.title; 
  foundCard.imageUrl = newInfo.imageUrl;
  
  saveCardToDb(data);

  }

  //this will select the modal delete button and call the function delete card (which card open the deleteModal)
function setModalAttribute(event){
  
  const addBtn = document.getElementById("add-btn");
  const updateBtn = document.getElementById("updateBtn");

  

    if(event.relatedTarget === addBtn){
      addForm.reset();
      event.target.dataset.cardSelective ="";

    } else if(event.relatedTarget === updateBtn){

    //related target the item that called the deleteModal from the new card which is the delete button. 
    // it will look on the delete button and look at the parent with the matching class or identifier (relatedTarget.closest())
    let cardTriggerModal = event.relatedTarget.closest(".col-lg-3").getAttribute(CARD_ID);
  
    //will add which ever button click for the modal
    event.target.dataset.cardSelective = cardTriggerModal;
    prePopulateData();
    } else{
      let cardTriggerModal = event.relatedTarget.closest(".col-lg-3").getAttribute(CARD_ID);

      event.target.dataset.cardSelective = cardTriggerModal;
    }
  
  }
  
  //delete card from page
  //parent - selects the #deleteButton which is the button on the first display on page,
  // and will get the closest ".col-lg-3" which will remove it after filtering from the localStorage
function deleteCard(event){
    //grabs the modal delete, grabbing the data-card-identification that is associated with the modal at that time which 
    //would match one the cards in containers
    const idToDelete= Number(event.target.closest('#deleteModal').dataset.cardSelective);

    //going to the cardContainer and find the card that matches the data-card-identifications with the current modal data-card-identification. 
    //starting to the id cardContainer, and find the element that find that attribute. 
    let itemToDelete = document.querySelector(`#cardContainer [data-card-identification="${idToDelete}"]`);

    let data = loadCardFromDb();

    //keep the ones that don't have this specific Id, filter creates a new array
    data = data.filter((cardInfo) => cardInfo.id !== idToDelete);
    saveCardToDb(data);
    itemToDelete.remove();
  }

//Create a new card 
function createCard(cardInfo){
    const cardCol = document.createElement('div')
    cardCol.classList.add("col-lg-3", "col-md-4", "col-sm-6", "d-flex", "justify-content-center");
    cardCol.innerHTML = `
    <div class="card">
            <img class="card-img-top" />
             <div class="card-body d-flex flex-column justify-content-between ">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <div>
                  <!-- update button -->
                  <button
                    type="button"
                    id="updateBtn"
                    class="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#createModal"
                  >
                    Update
                  </button>

                  <!-- delete button -->
                  <button
                    type="button"
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
    cardCol.querySelector(".card-title").textContent = cardInfo.title;
    cardCol.querySelector(".card-text").textContent = cardInfo.description;
    cardCol.querySelector(".card-img-top").setAttribute("src",cardInfo.imageUrl);
    cardCol.querySelector(".card-img-top").setAttribute("alt",cardInfo.title);

    //add Card to the page
    const cardContainer = document.querySelector("#cardContainer");
    cardContainer.append(cardCol);


    //class has to start with "data-". will use this attribute to know which card to delete from DB
    //adding a attribute to the cardCol, which is a type of data-card-identification
    cardCol.setAttribute(CARD_ID, cardInfo.id);
    // document.querySelector(".btn danger").setAttribute(BUTTON_ID_ATTRIBUTE,);
    
}

/*Local Storage*/

//saving cards to localStorage (inspect -> Application to see K, V)
function addCardToDb(cardInfo){
    let data = loadCardFromDb();

    data.push(cardInfo);

    //save it back to localStorage
    saveCardToDb(data);
}

//displaying from the database
function displayAllCards(){
    let data = loadCardFromDb();
    
    //loops every card that has been saved in the local db to display it 
    data.forEach((cardInfo) => createCard(cardInfo));
}

//loading from the database
function loadCardFromDb(){
    let data = JSON.parse(localStorage.getItem(KEY));
    if(!data){
        data=[];
    }
    return data;
}

//save it back to the local storage
function saveCardToDb(data){
    //using stringify JSON.Stringify to save it as an object
    localStorage.setItem(KEY, JSON.stringify(data));
}

