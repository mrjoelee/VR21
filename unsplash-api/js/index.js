

// get api
const client_id = "kOwh_LYYd_4pmQZu1PGCViBEOWJ_XWwcx0PVVMmox6Y"; // Create an account unsplash tp hey client ID;
// capture search term 

//const searchStr = "beaches";

const searchBtn = document.querySelector("#search")
searchBtn.addEventListener("click", handleAddSubmit);

console.log(searchBtn);
function handleAddSubmit(event){
  event.preventDefault();
 
 const inputValue = document.querySelector("#search-input").value
  
 const resource = `https://api.unsplash.com/search/photos/?query=${inputValue}&per_page=20&client_id=${client_id}`;

  // make a request to unsplash 
  fetch(resource)
  .then((response) => response.json())
  .then((data) => {
    
  

// capture the api data 

// loop over the data and append to the dom
  for (let i = 0; i < data.results.length - 1; i++) {
    const cardCol = document.createElement('div')
    cardCol.classList.add("col-lg-3", "col-md-4", "col-sm-6", "d-flex");
    cardCol.innerHTML = `<div "class=card d-flex flex-column justify-content-between align-item-between">
    <img class="card-img" />
    </div>`;
  
      const url = data.results[i].urls.thumb;
      
      cardCol.querySelector(".card-img").setAttribute("src",url);
      const cardContainer = document.querySelector("#cardContainer");
      cardContainer.append(cardCol);
  }
});
}




