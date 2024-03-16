const newContactButton = document.querySelector(".newContactButton")
const modalDiv = document.querySelector(".modal")
const closeButton = document.querySelector("#close");

newContactButton.addEventListener("click", (event) =>{
    
    modalDiv.style.display = "block";
})

closeButton.addEventListener("click", (event) =>{

    modalDiv.style.display = "none";

    console.log(localStorage.getItem("valueName"));
    console.log(localStorage.getItem("emailValue"));
    console.log(localStorage.getItem("phoneValue"));

    teste()
})


