//getting the form for the addMemeModal
 const addForm = document.querySelector("#addMemeModal form"); 

 addForm.addEventListener("submit", handleAddSubmit);

 function handleAddSubmit(event){
    //stopping from refreshing the page when "Submit"
    event.preventDefault();
    //console.log(event.target); // you can get the form that was submitted

    //input elements, has values as well on the information that user entered. 
    const imageUrl = addForm.elements.imageUrl.value;
    const topText = addForm.elements.topText.value;
    const bottomText = addForm.elements.bottomText.value;

    //storing the elements in an object
    const dataCard = {imageUrl, topText, bottomText};
    createCard(dataCard);


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
    console.log(dataCard)
    cardCol.querySelector(".card-img-top").setAttribute("src",dataCard.imageUrl);
    cardCol.querySelector(".card-img-top").setAttribute("alt", dataCard.topText);

    cardCol.querySelector(".card-title").textContent = dataCard.topText;
    cardCol.querySelector(".card-text").textContent = dataCard.bottomText;

    //add cardCol to the page
    const cardContainer = document.querySelector("#cardContainer");
    cardContainer.append(cardCol);
 }