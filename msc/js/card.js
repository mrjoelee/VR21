      document.querySelector("#add-button").addEventListener("click", (e) => {
        const div = document.createElement('div');
        div.innerText = "My info card";
        
        document.querySelector(".row").append(div);
      });

    //   document.querySelector(".row").insertAdjacentHTML("beforeend",contentcard);

         //template literal way
         document.querySelector("#add-button").addEventListener("click", (e) => {
          const contentCard = `
        <div class="col-md-3">
              <div class="card">
                <img
                  src="https://miro.medium.com/max/626/0*9kXPss-Erpgu-HI2.gif"
                  class="card-img-top"
                  alt="list"
                />
                <div class="card-body">
                  <h5 class="card-title">Listing</h5>
                  <p class="card-text">
                    The easiest and most basic hand gesture is numerical. ANY TIME
                    you say a number, perform the corresponding gesture.
                  </p>
  
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
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>`;
          document
            .querySelector(".row")
            .insertAdjacentHTML("beforeend", contentCard);
  
          //non-temperal way method
          // document.querySelector(".row").append(columnCard);
        });