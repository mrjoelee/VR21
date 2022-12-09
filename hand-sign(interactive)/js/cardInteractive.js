"use strict";

//local Storage
const KEY = "card-data";
const CARD_TITLE_ATTRIBUTE = "data-card-identification";

/*
 * Add Event Listeners
 */

//getting the form for the addCardModal
const addForm = document.querySelector("#createModal form");
addForm.addEventListener("submit",handleAddSubmit);

//global object in the JS - when page loads, it w will displayAllCards
window.addEventListener("load",displayAllCards);

// delete method
const deleteBtn = document.querySelector("#deleteModal .btn-danger");
// console.log(deleteBtn);
deleteBtn.addEventListener("click", deleteCard);

// selects the delete button from the modal 
const deleteModal = document.querySelector("#deleteModal");

//show.bs.modal fires when the modal is about to be displayed - on this case the delete button modal
//internal thing for bootstrap ("show.bs.modal") - anytime when the modal pops up, we add an eventlistener which is "setModalAttribute"
deleteModal.addEventListener("show.bs.modal", setModalAttribute);

// //update method
// const updateBtn = document.querySelector("#createModal");
// updateBtn.addEventListener("click", updateCard)
const updateModal = document.querySelector("#createModal");
updateModal.addEventListener("show.bs.modal",setModalAttribute);

function handleAddSubmit(event){
    //stopping from refreshing the page when click "Submit" on the modal form 
    event.preventDefault();
    
    //input elements, has values as well on the information that user entered. 
    // using the name attribute from the html form and value is whatever the user is typing
    const title = addForm.elements.title.value;
    const description = addForm.elements.description.value;
    const imageUrl = addForm.elements.imageUrl.value;

    const cardInfo = {title, description, imageUrl};

    
    const idToUpdate = Number(event.target.closest("#createModal").dataset.cardSelective);

  //if click on updatebutton, do not create a card, update the card
    if(!idToUpdate){
      //storing the elements in an object
    //using Date.Now() to create a unique id. 
    cardInfo.id = Date.now();
    createCard(cardInfo);

    //localStorage save
    addCardLocalStorage(cardInfo); 
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

//Create a new card 
function createCard(cardInfo){
    const cardCol = document.createElement('div')
    cardCol.classList.add("col-lg-3", "col-md-4", "col-sm-6", "d-flex");
    cardCol.innerHTML = `
    <div class="card">
            <img class="card-img-top" />
             <div class="card-body d-flex flex-column justify-content-between align-item-between">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <div>
                  <!-- update button -->
                  <button
                    type="button"
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
    //adding a attribute to the cardCol, which is a type of data-card-identification
   cardCol.setAttribute(CARD_TITLE_ATTRIBUTE, cardInfo.id);
    // document.querySelector(".btn danger").setAttribute(BUTTON_ID_ATTRIBUTE,);
    
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


//cannot use an event parameter, without having an addEventListener. 
function updateCard(newInfo){

 
let data = loadLocalDb();

//find the data to find out the correct data-card-identification so we can edit it.
//find function should be returning a boolean 
//old information on found card
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

  //gets the attribute that was set on the top to find out the unique card
  //converting it to a Number since the attribute is an Id of Date.now();
  // const idToUpdate1 = Number(child.getAttribute(CARD_TITLE_ATTRIBUTE));

  saveCardLocalStorage(data);
    // const cardContainer = document.querySelector("#cardContainer");
    
    //cardContainer.append(updatedTitle, updatedDescription, updateImageUrl);
  
      //update card 
      // change the innerHTML of each element by querying it by the unique id.  
  }


//this will select the modal delete button and call the function delete card (which card open the deleteModal)
function setModalAttribute(event){

const addBtn = document.getElementById("add-btn")

//since the add button also calls the createModal, we need a validation when clicking the add doesn't trigger the setAttribute.
// however the add button is not inside a column. 
if(event.relatedTarget === addBtn){
  event.target.dataset.cardSelective ="";
} else {
   //related target the item that called the deleteModal from the new card which is the delete button. 
 // it will look on the delete button and look at the parent with the matching class or identifier (relatedTarget.closest())
let cardTriggerModal = event.relatedTarget.closest(".col-lg-3").getAttribute(CARD_TITLE_ATTRIBUTE);
//please note that since it's using the same modal for create button, it's trigging the setModal as an update when clicking on the Add.

//any time when you click a modal the data attributes will change, will reach into the specific card by the id. 
//setting the modalAttribute to match the card data-card-identification (Card-title-Attribute);
//dataset retrieve the data-attribute
//will add which ever button click for the modal
event.target.dataset.cardSelective = cardTriggerModal;
}
// console.log(event);
//  console.log(event.target);
//  console.log(event.relatedTarget);



// deleteModal.dataset.cardSelective = cardTriggerModal;
// updateModal.dataset.cardSelective = cardTriggerModal;
// console.log(cardTriggerModal);


}

//delete card from page
//parent - selects the #deleteButton which is the button on the first display on page,
// and will get the closest ".col-lg-3" which will remove it after filtering from the localStorage
function deleteCard(event){
  //grabs the modal delete, grabbing the data-card-identification that is associated with the modal at that time which 
  //would match one the cards in containers
  const idToDelete= Number(event.target.closest('#deleteModal').dataset.cardSelective);

  // console.log(idToDelete);

  //going to the cardContainer and find the card that matches the data-card-identifications with the current modal data-card-identification. 
  //starting to the id cardContainer, and find the element that find that attribute. 
  let itemToDelete = document.querySelector(`#cardContainer [data-card-identification="${idToDelete}"]`);

  // console.log(idToDelete);
  console.log(itemToDelete)
    //gets the attribute that was set on the top to find out the unique card
    //converting it to a Number since the attribute is an Id of Date.now();
    // const idToDelete = Number(child.getAttribute(CARD_TITLE_ATTRIBUTE));
    let data = loadLocalDb();

    //keep the ones that don't have this specific Id, filter creates a new array
    data = data.filter((cardInfo) => cardInfo.id !== idToDelete);
    saveCardLocalStorage(data);
    itemToDelete.remove();
}

//save it back to the local storage
function saveCardLocalStorage(data){
    //using stringify JSON.Stringify to save it as an object
    localStorage.setItem(KEY, JSON.stringify(data));
}

