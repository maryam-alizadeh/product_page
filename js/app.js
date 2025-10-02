const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();

    productName.includes(searchValue) ? (product.style.display = "block") : (product.style.display = "none");
  });
};
const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);

  products.forEach((product) => {
    const category = product.dataset.category;
    filter === "all" ? (product.style.display = "block") : filter === category ? (product.style.display = "block") : (product.style.display = "none");
  });
};

searchInput.addEventListener("keyup", searchHandler);

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
