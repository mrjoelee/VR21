"use strict";


//fetching the data from the link
fetch("https://jsonplaceholder.typicode.com/photos")

//getting the response of the json values
.then((response) => response.json())

//function to allocate the json data into the right element
.then((json) =>{
    const container = document.querySelector("#imageContainer");

    for(let i=0; i < json.length -1; i++){

        //text
        const text = document.createElement("p");
        text.innerText = json[i].title;

        //images
        //creating a new element of img to each columns
        const img = document.createElement("img");
        //json has a property of url 
        img.setAttribute("src",json[i].thumbnailUrl);

        //adding the image to the col
        container.append(img,text);
    }

});