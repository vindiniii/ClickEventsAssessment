const buttonFoo = document.querySelector("#fooButton");
const buttonBar = document.querySelector("#barButton");
const buttonFooBar = document.querySelector("#fooBarButton");

const main = document.querySelector("main");

//When "Foo" button is clicked
buttonFoo.addEventListener("click", function() {

    const h3 = document.createElement("h3");
    h3.textContent = "Foo";
    main.appendChild(h3);

})

//When "Bar" button is clicked
buttonBar.addEventListener("click", function() {

    const h3 = document.createElement("h3");
    h3.textContent = "Bar";
    main.appendChild(h3);

})

//When "Foobar" button is clicked
buttonFooBar.addEventListener("click", function() {

    const h2 = document.createElement("h2");
    h2.textContent = "Foobar";
    main.appendChild(h2);

})