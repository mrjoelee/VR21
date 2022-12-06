//local storage
const CARD_DATA_KEY = "card-data";
const CARD_TITLE_ATTRIBUTE = "data-attribute";

//getting the form for the addMemeModal
 const addForm = document.querySelector("#addMemeModal form"); 

 addForm.addEventListener("submit", handleAddSubmit);
 //global object in javascript
 window.addEventListener("load",addAllCardsToUI)

 function handleAddSubmit(event){
    //stopping from refreshing the page when "Submit"
    event.preventDefault();
    //console.log(event.target); // you can get the form that was submitted

    //input elements, has values as well on the information that user entered. 
    const imageUrl = addForm.elements.imageUrl.value;
    const topText = addForm.elements.topText.value;
    const bottomText = addForm.elements.bottomText.value;

    //storing the elements in an object
    const dataCard = {imageUrl, topText, bottomText, id:Date.now()};

    createCard(dataCard);

    //local save
    addCarlToDB(dataCard);

    //resetting the form for the modal for new meme 
    addForm.reset();

    //closes the modal when clicking on saveChanges 
    const closeBtn = document.querySelector("[data-bs-dismiss='modal']");
    closeBtn.click();
 }

 function createCard(dataCard){
    const cardCol = document.createElement('div')
    cardCol.classList.add("col");
    cardCol.innerHTML = `
    <div class="card" style="width: 18rem">
    <img  class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text"></p>
      <button type="button" class="btn btn-danger">
      Delete
      </button>
    </div>
    </div>`;

    //Add data to the url, top text, and bottom text
    cardCol.querySelector(".card-img-top").setAttribute("src",dataCard.imageUrl);
    cardCol.querySelector(".card-img-top").setAttribute("alt", dataCard.topText);

    cardCol.querySelector(".card-title").textContent = dataCard.topText;
    cardCol.querySelector(".card-text").textContent = dataCard.bottomText;

    //delete method
    //cardCol. will use the button within the innerHTML 
    

    const deleteBtn = cardCol.querySelector(".btn-danger");
    deleteBtn.addEventListener("click", deleteCard);
    
    //class has to start with "data-"
    //will use this attribute to know which card to delete from the DB 
    cardCol.setAttribute(CARD_TITLE_ATTRIBUTE, dataCard.id);

    //add cardCol to the page
    const cardContainer = document.querySelector("#cardContainer");
    cardContainer.append(cardCol);
 }

 //adding the local storage (inspect->application->local Storage)
 function addCarlToDB(dataCard){
  let data = loadDataFromDB();
   data.push(dataCard);

   //save it back to local storage
   saveDataToDB(data);
 }

 //adding to the page to display
 function addAllCardsToUI(event){
    let data = loadDataFromDB();
    //loops every card that has been saved in the local db to display it 
    data.forEach((dataCard)=> createCard(dataCard));
 }

 //loading from the database
 function loadDataFromDB(){
    let data = JSON.parse(localStorage.getItem(CARD_DATA_KEY));
   if(!data){
     data = [];
   }
   return data;
 }

//deleting card from page
function deleteCard(event){
    //can use same variable since it's different function
    //select the card column that contains it.
    // it's like querySelector, but works backwards - 
    const deleteBtn = event.target;
    const cardCol = deleteBtn.closest(".col");

    //gets the attribute that was set on the top to find out the unique card
    const  idToDelete = Number(cardCol.getAttribute(CARD_TITLE_ATTRIBUTE));
    let data = loadDataFromDB();

    //keep the ones that don't have this specific topText, filter creates a new array
    data = data.filter((dataCard) => dataCard.id !== idToDelete);
    saveDataToDB(data);
    cardCol.remove();

}

//save it back to local storage
function saveDataToDB(data){
   localStorage.setItem(CARD_DATA_KEY, JSON.stringify(data));
}