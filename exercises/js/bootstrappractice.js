const createModal = new bootstrap.Modal(
  document.querySelector("#addCardModal")
);

const buildContentCard = ({ imageUrl, title, description }) => {
  const contentCard = `
  <div class="col-md-3">
              <div class="card mb-4 p-2" style="width: 18rem">
                <img
                  src=${imageUrl}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">
                    ${description}
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
                `;
  return contentCard;
};

//append to the dom (page)
const appendItems = (arrOfItems) => {
  const row = document.querySelector(".row");
  row.innerHTML = "";

  arrOfItems.forEach((item) => {
    const newContentCard = buildContentCard(item);
    row.insertAdjacentHTML("beforeend", newContentCard);
  });
};

document.querySelector("#saveBtn").addEventListener("click", (e) => {
  const imageUrl = document.querySelector("#imageUrl").value;
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  //data in localStorage
  const currentItems = JSON.parse(localStorage.getItem("items")) || [];

  const newItem = { title, imageUrl, description };
  const newItems = [...currentItems, newItem];

  // save it in localStorage
  localStorage.setItem("items", JSON.stringify(newItems));

  appendItems(newItems);

  createModal.hide();
});
