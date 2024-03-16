/* 
Esse código captura as informações dos campos do formulário
e os salva dentro do cachê do navegador.
*/

/* Campos de captura de dados. */

const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const numberField = document.querySelector("#phone");

/* Botão. */

const saveButton = document.querySelector(".saveButton");

/* 
Capturando os valores e os colocando dentro do cachê do navegador.
*/

saveButton.addEventListener("click", (event) =>{

    let name = nameField.value;
    let email = emailField.value;
    let phone = numberField.value;

    localStorage.setItem("valueName", name);
    localStorage.setItem("emailValue", email);
    localStorage.setItem("phoneValue", phone);

    /* Conferindo se os dados foram salvos no cachê. */



});
